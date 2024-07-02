require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');

const token = process.env.TOKEN;

const bot = new TelegramBot(token, { polling: true });

const userData = {};

const sendWaitMessage = (time, callback, signal) => {
    return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            try {
                const result = callback();
                resolve(result);
            } catch (error) {
                reject(error);
            }
        }, time);

        signal.addEventListener('abort', () => {
            clearTimeout(timeout);
            reject(new DOMException('Aborted', 'AbortError'));
        });
    });
}

const startMessages = async (chatId, signal) => {
    try {
        await sendWaitMessage(0, async () => {
            await bot.sendVideoNote(chatId, fs.createReadStream('./video/video.mp4'));
            await bot.sendMessage(chatId, `💰If you want to teach how to make $1000 a day right now, you just need to write me and I'll give you all the instructions 
        
<b>👉 Write to me - @kami_trader_top</b>`, {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: '💵 START EARNING', url: 't.me/kami_trader_top' }],
                        [{ text: '👑 VIP SIGNALS', url: 't.me/kami_trader_top' }]
                    ]
                }
            });
        }, signal);

        await sendWaitMessage(30 * 1000, () => {
            bot.sendVideo(chatId, fs.createReadStream('./video/video_2.mp4'), {
                caption: `🔥😍 With the help of my VIP channel, a subscriber earned $150,000 in a month, starting with only $50,000 
Each of my members will get the same results, trading strategies, in-depth market analysis that will significantly increase your profits. 

✍️ Write me right now to start professional trading and become a VIP channel member.`,
                reply_markup: {
                    inline_keyboard: [
                        [{ text: '👉MESSAGE ME', url: 't.me/kami_trader_top' }],
                        [{ text: 'YOUR REVIEWS', url: 't.me/kamitrader_reviews' }]
                    ]
                }
            });
        }, signal);

        await sendWaitMessage(30 * 1000, () => {
            bot.sendVideo(chatId, fs.createReadStream('./video/video_3.mp4'), {
                caption: `☝️And this is happening on a daily basis! 

❗️ <b>The best part is that I will only be able to <u>allocate 8 more spots in the VIP channel</u> to handle the number of participants and work individually</b> 

<i>While you're thinking, someone is doing!</i>`,
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: '❗️Join VIP now', url: 't.me/kami_trader_top' }],
                    ]
                }
            });
        }, signal);

        await sendWaitMessage(30 * 1000, async () => {
            await bot.sendMediaGroup(chatId, [
                {
                    type: 'photo',
                    media: fs.createReadStream('./video/image_1.jpg')
                },
                {
                    type: 'video',
                    media: fs.createReadStream('./video/video_4.mp4')
                },
                {
                    type: 'photo',
                    media: fs.createReadStream('./video/image_2.jpg')
                }
            ]);

            await bot.sendMessage(chatId, `❗️Just look at the feedback my subscribers send me every day. 

They're the ones who, without fear, did it. I just did! 🔥

<b>And you can take your first profit today ⬇️ </b>
`, {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'START EARNING', url: 't.me/kami_trader_top' }],
                        [{ text: '📲 MORE REVIEWS', url: 't.me/kamitrader_reviews' }]
                    ]
                }
            });
        }, signal);

        await sendWaitMessage(30 * 1000, () => {
            bot.sendPhoto(chatId, fs.createReadStream('./video/image_3.jpg'), {
                caption: `While you're thinking and seats are running out, someone is making money 🤔`
            });
        }, signal);

        await sendWaitMessage(30 * 1000, () => {
            bot.sendMessage(chatId, `<b>Why start earning right now? 🤔</b> 

1️⃣ Places are limited. Once the number of participants reaches the limit I have set, I will not provide signals even for money. That's not my goal. 

2️⃣ All my participants earn at least $300 a day. 

3️⃣ Individual trading. 
I do not just give the best signals on the market, in parallel with this I find an individual approach to each student and no one is left without results. I personally communicate with each student 24/7

⚠️ 4 places left

How to get into VIP for free and trade every day 👉 @kami_trader_top
`, {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'START EARNING', url: 't.me/kami_trader_top' }]
                    ]
                }
            });
        }, signal);
    } catch (e) {
        if (e.name === 'AbortError') {
            console.log(`Operation aborted for chatId: ${chatId}`);
        } else {
            console.error(`Operation failed for chatId: ${chatId}`, e);
        }
    } finally {
        userData[chatId] = null;
    }
}

bot.onText(/\/start/, async msg => {
    const chatId = msg.chat.id;

    if (userData[chatId]) {
        userData[chatId].abort();
    }    

    userData[chatId] = new AbortController();

    await startMessages(chatId, userData[chatId].signal);
});

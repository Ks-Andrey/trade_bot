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

        await sendWaitMessage(20 * 60 * 1000, () => {
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

        await sendWaitMessage(1 * 60 * 60 * 1000, () => {
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

        await sendWaitMessage(3 * 60 * 60 * 1000, async () => {
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

            await bot.sendPhoto(chatId, fs.createReadStream('./video/image_6.jpg'), {
                caption: `Already ready to start making big money on a daily basis? 🤔 

📲 <b>Then here are some simple instructions: </b>

1) sign up using this link - 🔗 <b>CLICK FOR REGISTRATION</b> (https://pocket1.click/register?utm_campaign=42799&utm_source=affiliate&utm_medium=revshare&a=O5cSSWv6u0TN46&ac=kamifb2&code=50START) 
2) make a deposit that you are happy with
3) send me your UID in private messages and I will send you a link to the VIP channel, where you will get up to 20 signals daily, which will take you to a new level of income 💰💰 

After that we will continue our work and I will help you along your way`,
                reply_markup: {
                    inline_keyboard: [
                        [{ text: `I've met all the conditions✅`, url: 't.me/kami_trader_top' }]
                    ]
                },
                parse_mode: 'HTML'
            });

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

        await sendWaitMessage(24 * 60 * 60 * 1000, () => {
            bot.sendPhoto(chatId, fs.createReadStream('./video/image_3.jpg'), {
                caption: `While you're thinking and seats are running out, someone is making money 🤔`
            });
        }, signal);

        await sendWaitMessage(1 * 60 * 60 * 1000, () => {
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
        
        ////
        await sendWaitMessage(3 * 60 * 60 * 1000, () => {
            bot.sendVideo(chatId, fs.createReadStream('./video/video_5.mp4'));
        }, signal);

        await sendWaitMessage(8 * 60 * 60 * 1000, async () => {
            await bot.sendVideo(chatId, fs.createReadStream('./video/video_6.mp4'), {
                caption: `<b>Great night trading session in VIP</b> 👏
7 profitable trades in a row after the first two losing trades 🔥 🔥 🔥 

Total for VIP members 10 profitable ✅ and 2 losing ❌ trades 
(if we take into account the free channel)

<i>I am waiting for your feedback and see you tomorrow, good night everyone </i>🥰`,
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: '📲 Join VIP now 💵', url: 't.me/kami_trader_top' }]
                    ]
                }
            });

            await bot.sendPhoto(chatId, fs.createReadStream('./video/image_4.jpg'), {
                caption: `While you're thinking 🫵🏽, someone else is doing 
Another stack of daily reviews ❤️`,
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: '📲 MORE REVIEWS', url: 't.me/kamitrader_reviews' }]
                    ]
                }
            })
        }, signal);

        await sendWaitMessage(12 * 60 * 60 * 1000, async () => {
            await bot.sendPhoto(chatId, fs.createReadStream('./video/image_5.jpg'), {
                caption: `💰Take <b>3870$ in 10 minutes</b>, turn off emotions and stop 

A little bonus from me for 👑 channel members today.`,
                parse_mode: 'HTML'
            });

            await bot.sendPhoto(chatId, fs.createReadStream('./video/image_6.jpg'), {
                caption: `Already ready to start making big money on a daily basis? 🤔 

📲 <b>Then here are some simple instructions: </b>

1) sign up using this link - 🔗 <b>CLICK FOR REGISTRATION</b> (https://pocket1.click/register?utm_campaign=42799&utm_source=affiliate&utm_medium=revshare&a=O5cSSWv6u0TN46&ac=kamifb2&code=50START) 
2) make a deposit that you are happy with
3) send me your UID in private messages and I will send you a link to the VIP channel, where you will get up to 20 signals daily, which will take you to a new level of income 💰💰 

After that we will continue our work and I will help you along your way`,
                reply_markup: {
                    inline_keyboard: [
                        [{ text: `I've met all the conditions✅`, url: 't.me/kami_trader_top' }]
                    ]
                },
                parse_mode: 'HTML'
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

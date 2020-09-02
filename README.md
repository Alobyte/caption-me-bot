# Caption-Me-Bot
The purpose of this bot is to random generate and combine an image from a user-specified folder (create a folder for each user you want to be able to use the bot) with a
caption from the list of captions.

It's a very simple bot but very fun for personal uses with a group of friends!

This bot is not the original bot I created for this purpose. The original one has personal details about my friends and I and had way more pictures and captions. This repo's
purpose is just to showcase the functionality that I created with that other bot without revealing personal details.

##Commands:

###"caption me"
When a user types "caption me" in the channel (assuming that user has their own folder in the bot's local directory), the bot will search through their folder of photos
and combine it with a random caption in the "captionPhrase" array.

###"caption someone"
When a user types "caption someone" in the channel, it will randomly select a random user-specified folder in the bot's local directory and combine it with a random caption
in the "captionPhrase" array.

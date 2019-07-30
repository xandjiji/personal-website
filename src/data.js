import pokehash from './assets/img/pokehash.png';
import pokehashtwitterbot from './assets/img/pokemontwitterbot.png'

import thecoverproject from './assets/img/thecoverproject.png'
import thecoverprojectbot from './assets/img/thecoverprojectbot.png'

import hextech0xff20 from './assets/img/hextech0xff20.png'
import edgedetection from './assets/img/edgedetection.png'

import generativeart from './assets/img/generativeart.png'
import jogodavelha from './assets/img/jogodavelha.png'

import tboimod from './assets/img/tboimod.png'
import tibiaclips from './assets/img/tibiaclips.png'

const data = {
    items: [
        {
            id:             1,
            title:          'Pokehash',
            description:    'A deterministic Pokémon Trainer Card generator based on the sha-256 of the user\'s name.',
            img:            pokehash,
            github:         'https://github.com/xandjiji/pokehash',
            link:           'https://xandjiji.github.io/pokehash/',
            tags:           ['p5js', 'javascript']
        },
        {
            id:             2,
            title:          'Pokehash Twitter Bot',
            description:    'A twitter bot that automatically replies any mention with a Pokémon Trainer Card.',
            img:            pokehashtwitterbot,
            github:         'https://github.com/xandjiji/Pokemon-Trainer-Card-Generator',
            twitter:        'https://twitter.com/PokeTrainerCard',
            tags:           ['nodejs', 'twitter-api', 'jimp', 'twitter-bot']
        },
        {
            id:             3,
            title:          'The Cover Project Scraper',
            description:    'A file scraper for the website The Cover Project.',
            img:            thecoverproject,
            github:         'https://github.com/xandjiji/The-Cover-Project-Scraper',
            tags:           ['nodejs', 'cheerio', 'scraper', 'crawler']
        },
        {
            id:             4,
            title:          'The Cover Project Twitter Bot',
            description:    'A Twitter bot that posts video game covers from The Cover Project periodically.',
            img:            thecoverprojectbot,
            github:         'https://github.com/xandjiji/The-Cover-Project-Twitter-Bot',
            twitter:        'https://twitter.com/videogameboxes',
            tags:           ['nodejs', 'twitter-api', 'sharp', 'twitter-bot', 'cheerio', 'scraper', 'crawler']
        },
        {
            id:             5,
            title:          'Hextech Bot 0xFF20',
            description:    'A twitter bot that replies any mention with a random League of Legends post-game stats.',
            img:            hextech0xff20,
            github:         'https://github.com/xandjiji/Hextech0xFF20',
            twitter:        'https://twitter.com/Hextech0xFF20',
            tags:           ['nodejs', 'twitter-api', 'jimp', 'twitter-bot']
        },
        {
            id:             6,
            title:          'Edge Detection',
            description:    'A javascript implementation of a few differential operators and Canny\'s algorithm for detecting edges on images.',
            img:            edgedetection,
            github:         'https://github.com/xandjiji/edge-detection',
            link:           'https://xandjiji.github.io/edge-detection/',
            tags:           ['image-processing', 'edge-detection', 'differential-operator', 'convolution']
        },
        {
            id:             7,
            title:          'Generative Art',
            description:    'A simple generative art algorithm prototype.',
            img:            generativeart,
            github:         'https://github.com/xandjiji/generative-art',
            link:           'https://xandjiji.github.io/generative-art/',
            tags:           ['generative-art', 'processingjs']
        },
        {
            id:             8,
            title:          'Tic-Tac-Toe AI',
            description:    'An unbeatable AI for playing Tic-Tac-Toe, using the Minimax algorithm.',
            img:            jogodavelha,
            github:         'https://github.com/xandjiji/jogo-da-velha-IA-CSS',
            link:           'https://xandjiji.github.io/jogo-da-velha-IA-CSS/',
            tags:           ['artificial-intelligence', 'minimax']
        },
        {
            id:             9,
            title:          'Fruit Ninja item pack',
            description:    'A MOD for The Binding of Isaac game, using the official game API.',
            img:            tboimod,
            github:         'https://github.com/xandjiji/fruit-ninja-item-pack-TBOI-MOD',
            link:           'https://steamcommunity.com/sharedfiles/filedetails/?id=844685072',
            tags:           ['game-mod', 'lua']
        },
        {
            id:             10,
            title:          'TibiaClips',
            description:    'A Youtube channel dedicated to showcasing the best highlights from the Tibia game streaming community.',
            img:            tibiaclips,
            youtube:        'https://www.youtube.com/TibiaClips',
            tags:           ['community', 'video-editing', 'branding']
        }
    ]
}

export default data;

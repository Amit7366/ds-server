interface ProviderGame {
    platform: string,
    provider: string;
    games: {
        game_name: string;
        game_code: string;
        game_type: string;
        game_image: string;
    }[];
}
const pgsoft = {
    platform: 'digital',
    provider: 'pgsoft',
    games:
        [
            {
                "game_name": "Mahjong Ways",
                "game_code": "1189baca156e1bbbecc3b26651a63565",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Mahjong-Ways_rounded_1024.png"
            },
            {
                "game_name": "Mahjong Ways 2",
                "game_code": "ba2adf72179e1ead9e3dae8f0a7d4c07",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Mahjong-Ways2_rounded_1024.png"
            },
            {
                "game_name": "Treasures of Aztec",
                "game_code": "2fa9a84d096d6ff0bab53f81b79876c8",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Treasures-of-Aztec_rounded_1024.png"
            },
            {
                "game_name": "Leprechaun Riches",
                "game_code": "fb2a2ac51303c0a0801dbe6a72d936f7",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Leprechaun-Riches_rounded_1024.png"
            },
            {
                "game_name": "Lucky Neko",
                "game_code": "e1b4c6b95746d519228744771f15fe4b",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Lucky-Neko_icon_1024_rounded.png"
            },
            {
                "game_name": "Captain's Bounty",
                "game_code": "cd29b9906a852ce26b53b6d6d81037d4",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Captains-Bounty_Icon_Rounded_1024.png"
            },
            {
                "game_name": "Queen of Bounty",
                "game_code": "83a6890cf84e4c5a6bacf96d5355d472",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Queen-of-Bounty_1024_rounded.png"
            },
            {
                "game_name": "Wild Bandito",
                "game_code": "95fc290bb05c07b5aad1a054eba4dcc4",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Wild-Bandito_icon_1024_rounded.png"
            },
            {
                "game_name": "Ways of the Qilin",
                "game_code": "fedfca553a97a791a3a41c4f1e3bff58",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Ways-of-the-Qilin_icon_1024_rounded.png"
            },
            {
                "game_name": "Dragon Hatch",
                "game_code": "4afef91d3addb9ce5107abaf3342b9a5",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Dragon-Hatch_rounded_1024.png"
            },
            {
                "game_name": "Double Fortune",
                "game_code": "3810e528e0abb8ce1cd7ddc2ece005c0",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Double-Fortune_Icon_Rounded_1024.png"
            },
            {
                "game_name": "The Great Icescape",
                "game_code": "99f07ed2226f37e22570325fc1c078f2",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/The-Great-Icescape_Icon_Rounded_1024.png"
            },
            {
                "game_name": "Caishen Wins",
                "game_code": "82a810ba99a5fb3e23fc514afebd6314",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Caishen-Wins_rounded_1024.png"
            },
            {
                "game_name": "Ganesha Fortune",
                "game_code": "c4b57c6dcfac5c8a31b9174523103c8c",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Ganesha-Fortune_rounded_1024.png"
            },
            {
                "game_name": "Dreams of Macau",
                "game_code": "0ef82ebe6f819619f53b83e218b9452c",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Dreams-of-Macau_rounded_1024.png"
            },
            {
                "game_name": "Fortune Ox",
                "game_code": "8db4eb6d781f915eebab2a26133db0e9",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Fortune-Ox_icon_1024_rounded.png"
            },
            {
                "game_name": "Wild Bounty Showdown",
                "game_code": "c98bb64436826fe9a2c62955ff70cba9",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Wild-Bounty-Showdown_1024_rounded.png"
            },
            {
                "game_name": "Prosperity Fortune Tree",
                "game_code": "0da0fda6981138234f03cb665984c07e",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Prosperity-Fortune-Tree_rounded_1024.png"
            },
            {
                "game_name": "Diner Delights",
                "game_code": "7e6298970ad1c3c983e495be86833dee",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Diner-Delights_icon_1024_rounded.png"
            },
            {
                "game_name": "Egypt's Book of Mystery",
                "game_code": "1babfc499be7bc670f11695e8668b59d",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Egypts-Book-of-Mystery_icon_1024_rounded.png"
            },
            {
                "game_name": "Phoenix Rises",
                "game_code": "21c55c4cd28bb1ebf465fcfaf413477c",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Phoenix-Rises_app-icon_rounded_1024.png"
            },
            {
                "game_name": "Wild Fireworks",
                "game_code": "fb8888b2dec33fe9d28996376580b410",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Wild-Fireworks_icon_1024_rounded.png"
            },
            {
                "game_name": "Thai River Wonders",
                "game_code": "fcc6918b79eddf49984d4f5f650c8ded",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Thai-River-Wonders_icon_1024_rounded.png"
            },
            {
                "game_name": "Bali Vacation",
                "game_code": "c79544b2cf7a3326c85f6ab5bdf53d25",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Bali-Vacation_icon_1024_rounded.png"
            },
            {
                "game_name": "Crypto Gold",
                "game_code": "b1e11902cecf38023f2916569c32040a",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Crypto-Gold_icon_1024_rounded.png"
            },
            {
                "game_name": "Jurassic Kingdom",
                "game_code": "4eef5090166a6889956a630321713366",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Jurassic-Kingdom_icon_1024_rounded.png"
            },
            {
                "game_name": "Cocktail Nights",
                "game_code": "5bea5667515cb7a31f6f07dc3caa13b1",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Cocktail-Nights_1024_rounded.png"
            },
            {
                "game_name": "Fortune Tiger",
                "game_code": "9a8482565ce343ad3ea7fc4bc42cb043",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Fortune-Tiger_app-icon_rounded.png"
            },
            {
                "game_name": "Speed Winner",
                "game_code": "386a9d8e184d9bc7c7aca32a8a5db686",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Speed-Winner_1024_rounded.png"
            },
            {
                "game_name": "Legend of Perseus",
                "game_code": "6e37f6e1b6042c2147866c4d86206979",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Legend-of-Perseus_1024_rounded.png"
            },
            {
                "game_name": "Honey Trap of Diao Chan",
                "game_code": "cd0cc7e653b42133d57145d5505d4e96",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Honey-Trap-of-Diao-Chan_rounded_1024.png"
            },
            {
                "game_name": "Fortune Gods",
                "game_code": "d3aad7ca1486eb3f145e2c43f38b559c",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Fortune-Gods_rounded_1024.png"
            },
            {
                "game_name": "Win Win Won",
                "game_code": "43862cc768882dff441a60b26dcec1c0",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Win-Win-Won_rounded_1024.png"
            },
            {
                "game_name": "Medusa II",
                "game_code": "1c6d773d6a616d74e2573343a5dcecc3",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Medusa-II_rounded_1024.png"
            },
            {
                "game_name": "Tree of Fortune",
                "game_code": "e7d7e8396619459db2c178ed72f81049",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Tree-of-Fortune_rounded_1024.png"
            },
            {
                "game_name": "Medusa",
                "game_code": "dcc55631d793ad44be98d21c99f7e361",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Medusa_rounded_1024.png"
            },
            {
                "game_name": "Plushie Frenzy",
                "game_code": "b34c5e632cdc53fc67f1a5eec5758af7",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Plushie-Frenzy_rounded_1024.png"
            },
            {
                "game_name": "Gem Saviour",
                "game_code": "9e795df6bdf093a144e714fd35afbb7a",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Gem-Saviour_rounded_1024.png"
            },
            {
                "game_name": "Hood vs Wolf",
                "game_code": "222ce90a04a2246eecd5216454f9792f",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Hood-vs-Wolf_rounded_1024.png"
            },
            {
                "game_name": "Hotpot",
                "game_code": "2fea77daa52fd607ed0abe816e4dc7c7",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Hotpot_rounded_1024.png"
            },
            {
                "game_name": "Dragon Legend",
                "game_code": "b990b58ed9e1aa341b3164f49bcb1517",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Dragon-Legend_Icon_Rounded_1024.png"
            },
            {
                "game_name": "Mr. Hallow-Win",
                "game_code": "12e94577c713a431ef7765394bb9be2f",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/MrHallow-Win_Icon_Rounded_1024.png"
            },
            {
                "game_name": "Legend of Hou Yi",
                "game_code": "1ed6fe92243975f73c944342119a1336",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Legend-of-Hou-Yi_Icon_Rounded_1024.png"
            },
            {
                "game_name": "Prosperity Lion",
                "game_code": "1fcb23fa9fac3ca32e20adfe90028de3",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Prosperity-Lion_Icon_Rounded_1024.png"
            },
            {
                "game_name": "Hip Hop Panda",
                "game_code": "5fdbd55ac67eea146b93939ee060cd54",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Hip-Hop-Panda_Icon_Rounded_1024.png"
            },
            {
                "game_name": "Santa's Gift Rush",
                "game_code": "864edc20e589a738c632f8a49a2e02a3",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Santas-Gift-Rush_Icon_Rounded_1024.png"
            },
            {
                "game_name": "Baccarat Deluxe",
                "game_code": "22c3b8df172b40ac24a7e9c909e0e50e",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Baccarat-Deluxe_Icon_Rounded_1024.png"
            },
            {
                "game_name": "Gem Saviour Sword",
                "game_code": "4bbb563e9cf0211a3433beeebe70f35b",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Gem-Saviour-Sword_rounded_1024.png"
            },
            {
                "game_name": "Piggy Gold",
                "game_code": "a9d874dd5305212b09845fc88f72e02d",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Piggy-Gold_Icon_Rounded_1024.png"
            },
            {
                "game_name": "Symbols of Egypt",
                "game_code": "0c7c636333c3c0807d2da26e1f0c8cd1",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Symbols-of-Egypt_Icon_Rounded_1024.png"
            },
            {
                "game_name": "Emperor's Favour",
                "game_code": "12766ca09f503fec11f391199fce5e24",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Emperors-Favour_Icon_Rounded_1024.png"
            },
            {
                "game_name": "Ganesha Gold",
                "game_code": "8dcea650a5a4d96530a77e6df8f61923",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Ganesha-Gold_rounded_1024.png"
            },
            {
                "game_name": "Jungle Delight",
                "game_code": "232e8e0c74f9bb16ab676e5ed49d72b4",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Jungle-Delight_Icon_Rounded_1024.png"
            },
            {
                "game_name": "Journey to the Wealth",
                "game_code": "139f7ae7151a8bd388511bd8b7ce0c40",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Journey-to-the-Wealth_Icon_Rounded_1024.png"
            },
            {
                "game_name": "Flirting Scholar",
                "game_code": "0c884fde76cbc187f2797c4f76532220",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Flirting-Scholar_rounded_1024.png"
            },
            {
                "game_name": "Ninja vs Samurai",
                "game_code": "2eb712d4bb30e4594032ebf1464618b1",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Ninja-vs-Samurai_rounded_1024.png"
            },
            {
                "game_name": "Muay Thai Champion",
                "game_code": "82127ece1232c6762c81fedb73c99756",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Muay-Thai-Champion_rounded_1024.png"
            },
            {
                "game_name": "Dragon Tiger Luck",
                "game_code": "3d3dd6e2fd819832528108e0af197c43",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Dragon-Tiger-Luck_rounded_1024.png"
            },
            {
                "game_name": "Fortune Mouse",
                "game_code": "8e5a4dd7da06fb68165d13f8bcd06328",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Fortune-Mouse_rounded_1024.png"
            },
            {
                "game_name": "Reel Love",
                "game_code": "813138051d990c0c21fb78015b14cbef",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Reel-Love_rounded_1024.png"
            },
            {
                "game_name": "Gem Saviour Conquest",
                "game_code": "07d9e7940f430557447cb19692ae4409",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Gem-Saviour-Conquest_rounded_1024.png"
            },
            {
                "game_name": "Shaolin Soccer",
                "game_code": "da483088a7f719026e93ba95c5547a8c",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Shaolin-Soccer_rounded_1024.png"
            },
            {
                "game_name": "Candy Burst",
                "game_code": "27237d7e8d9b183c92fa9f6ab9832edc",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Candy-Burst_rounded_1024.png"
            },
            {
                "game_name": "Bikini Paradise",
                "game_code": "18f7f3fdda3e951989731b7204572a8f",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Bikini-Paradise_rounded_1024.png"
            },
            {
                "game_name": "Genie's 3 Wishes",
                "game_code": "16e34863dada5465919b289f83c494a1",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Genies-3-Wishes_rounded_1024.png"
            },
            {
                "game_name": "Circus Delight",
                "game_code": "5a11d239f4368b4ec21d31e5979d85cf",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Circus-Delight_icon_1024_rounded.png"
            },
            {
                "game_name": "Secrets of Cleopatra",
                "game_code": "7028ed373d5bffeeb22fa90c4066bd9e",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Secrets-of-Cleopatra_icon_1024_rounded.png"
            },
            {
                "game_name": "Vampire's Charm",
                "game_code": "8912f36ea0ca97fc6911fc21b3be6f6a",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Vampires-Charm_app-icon_rounded_1024.png"
            },
            {
                "game_name": "Jewels of Prosperity",
                "game_code": "f55a666db274fcf210dd69801ae7e87a",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Jewels-of-Prosperity_rounded_1024.png"
            },
            {
                "game_name": "Jack Frost's Winter",
                "game_code": "0a8772ad753cfce2c03c0599ad60c74c",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Jack-Frosts-Winter_icon_1024_rounded.png"
            },
            {
                "game_name": "Galactic Gems",
                "game_code": "5d26d9ec03d3bc031e49abd5b0ffbdda",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Galactic-Gems_1024_rounded.png"
            },
            {
                "game_name": "Guardians of Ice and Fire",
                "game_code": "4e2f6b7602035730e0e8ee89675a417c",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Guardians-of-Ice-and-Fire_rounded_1024.png"
            },
            {
                "game_name": "Opera Dynasty",
                "game_code": "c9ec6bce856aafad85f7de5405f7b1c3",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Opera-Dynasty_icon_1024_rounded.png"
            },
            {
                "game_name": "Majestic Treasures",
                "game_code": "894240c0ef08d5c2e29b231013e1514d",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Majestic-Treasures_icon_1024_rounded.png"
            },
            {
                "game_name": "Candy Bonanza",
                "game_code": "bbe2320adc5c506e7e56a2d24d96a252",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Candy-Bonanza-icon_1024_rounded.png"
            },
            {
                "game_name": "Heist Stakes",
                "game_code": "a4a67f1259cabed59e338e30149ceb0f",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Heist-Stakes_icon_1024_rounded.png"
            },
            {
                "game_name": "Rise of Apollo",
                "game_code": "3da7ee034052b8cb90c6ca060652ded4",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Rise-of-Apollo_1024_rounded.png"
            },
            {
                "game_name": "Mermaid Riches",
                "game_code": "a9d7a5af417a94caf554170e6b345e57",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Mermaid-Riches-icon_1024_rounded.png"
            },
            {
                "game_name": "Raider Jane's Crypt of Fortune",
                "game_code": "24d8e1dbc5cface0907f5a21ecd56753",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Raider-Janes-Crypt-of-Fortune_1024_rounded.png"
            },
            {
                "game_name": "Supermarket Spree",
                "game_code": "7ef03497fc0b21c34b137e85b1e409cd",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Supermarket-Spree_rounded_1024.png"
            },
            {
                "game_name": "Buffalo Win",
                "game_code": "2818a7add6e10b2ec5f938d7ae0efb04",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Buffalo-Win_icon_1024_rounded.png"
            },
            {
                "game_name": "Legendary Monkey King",
                "game_code": "5cdeba2ab48d6ba345b1a4de8e2776b5",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Legendary-Monkey-King_icon_1024_rounded.png"
            },
            {
                "game_name": "Spirited Wonders",
                "game_code": "87a05c81af5635bed41765bfd076ee15",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Spirited-Wonders_app-icon_rounded.png"
            },
            {
                "game_name": "Emoji Riches",
                "game_code": "101ca3ff83b149dcf3439309e9b32142",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Emoji-Riches_app-Icon_1024_rounded.png"
            },
            {
                "game_name": "Mask Carnival",
                "game_code": "adf297c2666c69b3abc3b61618d593b8",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Mask-Carnival_app-icon_rounded.png"
            },
            {
                "game_name": "Oriental Prosperity",
                "game_code": "23b43b58e11aadb1f27fd05ba41e9819",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Oriental-Prosperity_icon_1024_rounded.png"
            },
            {
                "game_name": "Garuda Gems",
                "game_code": "aa609892f551de2053e92427dc4ae17f",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Garuda-Gems_1024_rounded.png"
            },
            {
                "game_name": "Destiny of Sun & Moon",
                "game_code": "617ca04ffcffbc543a1a30cacdac98fa",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Destiny-of-Sun-and-Moon_icon_1024_rounded.png"
            },
            {
                "game_name": "Butterfly Blossom",
                "game_code": "116989bb267a72035bd01818c5496126",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Butterfly-Blossom_1024_rounded.png"
            },
            {
                "game_name": "Rooster Rumble",
                "game_code": "5c371d9fca6109c954de93ac7986c5db",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Rooster-Rumble_app-icon_rounded.png"
            },
            {
                "game_name": "The Queen's Banquet",
                "game_code": "1b317b5f8bf2ca0cc609307810407426",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/The-Queens-Banquet_icon_1024_rounded.png"
            },
            {
                "game_name": "Battleground Royale",
                "game_code": "e9f92f6edc2dac2d08bc345ee036260c",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Battleground-Royale_icon_1024_rounded.png"
            },
            {
                "game_name": "Win Win Fish Prawn Crab",
                "game_code": "9b344f0b2a9bda427684be60597d2fc6",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Win-Win-Fish-Prawn-Crab_rounded_1024.png"
            },
            {
                "game_name": "Lucky Piggy",
                "game_code": "66fadac68ed45e23def86c06cc811820",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Lucky-Piggy_icon_1024_rounded.png"
            },
            {
                "game_name": "Wild Coaster",
                "game_code": "a06f1a154698243bf2484853d38e5fbb",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Wild-Coaster_app-icon_rounded.png"
            },
            {
                "game_name": "Totem Wonders",
                "game_code": "a03c6e7a918132b50f9caa297df1752d",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Totem-Wonders_icon_1024_rounded.png"
            },
            {
                "game_name": "Alchemy Gold",
                "game_code": "9860c865264dcacad1ef37176cdefc1a",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Alchemy-Gold_1024_rounded.png"
            },
            {
                "game_name": "Asgardian Rising",
                "game_code": "08d92dc2ca14f42c681b44297386d600",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Asgardian-Rising_appicon_rounded.png"
            },
            {
                "game_name": "Midas Fortune",
                "game_code": "a2fd6b0cadc8fefccfb0d063b1f81d85",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Midas-Fortune_appicon_rounded.png"
            },
            {
                "game_name": "Fortune Rabbit",
                "game_code": "e175cdd3215a02f5539cc8354a149b75",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Fortune-Rabbit_appicon_rounded.png"
            },
            {
                "game_name": "Rave Party Fever",
                "game_code": "901aa1b709a937f6a04baddb98a8d1d3",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Rave-Party-Fever_1024_rounded.png"
            },
            {
                "game_name": "Hawaiian Tiki",
                "game_code": "35d6743ae5d73a3359f143cbb44ede09",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Hawaiian-Tiki_icon_1024_rounded.png"
            },
            {
                "game_name": "Bakery Bonanza",
                "game_code": "d0fe7aa2f7ed5778190b1e60d94e6773",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Bakery-Bonanza_app-Icon_1024_rounded.png"
            },
            {
                "game_name": "Songkran Splash",
                "game_code": "894b1c7609629cf9b3d127d9dbaa372c",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Songkran-Splash_appicon_rounded.png"
            },
            {
                "game_name": "Mystical Spirits",
                "game_code": "3b2d4d1ae24b1c3ad29556a6cf875f11",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Mystical-Spirits_icon_1024_rounded.png"
            },
            {
                "game_name": "Super Golf Drive",
                "game_code": "d37dde2adb52e0ea708c0ccd6877b1b3",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Super-Golf-Drive_icon_1024_rounded.png"
            },
            {
                "game_name": "Lucky Clover Riches",
                "game_code": "288f290554746bb32322a79b96ecdcbb",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Lucky-Clover-Lady_1024_rounded.png"
            },
            {
                "game_name": "Fruity Candy",
                "game_code": "9f2c89ae5b7c0894c9ee9e223e3fd9d8",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Fruity-Candy_1024_rounded.png"
            },
            {
                "game_name": "Cruise Royale",
                "game_code": "8489d662ccc07a2e9677729f76e26ae8",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Cruise-Royale_icon_1024_rounded.png"
            },
            {
                "game_name": "Safari Wilds",
                "game_code": "97c6f05ef6a0a34cad10d5e00edc909c",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Safari-Wilds_appicon_rounded.png"
            },
            {
                "game_name": "Gladiator's Glory",
                "game_code": "2454dc7cfdc651b7318950453bc3f617",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Gladiators-Glory_appicon_1024_rounded.png"
            },
            {
                "game_name": "Ninja Racoon Frenzy",
                "game_code": "6d1937d2e7f87306333443c99ac2c03f",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Ninja-Racoon-Frenzy_1024_rounded.png"
            },
            {
                "game_name": "Ultimate Striker",
                "game_code": "4415d83cd9c74299814c1473db83bf7f",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Ultimate-Striker_appicon_rounded.png"
            },
            {
                "game_name": "Wild Heist Cashout",
                "game_code": "028bd89b2120e880bcf1968c37277460",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Wild-Heist-Cashout_appicon_1024_rounded.png"
            },
            {
                "game_name": "Forge of Wealth",
                "game_code": "f8ec50fc2ef996e6c182fd2fe59a16fa",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Forge-of-Wealth_1024_rounded.png"
            },
            {
                "game_name": "Mafia Mayhem",
                "game_code": "c7b3016c70a06ddbb2355a3aee4179d0",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Mafia-Mayhem_1024_rounded.png"
            },

            {
                "game_name": "Werewolf's Hunt",
                "game_code": "2ac70bee7b47c172381e55f7e644d92e",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Werewolfs-Hunt_icon_1024_rounded.png"
            },
            {
                "game_name": "Tsar Treasures",
                "game_code": "1eb6a959aadf0491f4a648762d8d262a",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Tsar-Treasures_icon_1024_rounded.png"
            },
            {
                "game_name": "Fortune Dragon",
                "game_code": "c5435a8a73707a3a8bb4fe8baaaef3d2",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Fortune-Dragon_icon_1024_rounded.png"
            },
            {
                "game_name": "Dragon Hatch 2",
                "game_code": "910f25689073d17680be453d7ed90ce2",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Dragon-Hatch2_icon_1024_rounded.png"
            },
            {
                "game_name": "Gemstones Gold",
                "game_code": "877c9b2ec1c5e0505129315948f9bbfa",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Gemstones-Gold_appicon_rounded.png"
            },
            {
                "game_name": "Cash Mania",
                "game_code": "c8bbb41367b3971ed3467c2f0c2627a4",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Cash-Mania_appicon_rounded.png"
            },
            {
                "game_name": "Wild Ape #3258",
                "game_code": "9b93cb0dc46d847864c87ed42a3428bb",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Wild-Ape_rounded.png"
            },
            {
                "game_name": "Pinata Wins",
                "game_code": "f08cc025e23ee049b570517867c74be0",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Pinata-Wins_1024_rounded.png"
            },
            {
                "game_name": "Mystic Potion",
                "game_code": "e61bde75d590e943d2c5c6d432b29b46",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Mystic-Potion.png"
            },
            {
                "game_name": "Anubis Wrath",
                "game_code": "c268154a85669eea35aa46387834ac76",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/Anubis-Wrath.png"
            },
            {
                "game_name": "Chicky Run",
                "game_code": "c3e600005f72f1d1cabe758e206daf57",
                "game_type": "Gamble Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/chicky-run_icon_1024_rounded.png"
            },
            {
                "game_name": "Zombie Outbreak",
                "game_code": "83b6eceea77859c14426b05480b96c34",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/zombie-outbreaks_appicon_rounded.png"
            },
            {
                "game_name": "Futebol Fever",
                "game_code": "314afef87ff2974867234ac317b37f4c",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/futebol-fever_icon_1024_rounded.png"
            },
            {
                "game_name": "Shark Bounty",
                "game_code": "42cf824884f8ecdaf39862c9a15bf1f1",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/shark-hunter_1024_rounded.png"
            },
            {
                "game_name": "Yakuza Honor",
                "game_code": "e4772d4ef1de4217915c678d0d1722a8",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/yakuza-honor_1024_rounded.png"
            },
            {
                "game_name": "Wings of Iguazu",
                "game_code": "6ae667b26f908e5ebe8976ca334fd472",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/pg/wings-of-iguazu_icon_1024_rounded.png"
            }


        ]
}
const cq9 = {
    platform: 'digital',
    provider: 'cq9',
    games: [
        {
            "game_name": "Thai HILO",
            "game_code": "e1bf4c2cf1dcf91182d3caf8e944f425",
            "game_type": "Arcade Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Thai-HILO.png"
        },
        {
            "game_name": "Xoc Dia",
            "game_code": "87593975049b4839c5b9883188c825b8",
            "game_type": "Arcade Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Xoc-Dia.png"
        },
        {
            "game_name": "Mr.Bean",
            "game_code": "83bc9b50ddeb49403086070bc61c8dac",
            "game_type": "Arcade Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Mr.Bean.png"
        },
        {
            "game_name": "Thai Fish Prawn Crab",
            "game_code": "1636a3694f9eaab1ee27c253c43591aa",
            "game_type": "Arcade Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Thai-Fish-Prawn-Crab.png"
        },
        {
            "game_name": "Tenfold Eggs",
            "game_code": "4bcc8e305d6747e524d698ce02c9e2c7",
            "game_type": "Arcade Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Tenfold-Eggs.png"
        },
        {
            "game_name": "Funky Bingo",
            "game_code": "2075dc1439923a3210deba122fc0d631",
            "game_type": "Arcade Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Funky-Bingo.png"
        },
        {
            "game_name": "Jungle Party",
            "game_code": "bac6b204228688e24eb808caaa459f78",
            "game_type": "Arcade Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Jungle-Party.png"
        },
        {
            "game_name": "Mummy's Treasure",
            "game_code": "0fec5546ea03487eed57e76d4e57e608",
            "game_type": "Arcade Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Mummys-Treasure.png"
        },
        {
            "game_name": "Mini Roulette",
            "game_code": "421ca8d057205d7af4e8cfea22cc906b",
            "game_type": "Arcade Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Mini-Roulette-.png"
        },
        {
            "game_name": "Mahjong Fruit",
            "game_code": "52db8e8d4992293d9061398fc3f3869d",
            "game_type": "Arcade Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Mahjong-Fruit.png"
        },
        {
            "game_name": "K.O. Island",
            "game_code": "55170f3e8904083bb698e15494175b85",
            "game_type": "Arcade Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/K.O.-Island.png"
        },
        {
            "game_name": "Dragon Ball Dozer",
            "game_code": "5a0a7ee701c44fe34549b44333666148",
            "game_type": "Arcade Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Dragon-Ball-Dozer.png"
        },
        {
            "game_name": "3 2 1Go!",
            "game_code": "c002f8b5cd124abe27b50d5e082364f4",
            "game_type": "Arcade Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/3-2-1Go!.png"
        },
        {
            "game_name": "Hanuman Bingo",
            "game_code": "df98d0dcddb7526eecc11fe760a7d531",
            "game_type": "Arcade Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Hanuman-Bingo.png"
        },
        {
            "game_name": "Alice Run",
            "game_code": "7c0f4e40cbbfee4d8017b42cb081ed1e",
            "game_type": "Arcade Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Alice-Run.png"
        },
        {
            "game_name": "Dragon Pachinko",
            "game_code": "3f475158ba1e056a4858b18ba72a2887",
            "game_type": "Arcade Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Dragon-Pachinko.png"
        },
        {
            "game_name": "Seotda",
            "game_code": "8b410b635a270f49ff933fd188741abf",
            "game_type": "Arcade Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Seotda.png"
        },
        {
            "game_name": "Alice Run JP",
            "game_code": "b4c1e40c11261a77bdfa76dad2585da4",
            "game_type": "Arcade Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Alice-Run-JP.png"
        },


        {
            "game_name": "Yaxing Live",
            "game_code": "a751336c5ece3bedbed5b5d73113b665",
            "game_type": "Video Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Yaxing-Live.png"
        },
        {
            "game_name": "motivation gaming",
            "game_code": "709f3ade034d0eb105e087a0f8bebc09",
            "game_type": "Video Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/motivation-gaming.png"
        },
        {
            "game_name": "CQ9 Lottery",
            "game_code": "349cbd98815ed9b8cb3d081956760bbc",
            "game_type": "Lottery Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/CQ9-Lottery.png"
        },

        {
            "game_name": "JumpHigh",
            "game_code": "630a841b4cf75a38e2e657040f785e63",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/JumpHigh.png"
        },
        {
            "game_name": "Rave Jump",
            "game_code": "b602205d6a56d999df188e17ecc2bc91",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Rave-Jump.png"
        },
        {
            "game_name": "Jump High 2",
            "game_code": "8d57ec6274960fe2f2c252f4a49adf7f",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Jump-High-2.png"
        },
        {
            "game_name": "Jumping mobile",
            "game_code": "1282953e9452fe2852cb1724b4b9d617",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Jumping-mobile.png"
        },
        {
            "game_name": "Good Fortune M",
            "game_code": "50568ba2a8da9f30dded83dbbd3655d6",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Good-Fortune-M.png"
        },
        {
            "game_name": "God of War",
            "game_code": "f4b6484dc2b96fc339604446cd042534",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/God-of-War.png"
        },
        {
            "game_name": "FlyOut",
            "game_code": "afddbebb27c4b7408bda624aa9354aa7",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/FlyOut.png"
        },
        {
            "game_name": "Zeus",
            "game_code": "0f944952a27be9ab52d8deabf275a552",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Zeus.png"
        },
        {
            "game_name": "DiscoNight M",
            "game_code": "82839530d48814c586b8844b84693ca4",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/DiscoNight-M.png"
        },
        {
            "game_name": "Lucky Bats",
            "game_code": "c069592afd5d6ffab7bf759a491a71cd",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Lucky-Bats.png"
        },
        {
            "game_name": "Good Fortune",
            "game_code": "61d7c57fedb24242f4e56df7d5c80bfd",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Good-Fortune.png"
        },
        {
            "game_name": "JumpHigher",
            "game_code": "80af0735d78f6056a920770abca9f51c",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/JumpHigher.png"
        },
        {
            "game_name": "Fa Cai Shen2",
            "game_code": "da2929eef2ac66b7b3d44fdf0655c27a",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Fa-Cai-Shen2.png"
        },
        {
            "game_name": "God of War M",
            "game_code": "46c55e2ba632f9ae9addda6e169f7743",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/God-of-War-M.png"
        },
        {
            "game_name": "Money Tree",
            "game_code": "cee72070e3d6fee077cfcb9a050df57d",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Money-Tree.png"
        },
        {
            "game_name": "Rave Jump mobile",
            "game_code": "7b0b749b726371330c991ad01513539a",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Rave-Jump-mobile.png"
        },
        {
            "game_name": "Lucky Bats M",
            "game_code": "8d505ecfefce9b2c3058f58b415782b2",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Lucky-Bats-M.png"
        },
        {
            "game_name": "5 God Beasts",
            "game_code": "7148d1ecd2f6787e3d4cfae4580a7b86",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/5-God-Beasts.png"
        },
        {
            "game_name": "THOR",
            "game_code": "8e77c76cd001acc431fb96ce6d216f80",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/THOR.png"
        },
        {
            "game_name": "Cricket Fever",
            "game_code": "a36b6a69ffa118773a5e828bcc74dcf8",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Cricket-Fever.png"
        },
        {
            "game_name": "FaCaiShen",
            "game_code": "4fc25c66cbfd8068ff4a12faffe62469",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/FaCaiShen.png"
        },
        {
            "game_name": "Gu Gu Gu 3",
            "game_code": "260d42bbe34ce7149c636e339100364b",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Gu-Gu-Gu-3.png"
        },
        {
            "game_name": "Move n' Jump",
            "game_code": "8eba0f6d7c38fa6ced38f3abc6409e7f",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Move-n-Jump.png"
        },
        {
            "game_name": "Jump Higher mobile",
            "game_code": "e78b31bc60d05582a34cc19871520cb6",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Jump-Higher-mobile.png"
        },
        {
            "game_name": "Flying Cai Shen",
            "game_code": "660de502d52d1f4566aeab989491686f",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Flying-Cai-Shen.png"
        },
        {
            "game_name": "Fire Chibi 2",
            "game_code": "b05efbb809025d5450f08bdec8febee2",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Fire-Chibi-2.png"
        },
        {
            "game_name": "DiscoNight",
            "game_code": "4b5dce5597380d02a6daa1946ebfd118",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/DiscoNight.png"
        },
        {
            "game_name": "Wonderland",
            "game_code": "8764cec7c0232e476536c00145089732",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Wonderland.png"
        },
        {
            "game_name": "Thor 2",
            "game_code": "585f5e69e9fd929d2a78e3d392a22c8e",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Thor-2.png"
        },
        {
            "game_name": "Da Hong Zhong",
            "game_code": "09000b2086ef8632326e33b75714639b",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Da-Hong-Zhong.png"
        },
        {
            "game_name": "Zhong Kui",
            "game_code": "f57af26972d04aeb3918b407fd280187",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Zhong-Kui.png"
        },
        {
            "game_name": "Da Fa Cai",
            "game_code": "7781583727b17e3c0abd06033338f15b",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Da-Fa-Cai.png"
        },
        {
            "game_name": "Flower Fortunes",
            "game_code": "db0174a59d12ec0480cdfafa50fe8103",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Flower-Fortunes.png"
        },
        {
            "game_name": "Fire Queen 2",
            "game_code": "a1f1dac8df2ab915628830539f8bb7d7",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Fire-Queen-2-.png"
        },
        {
            "game_name": "Baseball Fever",
            "game_code": "1b2895c147b842611771c9815000aaa4",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Baseball-Fever.png"
        },
        {
            "game_name": "Double Fly",
            "game_code": "dabd7e6cc8c05effa4d868ebc088f189",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Double-Fly-.png"
        },
        {
            "game_name": "Night City",
            "game_code": "20ac774b757e927af3fd59a67e39254a",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Night-City.png"
        },
        {
            "game_name": "Funny Alpaca",
            "game_code": "a6eeb19d6fce96c0b2aef905f01cd46b",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Funny-Alpaca.png"
        },
        {
            "game_name": "Invincible Elephant",
            "game_code": "c66bcf7a826e781c96cd214c97ae2b67",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Invincible-Elephant.png"
        },
        {
            "game_name": "Chameleon",
            "game_code": "88e704fd702c1318b8ac1b2c540ea308",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Chameleon.png"
        },
        {
            "game_name": "Treasure Pirate",
            "game_code": "870473a09d666f7c52c3e655f2b64b77",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Treasure-Pirate.png"
        },
        {
            "game_name": "Six Candy",
            "game_code": "aaff1c8eea4138515f7dc48b9c28503b",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Six-Candy.png"
        },
        {
            "game_name": "Fa Cai Shen M",
            "game_code": "4c5fff40be0ac1e597fa24f3c0a656e9",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Fa-Cai-Shen-M.png"
        },
        {
            "game_name": "TreasureBowl",
            "game_code": "5172f73c2829b9cec48b0c7d856ae26a",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/TreasureBowl.png"
        },
        {
            "game_name": "888 Cai Shen",
            "game_code": "28a39e51864bae9fcebdbc6f738815de",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/888-Cai-Shen.png"
        },
        {
            "game_name": "Hercules",
            "game_code": "93060689fb6ddb3823702549ae22fbc7",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Hercules.png"
        },
        {
            "game_name": "Fire Queen",
            "game_code": "43177e1be3e726f8dd532c594a0fe54f",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Fire-Queen.png"
        },
        {
            "game_name": "So Sweet",
            "game_code": "6e5050176c0efae891a5bcc9e8958329",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/So-Sweet.png"
        },
        {
            "game_name": "GuGuGu",
            "game_code": "7ecdf8a456674beeb3665f2a0e15e322",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/GuGuGu.png"
        },
        {
            "game_name": "RaveHigh",
            "game_code": "191678951989eed5609ce6cf2252f0c1",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/RaveHigh.png"
        },

        {
            "game_name": "Pyramid Raider",
            "game_code": "068f8d42261ce77fef124de9608dc391",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Pyramid-Raider.png"
        },
        {
            "game_name": "Snow Queen",
            "game_code": "7da3427f512c0ba7fe9acb69daab425d",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Snow-Queen.png"
        },
        {
            "game_name": "Water Margin",
            "game_code": "fc003ead2149c77c1bb174cbfbdbe7bb",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Water-Margin.png"
        },
        {
            "game_name": "Hot Spin",
            "game_code": "7057b9185aaee613216ff18352ad1c2f",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Hot-Spin.png"
        },
        {
            "game_name": "Super5",
            "game_code": "e8a984c3aa5e951ef92b053b32ea7dd1",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Super5.png"
        },
        {
            "game_name": "Wolf Disco",
            "game_code": "ec50f4c2e123475287a6bac7239d6db8",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Wolf-Disco.png"
        },
        {
            "game_name": "Football Fever M",
            "game_code": "63adb18577103f9631aec0712cb398e2",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Football-Fever-M.png"
        },
        {
            "game_name": "Fire Chibi",
            "game_code": "da8208a22454260a50438c1e1806ea69",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Fire-Chibi.png"
        },
        {
            "game_name": "6 Toros",
            "game_code": "4b4d1cb0e676f342db428ac898d5a3ac",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/6-Toros.png"
        },
        {
            "game_name": "Mirror Mirror",
            "game_code": "d9550ed556610505851f425c37fb57fd",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Mirror-Mirror.png"
        },
        {
            "game_name": "MuayThai",
            "game_code": "a27e8f382f0ce434b0c42079ebe33221",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/MuayThai.png"
        },
        {
            "game_name": "Rave Jump2",
            "game_code": "b9aeb15cd98fb93d5dca0bbddbc9c79f",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Rave-Jump2.png"
        },
        {
            "game_name": "Aladdin's lamp",
            "game_code": "44b775adacc090fd07ad6b24a6b55963",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Aladdins-lamp.png"
        },
        {
            "game_name": "Striker WILD",
            "game_code": "4a3a333562badf48383a10c7fbf8de26",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Striker-WILD.png"
        },
        {
            "game_name": "WaterWorld",
            "game_code": "0eebf2f9aaa4705795ce5b01780751ef",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/WaterWorld.png"
        },
        {
            "game_name": "Fa Cai Fu Wa",
            "game_code": "bad08f4186e60ce20918fcc23a955d7c",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Fa-Cai-Fu-Wa.png"
        },
        {
            "game_name": "Mr. Miser",
            "game_code": "264af007099b8306f9c4e4e45485500d",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Mr.-Miser.png"
        },
        {
            "game_name": "Uproar In Heaven",
            "game_code": "86c2ea7d87d4ca8f8f305a0a0b0de846",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Uproar-In-Heaven.png"
        },
        {
            "game_name": "GuGuGu2",
            "game_code": "506e63d96c5377a1d0d2368357e323f9",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/GuGuGu2.png"
        },
        {
            "game_name": "Wheel Money",
            "game_code": "cf4cfcd1f517360be7e3f5e35cb277ef",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Wheel-Money.png"
        },
        {
            "game_name": "5 Boxing",
            "game_code": "6075420770ec2fe9c31b48159729299c",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/5-Boxing.png"
        },
        {
            "game_name": "Dragon Ball",
            "game_code": "83e1f2077918e63f9cbde70f6e3d9ce0",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Dragon-Ball.png"
        },
        {
            "game_name": "The Beast War",
            "game_code": "8c9750a6cc03f3d0af0a7853ac124fda",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/The-Beast-War.png"
        },
        {
            "game_name": "HappyRichYear",
            "game_code": "cbce4da7f8b89f8b6b569af14af75d9c",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/HappyRichYear.png"
        },
        {
            "game_name": "Floating Market",
            "game_code": "a34f4808447d12be37d16adf9eaed572",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Floating-Market.png"
        },
        {
            "game_name": "King of Atlantis",
            "game_code": "e4a15094c2ae54ffc6d77187fff0d2d7",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/King-of-Atlantis.png"
        },
        {
            "game_name": "Apsaras",
            "game_code": "feb4444198c8146d213f9594325ff7d7",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Apsaras.png"
        },
        {
            "game_name": "The Chicken House",
            "game_code": "2e5f381d3f9db2217fb113c829a79f2a",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/The-Chicken-House.png"
        },
        {
            "game_name": "Zeus M",
            "game_code": "fb33a6613e5ba5b8e42f035fbd4e103d",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Zeus-M.png"
        },
        {
            "game_name": "777",
            "game_code": "521c3e444d06b25dc5ed6b6768200d44",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/777.png"
        },
        {
            "game_name": "LuckyBatsJP",
            "game_code": "9bef1fbf45383b40e170c57a06352a37",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/LuckyBatsJP.png"
        },
        {
            "game_name": "WuKong&Peaches",
            "game_code": "d0436aec31880e65ad98eef9b3981fcb",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/WuKong&Peaches.png"
        },
        {
            "game_name": "Sky Lanterns",
            "game_code": "48f9ce3f231f3993c6ec908509d61688",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Sky-Lanterns.png"
        },
        {
            "game_name": "Kronos",
            "game_code": "f6747563ecef5cb4803e523cc40d7496",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Kronos.png"
        },
        {
            "game_name": "Hephaestus",
            "game_code": "ccd2f2ff80e15cf4972f1d6357c0f8d5",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Hephaestus.png"
        },
        {
            "game_name": "King Kong Shake",
            "game_code": "364284517a08f983992e3ee471960c0d",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/King-Kong-Shake.png"
        },
        {
            "game_name": "Gu Gu Gu 2 M",
            "game_code": "24e0e334a06f1c2f609908ea51f56945",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/-Gu-Gu-Gu-2-M.png"
        },
        {
            "game_name": "Fortune Dragon",
            "game_code": "3b00fa061de9d0a6ed9843fa95ddb5dc",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Fortune-Dragon.png"
        },
        {
            "game_name": "Shou-Xin",
            "game_code": "2b0b1d8d7c8c49ae282f328795916fd1",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Shou-Xin.png"
        },
        {
            "game_name": "Mafia",
            "game_code": "a239266b6011750a0105b676ca92b2f3",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Mafia.png"
        },
        {
            "game_name": "Hot DJ",
            "game_code": "3f1df3f204333b25730681b291a60333",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Hot-DJ.png"
        },
        {
            "game_name": "Mr. Rich",
            "game_code": "a34dc998bf7f4c4c0a62b2810cd0e30e",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Mr.-Rich.png"
        },
        {
            "game_name": "Rave Jump 2 M",
            "game_code": "73e303cf417c6bd211ef536507a35b82",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Rave-Jump-2-M.png"
        },
        {
            "game_name": "Fire Chibi M",
            "game_code": "7fa49af4cf85457b5340d98cbe282563",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Fire-Chibi-M.png"
        },
        {
            "game_name": "Wolf Moon",
            "game_code": "fda7ba3b397e7940596a30639e2ab9e1",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Wolf-Moon.png"
        },

        {
            "game_name": "Football Fever",
            "game_code": "551c0c158cfcbe2d8c97960f70c7fec8",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Football-Fever.png"
        },
        {
            "game_name": "Golden Eggs",
            "game_code": "69092d998124631d4a8925944bce67b5",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Golden-Eggs.png"
        },
        {
            "game_name": "CHICAGOⅡ",
            "game_code": "1112003dee0f8525b1cbee98a6ab1368",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/CHICAGOII.png"
        },
        {
            "game_name": "TreasureBowlJP",
            "game_code": "a302435d829c9a6b823b508c2df7aec9",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/TreasureBowlJP.png"
        },
        {
            "game_name": "Apollo",
            "game_code": "9f6d5cad4677d3aa3feeb7b907d9a93a",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Apollo.png"
        },
        {
            "game_name": "OrientalBeauty",
            "game_code": "0e15fd4fa6b9590001cdd71555bd8b87",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/OrientalBeauty.png"
        },
        {
            "game_name": "Hero of the 3 Kingdoms - Cao Cao",
            "game_code": "a174a38fb0fb007d348c03086ed0efed",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Hero-of-the-3-Kingdoms-Cao-Cao.png"
        },
        {
            "game_name": "Sweet POP",
            "game_code": "e51f1ecea20f87eee1149dac9e78852c",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Sweet-POP.png"
        },
        {
            "game_name": "Myeong-ryang",
            "game_code": "5c10bbe32ed9527d19711986973968a4",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Myeong-ryang.png"
        },
        {
            "game_name": "Treasure House",
            "game_code": "8a244973588309c9d06b3d2f23020e1e",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Treasure-House.png"
        },
        {
            "game_name": "Wing Chun",
            "game_code": "c20937482acb4256f02c2d9f72258fbe",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Wing-Chun.png"
        },
        {
            "game_name": "Fortune Totem",
            "game_code": "7941e7cf88f7a30533b7c7ab98b3c639",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Fortune-Totem.png"
        },
        {
            "game_name": "Running Animals",
            "game_code": "522977276f1e38334bb71762710d1d8b",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Running-Animals.png"
        },
        {
            "game_name": "Fire777",
            "game_code": "2453bbce4a11850700f3f8634a130e4f",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Fire777.png"
        },
        {
            "game_name": "Vampire Kiss",
            "game_code": "b0bf4de1e3881b266a4dfc442e1f665d",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Vampire-Kiss.png"
        },
        {
            "game_name": "WanBaoDino",
            "game_code": "557550df7526b2a8641c08b14c50304d",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/WanBaoDino.png"
        },
        {
            "game_name": "Ne Zha Advent",
            "game_code": "c0adf8478aef16eae670cce8258623b1",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Ne-Zha-Advent.png"
        },
        {
            "game_name": "Greek Gods",
            "game_code": "15e8bdff25079b4be98f84cdea37d1ed",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Greek-Gods.png"
        },
        {
            "game_name": "Zuma Wild",
            "game_code": "b1c4e04fc5de9e6fe06baf44a650d0e6",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Zuma-Wild.png"
        },
        {
            "game_name": "Dragon Koi",
            "game_code": "f800040e6818ede103dc94b3d3bebbc5",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Dragon-Koi.png"
        },
        {
            "game_name": "SkrSkr",
            "game_code": "316d8570b1c69f52046d5bb0bbb0a0e3",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/SkrSkr.png"
        },
        {
            "game_name": "Acrobatics",
            "game_code": "b8f1a2b30586584ac0f20b9ba426ee60",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Acrobatics.png"
        },
        {
            "game_name": "Ganesha Jr.",
            "game_code": "461e0b9219d51eda0f6413b19153a1c6",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Ganesha-Jr..png"
        },
        {
            "game_name": "Yuan Bao",
            "game_code": "5e4818e6c8946a3d71653e3d22a9a1c9",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Yuan-Bao.png"
        },
        {
            "game_name": "Wild Tarzan",
            "game_code": "dd2046e37aa94f0a6b77497452ac0286",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Wild-Tarzan.png"
        },
        {
            "game_name": "Diamond treasure",
            "game_code": "2f3e4881d605653d536e8b5ab21e113b",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/-Diamond-treasure.png"
        },
        {
            "game_name": "TreasureIsland",
            "game_code": "b3c866fb2c529acf4175603e2c02d074",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/TreasureIsland.png"
        },
        {
            "game_name": "Red Phoenix",
            "game_code": "a7034f531232014969b8b613fccd0a47",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Red-Phoenix.png"
        },
        {
            "game_name": "Gu Gu Gu M",
            "game_code": "b5d1c587f497cd331d18f3a618f99229",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Gu-Gu-Gu-M.png"
        },
        {
            "game_name": "Detective Dee2",
            "game_code": "d91e2b4c05cd7ac6ac59adb3d5f853ab",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Detective-Dee2.png"
        },
        {
            "game_name": "Lucky Tigers",
            "game_code": "b18de9efd3c251a32eed6ac7e97c67d7",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Lucky-Tigers.png"
        },
        {
            "game_name": "Dragon Heart",
            "game_code": "d8cb3a9429cd45c2ec612cb3220acecd",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Dragon-Heart.png"
        },
        {
            "game_name": "Lord Ganesha",
            "game_code": "89c763b3761557eaa960d022cdd73921",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Lord-Ganesha.png"
        },
        {
            "game_name": "Hot Pinatas",
            "game_code": "171dd44d68bd47df9d2bc386082ca340",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Hot-Pinatas.png"
        },
        {
            "game_name": "888",
            "game_code": "708c6a3de19dd4d7674efea3ef2fe40f",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/888.png"
        },
        {
            "game_name": "RunningToro",
            "game_code": "2df7d3f0fb6dc289a29d58067ab1c596",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/RunningToro.png"
        },
        {
            "game_name": "Gold Stealer",
            "game_code": "9cec85e2f5c2a0545c10825e897ec433",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Gold-Stealer.png"
        },
        {
            "game_name": "All Star Team",
            "game_code": "8677aafb4968ee948c42ef31cbcc6c66",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/All-Star-Team.png"
        },
        {
            "game_name": "Dragon's Treasure",
            "game_code": "9b8589482492af6a92397a889ce24784",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Dragons-Treasure.png"
        },
        {
            "game_name": "Great Lion",
            "game_code": "e91f6b84921858afd5a62284d0dfa89b",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Great-Lion.png"
        },
        {
            "game_name": "Burning Xi-You",
            "game_code": "979fc001722dd7c46edab5a787b86d21",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Burning-Xi-You.png"
        },
        {
            "game_name": "All Wilds",
            "game_code": "bb5c0ea65687c2ee63980f644045f9e4",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/All-Wilds.png"
        },
        {
            "game_name": "Jewel Luxury",
            "game_code": "572ed9f08de5745603c052fd759989c5",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Jewel-Luxury.png"
        },
        {
            "game_name": "Meow",
            "game_code": "271a0b04341b9b57c9fd46dbc8bb333a",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Meow.png"
        },
        {
            "game_name": "Loy Krathong",
            "game_code": "d63414a615aa145466625ec440176f8e",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Loy-Krathong.png"
        },
        {
            "game_name": "The Cupids",
            "game_code": "3c71b0060fe7214f73ac21af86148b03",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/The-Cupids.png"
        },
        {
            "game_name": "Fruit King",
            "game_code": "748c8f874063d6629dfc910dd38e85e5",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Fruit-King.png"
        },
        {
            "game_name": "Chicky Parm Parm",
            "game_code": "ff89d148948baec771661f4047e7215c",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Chicky-Parm-Parm.png"
        },
        {
            "game_name": "WonWonWon",
            "game_code": "5c60a8521f10c864de5b1da61e1b014c",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/WonWonWon.png"
        },
        {
            "game_name": "Magic World",
            "game_code": "4c70c186616f00adb7cec5d6e58ed604",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Magic-World.png"
        },
        {
            "game_name": "Sherlock Holmes",
            "game_code": "f4ee292edc93a670a25e31e3d8ae3303",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Sherlock-Holmes.png"
        },
        {
            "game_name": "Summer Mood",
            "game_code": "d67b92dd4bc3a7180aecf6a5f4eb61ed",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Summer-Mood.png"
        },
        {
            "game_name": "God Of Chess",
            "game_code": "f72b5f2d241bc0ee370965f21692b96d",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/God-Of-Chess.png"
        },
        {
            "game_name": "FruitKingII",
            "game_code": "737224273b2595a5fc6d5b419611ff00",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/FruitKingII.png"
        },
        {
            "game_name": "Xmas",
            "game_code": "86731029d440380de665d1705be2cbc8",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Xmas.png"
        },
        {
            "game_name": "Six Gacha",
            "game_code": "a1676b8d40667bab6d107601347ab3c6",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Six-Gacha.png"
        },
        {
            "game_name": "Gophers War",
            "game_code": "82af8f5ea9cb9003accab2a685f6b7dc",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Gophers-War.png"
        },
        {
            "game_name": "Ninja Raccoon",
            "game_code": "071b756a4d6b454a87641fa021d18e11",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Ninja-Raccoon.png"
        },
        {
            "game_name": "Fruity Carnival",
            "game_code": "d859be0e915d1b72d6c3125fd3764eb0",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Fruity-Carnival.png"
        },
        {
            "game_name": "Football Baby",
            "game_code": "9f0cc6b78e12cc19bcfcd95488b5d781",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Football-Baby.png"
        },
        {
            "game_name": "Pharaoh's Gold",
            "game_code": "d40765682df6cd384a6624bdf2a6be8f",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Pharaohs-Gold.png"
        },
        {
            "game_name": "Poseidon",
            "game_code": "2d44ee24e038513e1d8680d4dd534348",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Poseidon.png"
        },
        {
            "game_name": "LongLongLong",
            "game_code": "cf576c4aecc1bd3b077b4a78d1b426ec",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/LongLongLong.png"
        },
        {
            "game_name": "Detective Dee",
            "game_code": "bda2e6a2e08382ae3e6cc407ab2a209c",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Detective-Dee.png"
        },
        {
            "game_name": "LuckyBoxes",
            "game_code": "bcefd23a1c86c94c430ca39868eb36cc",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/LuckyBoxes.png"
        },
        {
            "game_name": "Crazy NuoZha",
            "game_code": "b9a08190e3f3aec328ddae2b0c43bb15",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Crazy-NuoZha.png"
        },
        {
            "game_name": "Ecstatic Circus",
            "game_code": "7f8fd8227e3b31934e1d86c0a5afb938",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Ecstatic-Circus.png"
        },
        {
            "game_name": "Dollar Bomb",
            "game_code": "b54ad2b8e8217c07a22495f18589c276",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Dollar-Bomb.png"
        },
        {
            "game_name": "Fortune Gate",
            "game_code": "a493bdd1bbe559f7a3fa5e5947982242",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Fortune-Gate.png"
        },
        {
            "game_name": "Sakura Legend",
            "game_code": "8658e005b8bffc8e727a8846dae13900",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Sakura-Legend.png"
        },
        {
            "game_name": "Songkran Festival",
            "game_code": "2cb558412aaccd52d6ad8b436953c73c",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Songkran-Festival.png"
        },
        {
            "game_name": "Coin Spinner",
            "game_code": "48d0db2eab9a513a3c0974896e2ba704",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Coin-Spinner.png"
        },
        {
            "game_name": "XIYOUJI",
            "game_code": "4023d4dc30fb1e751576018ff64610df",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/XIYOUJI.png"
        },
        {
            "game_name": "Sun Er Niang",
            "game_code": "807a7b2beca7903201adb021098ad95c",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Sun-Er-Niang.png"
        },
        {
            "game_name": "The Dragon Brings Wealth",
            "game_code": "57e95e50da6625ed1e3c00e6266e39cb",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/The-Dragon-Brings-Wealth.png"
        },
        {
            "game_name": "ROLLING DRAGON",
            "game_code": "77c171c91fb589c2c91879a4ebe8c911",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/ROLLING-DRAGON-.png"
        },
        {
            "game_name": "Lonely Planet",
            "game_code": "b8d4831b3631a06e1bfbe3da5e951789",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Lonely-Planet.png"
        },
        {
            "game_name": "World Cup Russia2018",
            "game_code": "2409e5731f75846c32589aa11e97bf7b",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/World-Cup-Russia2018.png"
        },
        {
            "game_name": "Football Boots",
            "game_code": "2058fb035a2950763935dcdb3552046d",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Football-Boots.png"
        },
        {
            "game_name": "Oo Ga Cha Ka",
            "game_code": "109f1875d5ab0981b08e958828a6118d",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Oo-Ga-Cha-Ka.png"
        },
        {
            "game_name": "MONKEY KING",
            "game_code": "fed3b52ed8e9d709e637a9482f576c64",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/MONKEY-KING.png"
        },
        {
            "game_name": "Monster Hunter",
            "game_code": "01d19cf2fedc3bc18e2b8e880af687ed",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Monster-Hunter.png"
        },
        {
            "game_name": "JIN LIAN PAN",
            "game_code": "2745d0933a8ab0621b76bb93f5a549cc",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/JIN-LIAN-PAN-.png"
        },
        {
            "game_name": "GoldenEggsJP",
            "game_code": "6da38883f15c06b796d8daaed7f80939",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/GoldenEggsJP.png"
        },
        {
            "game_name": "LongLaiFa",
            "game_code": "ca69f05fd2a52a9fdee69dd819cbb4be",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/LongLaiFa.png"
        },
        {
            "game_name": "HUGA",
            "game_code": "4e46334e0abde53e5e6cabe78f106764",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/HUGA.png"
        },
        {
            "game_name": "PARTY ISLAND",
            "game_code": "9b7af082e879ebb276affc760668b54d",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/PARTY-ISLAND.png"
        },
        {
            "game_name": "Double Happiness",
            "game_code": "3632e72eedf24ef82f034d02282f90d4",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Double-Happiness.png"
        },
        {
            "game_name": "Big Wolf",
            "game_code": "4fc02a42d9981442dc20fe9e03d169ad",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Big-Wolf.png"
        },
        {
            "game_name": "Empress Wu",
            "game_code": "0582ab3045c14b6268606c11f4d19f95",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Empress-Wu-.png"
        },
        {
            "game_name": "TIGER HERO",
            "game_code": "f523bb4fbe0dad42c44121cfdfe3ec9d",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/TIGER-HERO.png"
        },
        {
            "game_name": "MonkeyOfficeLegend",
            "game_code": "a26b4a919b9bc8865599ca5f105a8e58",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/MonkeyOfficeLegend.png"
        },
        {
            "game_name": "Pub Tycoon",
            "game_code": "3a2bd5e7a1b3366cde75570d3ad93de8",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Pub-Tycoon.png"
        },
        {
            "game_name": "MULAN",
            "game_code": "bb28e417cbd03f0ab9be560fdf7773e9",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/MULAN.png"
        },
        {
            "game_name": "Mega Winner",
            "game_code": "6667585b48442cde4516e2f6648dc530",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Mega-Winner.png"
        },
        {
            "game_name": "Lin Chong",
            "game_code": "d46355c4d9fc77c4ae9d9df297390fb0",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Lin-Chong.png"
        },
        {
            "game_name": "Slot 777",
            "game_code": "3d76faac5931819507b7dfba02377f35",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Slot-777.png"
        },
        {
            "game_name": "Lucky 3",
            "game_code": "a369313204e62dbc8584d75cd3addc82",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Lucky-3.png"
        },
        {
            "game_name": "Pig Of Luck",
            "game_code": "ef392c2fec8ad75d77131252b6ff3663",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Pig-Of-Luck.png"
        },
        {
            "game_name": "Boots of Luck",
            "game_code": "316b9e21b4bde165e506351ecf833930",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Boots-of-Luck.png"
        },
        {
            "game_name": "Fortune Spirits",
            "game_code": "a7f80a70e62368c389a23b300ccbf8a1",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Fortune-Spirits.png"
        },
        {
            "game_name": "GENIE",
            "game_code": "598c5d9c30378fdd48d4dfa2bb8c0c46",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/GENIE.png"
        },
        {
            "game_name": "Rush Hour",
            "game_code": "9d9bf67a8b6b1faf5a1dbfe6ff3dd206",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Rush-Hour.png"
        },
        {
            "game_name": "Treasure of Seti",
            "game_code": "528101a83d7f3518896e4fce061948f7",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Treasure-of-Seti.png"
        },
        {
            "game_name": "Wild Fudge",
            "game_code": "cb9ddf2d9f433e19ca3d7fda21e520c9",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Wild-Fudge.png"
        },
        {
            "game_name": "Diamond Fruit",
            "game_code": "1360fd1d5b971769cdbc922b51303e3a",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Diamond-Fruit.png"
        },
        {
            "game_name": "Da Fu Xing",
            "game_code": "804e9adae94f35f16a2d93bc584f7da0",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Da-Fu-Xing.png"
        },
        {
            "game_name": "Master Panda",
            "game_code": "4a687f358c03e98ffbc4df618b2f1566",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Master-Panda.png"
        },
        {
            "game_name": "Queen Of Dead",
            "game_code": "f09e471f10d60dfc7fd9876c6711d8c8",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Queen-Of-Dead.png"
        },
        {
            "game_name": "Songkran",
            "game_code": "fb1c07944e9b30c773975d5761f715b3",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Songkran.png"
        },
        {
            "game_name": "Dragon Hunters",
            "game_code": "9a1d746be3ce06c9617fde95da7299e7",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Dragon-Hunters.png"
        },
        {
            "game_name": "The Legend Of Snake",
            "game_code": "6ac22b2754657ac1f92c52c216ca3123",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/The-Legend-Of-Snake-.png"
        },
        {
            "game_name": "Niu Niu Niu",
            "game_code": "ca92c58e1ba7a064226fd292e08f1e1f",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Niu-Niu-Niu.png"
        },
        {
            "game_name": "Royal Fruit",
            "game_code": "2dc730c7c7cabe3ced14eadf4f800d23",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Royal-Fruit.png"
        },
        {
            "game_name": "Golden Mayan",
            "game_code": "4ca28ba2df8175e7742aafb08cb93acb",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Golden-Mayan.png"
        },
        {
            "game_name": "Wild Chameleon",
            "game_code": "1449bcd0cf997fcbd5db51b71f5a3afd",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Wild-Chameleon.png"
        },
        {
            "game_name": "Hollywood Pets",
            "game_code": "b3626929bd5b55514e43cc9ea30ecdcf",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Hollywood-Pets.png"
        },
        {
            "game_name": "Fishing King",
            "game_code": "396c1296f9805ec93cb73764c11e939b",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Fishing-King.png"
        },
        {
            "game_name": "Myth",
            "game_code": "6d7d54e9ac5d6fbccb4e90f59bb07f54",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Myth.png"
        },
        {
            "game_name": "Nezha",
            "game_code": "c7177ae93f8b8ad8015d1c15fc84358f",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Nezha.png"
        },
        {
            "game_name": "HAPPY BUDDHA",
            "game_code": "7e64a66d0d74af9f173ab913576b61ce",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/HAPPY-BUDDHA.png"
        },
        {
            "game_name": "Cirque de fous",
            "game_code": "d9d86e86284357426995e080250e2662",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Cirque-de-fous.png"
        },
        {
            "game_name": "JUNGLE ISLAND",
            "game_code": "8797a9b3500b2cc510aab54f8f65c9b0",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/JUNGLE-ISLAND.png"
        },
        {
            "game_name": "Hong Kong Flavor",
            "game_code": "32b8e2de14d2dc9fa7de9e60c39181e2",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Hong-Kong-Flavor.png"
        },
        {
            "game_name": "Beanstalk",
            "game_code": "bc6315b1d328ba2a6719d3ce54ecfc6d",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Beanstalk.png"
        },
        {
            "game_name": "Xmas Tales",
            "game_code": "5aa01f1fb8c92635c69d399deda516b2",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Xmas-Tales.png"
        },
        {
            "game_name": "Peeking Banker Bull-Bull",
            "game_code": "e21186914febf15786f84951e013a37a",
            "game_type": "Table Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Peeking-Banker-Bull-Bull.png"
        },
        {
            "game_name": "Banker Dice Bull-Bull",
            "game_code": "874ef5c8f7c51b3e6e8d8f3189917219",
            "game_type": "Table Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Banker-Dice-Bull-Bull.png"
        },
        {
            "game_name": "Thai Pok Deng",
            "game_code": "5843c49f399e462d8e4852c45bf14d34",
            "game_type": "Table Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/cq9/Thai-Pok-Deng.png"
        },




    ]
}

const jilli = {
    platform: 'digital',
    provider: 'jilli',
    games:
        [
            {
                "game_name": "Chin Shi Huang",
                "game_code": "24da72b49b0dd0e5cbef9579d09d8981",
                "game_type": "Slot Game",
                "game_image": "https://img.b112j.com/upload/game/AWCV2_JILI/BDT/JILI-SLOT-003.png?v=1778346480421"
            },
            {
                "game_name": "God Of Martial",
                "game_code": "21ef8a7ddd39836979170a2e7584e333",
                "game_type": "Slot Game",
                "game_image": "https://img.b112j.com/upload/game/AWCV2_JILI/BDT/JILI-SLOT-010.png?v=1778346481524"
            },
            {
                "game_name": "Hot Chilli",
                "game_code": "c845960c81d27d7880a636424e53964d",
                "game_type": "Slot Game",
                "game_image": "https://img.b112j.com/upload/game/AWCV2_JILI/BDT/JILI-SLOT-002.png?v=1778346480273"
            },
            {
                "game_name": "Fortune Tree",
                "game_code": "6a7e156ceec5c581cd6b9251854fe504",
                "game_type": "Slot Game",
                "game_image": "https://img.b112j.com/upload/game/AWCV2_JILI/BDT/JILI-SLOT-005.png?v=1778346480722"
            },
            {
                "game_name": "War Of Dragons",
                "game_code": "4b1d7ffaf9f66e6152ea93a6d0e4215b",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/War-Of-Dragons.png"
            },
            {
                "game_name": "Gem Party",
                "game_code": "756cf3c73a323b4bfec8d14864e3fada",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Gem-Party.png"
            },
            {
                "game_name": "Lucky Ball",
                "game_code": "893669898cd25d9da589a384f1d004df",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Lucky-Ball.png"
            },
            {
                "game_name": "Hyper Burst",
                "game_code": "a47b17970036b37c1347484cf6956920",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Hyper-Burst.png"
            },
            {
                "game_name": "Shanghai Beauty",
                "game_code": "795d0cae623cbf34d7f1aa93bbcded28",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Shanghai-Beauty.png"
            },
            {
                "game_name": "Fa Fa Fa",
                "game_code": "54c41adcf43fdb6d385e38bc09cd77ca",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Fa-Fa-Fa.png"
            },
            {
                "game_name": "Candy Baby",
                "game_code": "2cc3b68cbcfacac2f7ef2fe19abc3c22",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Candy-Baby.png"
            },
            {
                "game_name": "Hawaii Beauty",
                "game_code": "6409b758471b6df30c6b137b49f4d92e",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Hawaii-Beauty.png"
            },
            {
                "game_name": "SevenSevenSeven",
                "game_code": "61d46add6841aad4758288d68015eca6",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/SevenSevenSeven.png"
            },
            {
                "game_name": "Bubble Beauty",
                "game_code": "a78d2ed972aab8ba06181cc43c54a425",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Bubble-Beauty.png"
            },
            {
                "game_name": "FortunePig",
                "game_code": "8488c76ee2afb8077fbd7eec62721215",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/FortunePig.png"
            },
            {
                "game_name": "Crazy777",
                "game_code": "8c62471fd4e28c084a61811a3958f7a1",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Crazy777.png"
            },
            {
                "game_name": "Bao boon chin",
                "game_code": "8c4ebb3dc5dcf7b7fe6a26d5aadd2c3d",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Bao-boon-chin.png"
            },
            {
                "game_name": "Night City",
                "game_code": "78e29705f7c6084114f46a0aeeea1372",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Night-City.png"
            },
            {
                "game_name": "Fengshen",
                "game_code": "09699fd0de13edbb6c4a194d7494640b",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Fengshen.png"
            },
            {
                "game_name": "Crazy FaFaFa",
                "game_code": "a57a8d5176b54d4c825bd1eee8ab34df",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Crazy-FaFaFa.png"
            },
            {
                "game_name": "XiYangYang",
                "game_code": "5a962d0e31e0d4c0798db5f331327e4f",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/XiYangYang.png"
            },
            {
                "game_name": "DiamondParty",
                "game_code": "48d598e922e8c60643218ccda302af08",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/DiamondParty.png"
            },
            {
                "game_name": "Golden Bank",
                "game_code": "c3f86b78938eab1b7f34159d98796e88",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Golden-Bank.png"
            },
            {
                "game_name": "Dragon Treasure",
                "game_code": "c6955c14f6c28a6c2a0c28274fec7520",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Dragon-Treasure.png"
            },
            {
                "game_name": "Charge Buffalo",
                "game_code": "984615c9385c42b3dad0db4a9ef89070",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Charge-Buffalo.png"
            },
            {
                "game_name": "Lucky Goldbricks",
                "game_code": "d84ef530121953240116e3b2e93f6af4",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Lucky-Goldbricks.png"
            },
            {
                "game_name": "Super Ace",
                "game_code": "bdfb23c974a2517198c5443adeea77a8",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Super-Ace.png"
            },
            {
                "game_name": "Money Coming",
                "game_code": "db249defce63610fccabfa829a405232",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Money-Coming.png"
            },
            {
                "game_name": "Golden Queen",
                "game_code": "8de99455c2f23f6827666fd798eb80ef",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Golden-Queen.png"
            },
            {
                "game_name": "Jungle King",
                "game_code": "4db0ec24ff55a685573c888efed47d7f",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Jungle-King.png"
            },
            {
                "game_name": "Monkey Party",
                "game_code": "fd369a4a7486ff303beea267ec5c8eff",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Monkey-Party.png"
            },
            {
                "game_name": "Boxing King",
                "game_code": "981f5f9675002fbeaaf24c4128b938d7",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Boxing-King.png"
            },
            {
                "game_name": "Secret Treasure",
                "game_code": "1d1f267e3a078ade8e5ccd56582ac94f",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Secret-Treasure.png"
            },
            {
                "game_name": "Pharaoh Treasure",
                "game_code": "c7a69ab382bd1ff0e6eb65b90a793bdd",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Pharaoh-Treasure.png"
            },
            {
                "game_name": "Lucky Coming",
                "game_code": "ba858ec8e3b5e2b4da0d16b3a2330ca7",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Lucky-Coming.png"
            },
            {
                "game_name": "Super Rich",
                "game_code": "b92f491a63ac84b106b056e9d46d35c5",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Super-Rich.png"
            },
            {
                "game_name": "RomaX",
                "game_code": "e5ff8e72418fcc608d72ea21cc65fb70",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/RomaX.png"
            },
            {
                "game_name": "Golden Empire",
                "game_code": "490096198e28f770a3f85adb6ee49e0f",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Golden-Empire.png"
            },
            {
                "game_name": "Fortune Gems",
                "game_code": "a990de177577a2e6a889aaac5f57b429",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Fortune-Gems.png"
            },
            {
                "game_name": "Crazy Hunter",
                "game_code": "69082f28fcd46cbfd10ce7a0051f24b6",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Crazy-Hunter.png"
            },
            {
                "game_name": "Party Night",
                "game_code": "d505541d522aa5ca01fc5e97cfcf2116",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Party-Night.png"
            },
            {
                "game_name": "Magic Lamp",
                "game_code": "582a58791928760c28ec4cef3392a49f",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Magic-Lamp.png"
            },
            {
                "game_name": "Agent Ace",
                "game_code": "8a4b4929e796fda657a2d38264346509",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Agent-Ace.png"
            },
            {
                "game_name": "TWIN WINS",
                "game_code": "c74b3cbda5d16f77523e41c25104e602",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/TWIN-WINS.png"
            },
            {
                "game_name": "Ali Baba",
                "game_code": "cc686634b4f953754b306317799f1f39",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Ali-Baba.png"
            },
            {
                "game_name": "Mega Ace",
                "game_code": "eba92b1d3abd5f0d37dfbe112abdf0e2",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Mega-Ace.png"
            },
            {
                "game_name": "Medusa",
                "game_code": "2c17b7c4e2ce5b8bebf4bd10e3e958d7",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Medusa.png"
            },
            {
                "game_name": "Book of Gold",
                "game_code": "6b283c434fd44250d83b7c2420f164f9",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Book-of-Gold.png"
            },
            {
                "game_name": "Thor X",
                "game_code": "7e6aa773fa802aaa9cb1f2fac464736e",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Thor-X.png"
            },
            {
                "game_name": "Happy Taxi",
                "game_code": "1ed896aae4bdc78c984021307b1dd177",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Happy-Taxi.png"
            },
            {
                "game_name": "Gold Rush",
                "game_code": "2a5d731e0fd60f52873a24ece11f2c0b",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Gold-Rush.png"
            },
            {
                "game_name": "Mayan Empire",
                "game_code": "5c2383ef253f9c36dacec4b463d61622",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Mayan-Empire.png"
            },
            {
                "game_name": "Crazy Pusher",
                "game_code": "00d92d5cec10cf85623938222a6c2bb6",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Crazy-Pusher.png"
            },
            {
                "game_name": "Bone Fortune",
                "game_code": "aab3048abc6a88e0759679fbe26e6a8d",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Bone-Fortune.png"
            },
            {
                "game_name": "JILI CAISHEN",
                "game_code": "11e330c2b23f106815f3b726d04e4316",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/JILI-CAISHEN.png"
            },
            {
                "game_name": "Bonus Hunter",
                "game_code": "39775cdc4170e56c5f768bdee8b4fa00",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Bonus-Hunter.png"
            },
            {
                "game_name": "World Cup",
                "game_code": "28374b7ad7c91838a46404f1df046e5a",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/World-Cup.png"
            },
            {
                "game_name": "Samba",
                "game_code": "6d35789b2f419c1db3926350d57c58d8",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Samba.png"
            },
            {
                "game_name": "Neko Fortune",
                "game_code": "9a391758f755cb30ff973e08b2df6089",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Neko-Fortune.png"
            },
            {
                "game_name": "Wild Racer",
                "game_code": "2f0c5f96cda3c6e16b3929dd6103df8e",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Wild-Racer.png"
            },
            {
                "game_name": "Pirate Queen",
                "game_code": "70999d5bcf2a1d1f1fb8c82e357317f4",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Pirate-Queen.png"
            },
            {
                "game_name": "Golden Joker",
                "game_code": "f301fe0b22d1540b1f215d282b20c642",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Golden-Joker.png"
            },
            {
                "game_name": "Wild Ace",
                "game_code": "9a3b65e2ae5343df349356d548f3fc4b",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Wild-Ace.png"
            },
            {
                "game_name": "Master Tiger",
                "game_code": "d2b48fe98ac2956eeefd2bc4f7e0335a",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Master-Tiger.png"
            },
            {
                "game_name": "Fortune Gems 2",
                "game_code": "664fba4da609ee82b78820b1f570f4ad",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Fortune-Gems-2.png"
            },
            {
                "game_name": "Sweet Land",
                "game_code": "91250a55f75a3c67ed134b99bf587225",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Sweet-Land.png"
            },
            {
                "game_name": "Cricket King 18",
                "game_code": "dcf220f4e3ecca0278911a55e6f11c77",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Cricket-King-18.png"
            },
            {
                "game_name": "Elf Bingo",
                "game_code": "5cec2b309a8845b38f8e9b4e6d649ea2",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Elf-Bingo.png"
            },
            {
                "game_name": "Cricket Sah 75",
                "game_code": "6720a0ce1d06648ff390fbea832798a9",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Cricket-Sah-75.png"
            },
            {
                "game_name": "Golden Temple",
                "game_code": "976c5497256c020ac012005f6bb166ad",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Golden-Temple.png"
            },
            {
                "game_name": "Devil Fire",
                "game_code": "1b4c5865131b4967513c1ee90cba4472",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Devil-Fire.png"
            },
            {
                "game_name": "Bangla Beauty",
                "game_code": "6b60d159f0939a45f7b4c88a9b57499a",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Bangla-Beauty.png"
            },
            {
                "game_name": "Aztec Priestess",
                "game_code": "6acff19b2d911a8c695ba24371964807",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Aztec-Priestess.png"
            },
            {
                "game_name": "Fortune Monkey",
                "game_code": "add95fc40f1ef0d56f5716ce45a56946",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Fortune-Monkey.png"
            },
            {
                "game_name": "Dabanggg",
                "game_code": "5404a45b06826911c3537fdf935c281f",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Dabanggg.png"
            },
            {
                "game_name": "Sin City",
                "game_code": "830cac2f5da6cc1fb91cfae04b85b1e2",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Sin-City.png"
            },
            {
                "game_name": "King Arthur",
                "game_code": "fafab1a17a237d0fc0e50c20d2c2bf4c",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/King-Arthur.png"
            },
            {
                "game_name": "Charge Buffalo Ascent",
                "game_code": "28bc4a33c985ddce6acd92422626b76f",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Charge-Buffalo-Ascent.png"
            },
            {
                "game_name": "Witches Night",
                "game_code": "82c5c404cf4c0790deb42a2b5653533c",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Witches-Night.png"
            },
            {
                "game_name": "Fortune Gems 3",
                "game_code": "63927e939636f45e9d6d0b3717b3b1c1",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Fortune%20Gems%203.jpg"
            },
            {
                "game_name": "Super Ace Deluxe",
                "game_code": "80aad2a10ae6a95068b50160d6c78897",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Super%20Ace%20Deluxe.jpg"
            },
            {
                "game_name": "3 Coin Treasures",
                "game_code": "69c1b4586b5060eefcb45bb479f03437",
                "game_type": "Slot Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/3%20Coin%20Treasures.png"
            },
            {
                "game_name": "Big Small",
                "game_code": "25822eb4d6459cc8b39c4f7b69b1bf2c",
                "game_type": "Table Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Big-Small.png"
            },
            {
                "game_name": "Number King",
                "game_code": "36d20c24669dca7630715f2e0a7c18be",
                "game_type": "Table Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Number-King.png"
            },
            {
                "game_name": "Journey West M",
                "game_code": "0d0a5a1731a6a05ffeb0e0f9d1948f80",
                "game_type": "Table Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Journey-West-M.png"
            },
            {
                "game_name": "Poker King",
                "game_code": "a9b13010273fcb0284c9ef436c5fe2ff",
                "game_type": "Table Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Poker-King.png"
            },
            {
                "game_name": "Dragon & Tiger",
                "game_code": "e7ac92d2fdd2aedca92a3521b4416f47",
                "game_type": "Table Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Dragon-&-Tiger.png"
            },
            {
                "game_name": "iRich Bingo",
                "game_code": "a53e46bf1e31f7a960ae314dc188e8b3",
                "game_type": "Table Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/iRich-Bingo.png"
            },
            {
                "game_name": "7up7down",
                "game_code": "3aca3084a5c1a8c77c52d6147ee3d2ab",
                "game_type": "Table Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/7up7down.png"
            },
            {
                "game_name": "Baccarat",
                "game_code": "b9c7c5f589cdaa63c4495e69eaa6dbbf",
                "game_type": "Table Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Baccarat.png"
            },
            {
                "game_name": "Fortune Bingo",
                "game_code": "2fd70535a3c838a438b4b8003ecce49d",
                "game_type": "Table Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Fortune-Bingo.png"
            },
            {
                "game_name": "Sic Bo",
                "game_code": "de0dc8a7fd369bd39a2d5747be87825c",
                "game_type": "Table Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Sic-Bo.png"
            },
            {
                "game_name": "Super Bingo",
                "game_code": "c934e67c2a84f52ef4fb598b56f3e7ba",
                "game_type": "Table Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Super-Bingo.png"
            },
            {
                "game_name": "Bingo Carnaval",
                "game_code": "d419ec9ab6a23590770fd77b036aed16",
                "game_type": "Table Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Bingo-Carnaval.png"
            },
            {
                "game_name": "Win Drop",
                "game_code": "8211bc6e55e84d266bef9a6960940183",
                "game_type": "Table Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Win-Drop.png"
            },
            {
                "game_name": "Lucky Bingo",
                "game_code": "c9f2470e285f3580cd761ba2e1f067e1",
                "game_type": "Table Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Lucky-Bingo.png"
            },
            {
                "game_name": "Jackpot Bingo",
                "game_code": "780d43c0a98bc8f6a0705976605608c3",
                "game_type": "Table Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Jackpot-Bingo.png"
            },
            {
                "game_name": "Color Game",
                "game_code": "2ac4917fbc8b2034307b0c3cdd90d416",
                "game_type": "Table Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Color-Game.png"
            },
            {
                "game_name": "Go Goal BIngo",
                "game_code": "4e5ddaa644badc5f68974a65bf7af02a",
                "game_type": "Table Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Go-Goal-BIngo.png"
            },
            {
                "game_name": "Calaca Bingo",
                "game_code": "b2f05dae5370035a2675025953d1d115",
                "game_type": "Table Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Calaca-Bingo.png"
            },
            {
                "game_name": "PAPPU",
                "game_code": "e5091890bbb65a5f9ceb657351fa73c1",
                "game_type": "Table Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/PAPPU.png"
            },
            {
                "game_name": "West Hunter Bingo",
                "game_code": "8d2c1506dc4ae4c47d23f9359d71c360",
                "game_type": "Table Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/West-Hunter-Bingo.png"
            },
            {
                "game_name": "Bingo Adventure",
                "game_code": "2303867628a9a62272da7576665bbc65",
                "game_type": "Table Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Bingo-Adventure.png"
            },
            {
                "game_name": "Golden Land",
                "game_code": "05fc951a633d4c6b4bbe8c429cd63658",
                "game_type": "Table Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Golden-Land.png"
            },
            {
                "game_name": "Candyland Bingo",
                "game_code": "711acbdf297ce40a09dd0e9023b63f50",
                "game_type": "Table Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Candyland-Bingo.png"
            },
            {
                "game_name": "Color Prediction",
                "game_code": "4a64504353c2304a3061bfd31cd9a62e",
                "game_type": "Table Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Color-Prediction.png"
            },
            {
                "game_name": "Magic Lamp Bingo",
                "game_code": "848ac1703885d5a86b54fbbf094b3b63",
                "game_type": "Table Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Magic-Lamp-Bingo.png"
            },
            {
                "game_name": "Pearls of Bingo",
                "game_code": "0995142f4685f66dfdd1a54fffa66ffa",
                "game_type": "Table Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Pearls-of-Bingo.png"
            },
            {
                "game_name": "European Roulette",
                "game_code": "d4fc911a31b3a61edd83bdd95e36f3bf",
                "game_type": "Table Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/European-Roulette.png"
            },
            {
                "game_name": "Go Rush",
                "game_code": "edef29b5eda8e2eaf721d7315491c51d",
                "game_type": "Crash Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Go-Rush.png"
            },
            {
                "game_name": "Mines",
                "game_code": "72ce7e04ce95ee94eef172c0dfd6dc17",
                "game_type": "Crash Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Mines.png"
            },
            {
                "game_name": "Tower",
                "game_code": "8e939551b9e785001fcb5b0a32f88aba",
                "game_type": "Crash Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Tower.png"
            },
            {
                "game_name": "HILO",
                "game_code": "bd8a2bb2dd63503b93cf6ac9492786ce",
                "game_type": "Crash Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/HILO.png"
            },
            {
                "game_name": "Limbo",
                "game_code": "eabf08253165b6bb2646e403de625d1a",
                "game_type": "Crash Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Limbo.png"
            },
            {
                "game_name": "Wheel",
                "game_code": "6e19e03c50f035ddd9ffd804c30f8c80",
                "game_type": "Crash Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Wheel.png"
            },
            {
                "game_name": "Mines Gold",
                "game_code": "4bceeb28b1a88c87d1ef518d7af2bba9",
                "game_type": "Crash Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Mines-Gold.png"
            },
            {
                "game_name": "Keno",
                "game_code": "a54e3f5e231085c7d8ba99e8ed2261fc",
                "game_type": "Crash Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Keno.png"
            },
            {
                "game_name": "Plinko",
                "game_code": "e3b71c6844eb8c30f5ef210ad92725a6",
                "game_type": "Crash Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Plinko.png"
            },
            {
                "game_name": "Crash Bonus",
                "game_code": "a7f3e5f210523a989a7c6b32f2f1ad42",
                "game_type": "Crash Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Crash-Bonus.png"
            },
            {
                "game_name": "TeenPatti",
                "game_code": "f743cb55c2c4b737727ef144413937f4",
                "game_type": "India Poker Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/TeenPatti.png"
            },
            {
                "game_name": "AK47",
                "game_code": "488c377662cad37a551bde18e2fbe785",
                "game_type": "India Poker Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/AK47.png"
            },
            {
                "game_name": "Andar Bahar",
                "game_code": "6f48b3aa0b64c79a2dc320ea021148b5",
                "game_type": "India Poker Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Andar-Bahar.png"
            },
            {
                "game_name": "Rummy",
                "game_code": "ae632f32c3a1e6803f9a6fbec16be28e",
                "game_type": "India Poker Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Rummy.png"
            },
            {
                "game_name": "Callbreak",
                "game_code": "9092b5a56e001c60850c4c1184c53e07",
                "game_type": "India Poker Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Callbreak.png"
            },
            {
                "game_name": "TeenPatti Joker",
                "game_code": "1a4eaca67612e65fdcae43f4c8a667a4",
                "game_type": "India Poker Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/TeenPatti-Joker.png"
            },
            {
                "game_name": "Callbreak Quick",
                "game_code": "aa9a9916d6e48ba50afa3c2246b6dacb",
                "game_type": "India Poker Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Callbreak-Quick.png"
            },
            {
                "game_name": "TeenPatti 20-20",
                "game_code": "1afa7db588d05de7b9abca4664542765",
                "game_type": "India Poker Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/TeenPatti-20-20.png"
            },
            {
                "game_name": "Tongits Go",
                "game_code": "26fbfab92a3837b7dbf767e783b173af",
                "game_type": "India Poker Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Tongits-Go.png"
            },
            {
                "game_name": "Pusoy Go",
                "game_code": "f2879a3f20f305eadad13448e11c052e",
                "game_type": "India Poker Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Pusoy-Go.png"
            },
            {
                "game_name": "Blackjack",
                "game_code": "3b502aee6c9e1ef0f698332ee1b76634",
                "game_type": "India Poker Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Blackjack.png"
            },
            {
                "game_name": "Blackjack Lucky Ladies",
                "game_code": "d0d1c20062e28493e1750f27a1730c48",
                "game_type": "India Poker Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Blackjack-Lucky-Ladies.png"
            },
            {
                "game_name": "MINI FLUSH",
                "game_code": "07afefc388ab6af8cf26f85286f83fae",
                "game_type": "India Poker Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/MINI-FLUSH.png"
            },

            {
                "game_name": "Caribbean Stud Poker",
                "game_code": "04c9784b0b1b162b2c86f9ce353da8b7",
                "game_type": "India Poker Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Caribbean-Stud-Poker.png"
            },

            {
                "game_name": "Royal Fishing",
                "game_code": "e794bf5717aca371152df192341fe68b",
                "game_type": "Fish Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Royal-Fishing.png"
            },

            {
                "game_name": "Dinosaur Tycoon",
                "game_code": "eef3e28f0e3e7b72cbca61e7924d00f1",
                "game_type": "Fish Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Dinosaur-Tycoon.png"
            },

            {
                "game_name": "Dragon Fortune",
                "game_code": "1200b82493e4788d038849bca884d773",
                "game_type": "Fish Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Dragon-Fortune.png"
            },
            {
                "game_name": "Mega Fishing",
                "game_code": "caacafe3f64a6279e10a378ede09ff38",
                "game_type": "Fish Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Mega-Fishing.png"
            },
            {
                "game_name": "Boom Legend",
                "game_code": "f02ede19c5953fce22c6098d860dadf4",
                "game_type": "Fish Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Boom-Legend.png"
            },
            {
                "game_name": "Happy Fishing",
                "game_code": "71c68a4ddb63bdc8488114a08e603f1c",
                "game_type": "Fish Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Happy-Fishing.png"
            },
            {
                "game_name": "All-star Fishing",
                "game_code": "9ec2a18752f83e45ccedde8dfeb0f6a7",
                "game_type": "Fish Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/All-star-Fishing.png"
            },
            {
                "game_name": "Dinosaur Tycoon II",
                "game_code": "bbae6016f79f3df74e453eda164c08a4",
                "game_type": "Fish Game",
                "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jili/Dinosaur-Tycoon-II.png"
            }
        ]
}

const jdb = {
    platform: 'digital',
    provider: 'jdb',
    games: [
        {
            "game_name": "Dragon Soar",
            "game_code": "9341a18d096ad901ef77338998f29098",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Dragon-Soar.png"
        },
        {
            "game_name": "Pop Pop Candy",
            "game_code": "fde142e65f14da39f784e9e5325e0a77",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Pop-Pop-Candy.png"
        },
        {
            "game_name": "Open Sesame Mega",
            "game_code": "cb5e57be0354264c6c7ea0cdf4eb18b3",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Open-Sesame-Mega.png"
        },
        {
            "game_name": "Fruity Bonanza",
            "game_code": "f5d6b418b755f3aefe3b9828f3112c9c",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Fruity-Bonanza.png"
        },
        {
            "game_name": "Caishen Coming",
            "game_code": "45ecec5dd5077785e7a09988b95bbd24",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Caishen-Coming.png"
        },
        {
            "game_name": "Coocoo Farm",
            "game_code": "d1f17fd51e474b0e72892332ea551ba1",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Coocoo-Farm.png"
        },
        {
            "game_name": "Elemental Link Water",
            "game_code": "b84274cdfa5731945a34bfd0db1ddeea",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Elemental-Link-Water.png"
        },
        {
            "game_name": "Elemental Link Fire",
            "game_code": "46016a772b92c7f47dfdc5873f184ef1",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Elemental-Link-Fire.png"
        },
        {
            "game_name": "Birdsparty Deluxe",
            "game_code": "786d1cd7f4fa9905c825378292f1204c",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Birdsparty-Deluxe.png"
        },
        {
            "game_name": "Moneybags Man 2",
            "game_code": "33c862e7db9e0e59ab3f8fe770f797da",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Moneybags-Man-2.png"
        },
        {
            "game_name": "Trump Card",
            "game_code": "96c010fc4a95792401e903213d7add44",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Trump-Card.png"
        },
        {
            "game_name": "Fortune Neko",
            "game_code": "49b706ccfe7c53727ee6760cd9a8721a",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Fortune-Neko.png"
        },
        {
            "game_name": "Book Of Mystery",
            "game_code": "13072a6eb2111c1b5202fe6155227e94",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Book-Of-Mystery.png"
        },
        {
            "game_name": "Prosperitytiger",
            "game_code": "1d704bbb187a113229f3fdaa3b5406fe",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Prosperitytiger.png"
        },
        {
            "game_name": "Glamorous Girl",
            "game_code": "2663e14e5b455525252a25d9bd99e840",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Glamorous-Girl.png"
        },
        {
            "game_name": "Blossom Of Wealth",
            "game_code": "ed6fbaeb7a104dd7ed96fa1683a48669",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Blossom-Of-Wealth.png"
        },
        {
            "game_name": "Big Three Dragons",
            "game_code": "600c338d3fca2da208f1bba2c9d29059",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Big-Three-Dragons.png"
        },
        {
            "game_name": "Mayagoldcrazy",
            "game_code": "6c8009d165293759bb218b72ba3c380f",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Mayagoldcrazy.png"
        },
        {
            "game_name": "Lantern Wealth",
            "game_code": "f2f2eae301311f0320ef669b68935546",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Lantern-Wealth.png"
        },
        {
            "game_name": "Marvelous Iv",
            "game_code": "126cf2bfe8a8e606b362d23de02c0d5e",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Marvelous-Iv.png"
        },
        {
            "game_name": "Wonder Elephant",
            "game_code": "540da2ba4c849fc1c315f43ae74df220",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Wonder-Elephant.png"
        },
        {
            "game_name": "Kong",
            "game_code": "f6e9fd31cbc3be8cd3bd95486177377b",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Kong.png"
        },
        {
            "game_name": "Lucky Diamond",
            "game_code": "6f6867ad1956a04b174c92629cab7f54",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Lucky-Diamond.png"
        },
        {
            "game_name": "Spindrift 2",
            "game_code": "05dc8c7a43305c3fcb43574c570d6378",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Spindrift-2.png"
        },
        {
            "game_name": "Dragons Gate",
            "game_code": "feaba603992f26633116fb54562e3693",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Dragons-Gate.png"
        },
        {
            "game_name": "Spindrift",
            "game_code": "b624d1917ef5a740c151e4904a7cf0dd",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Spindrift.png"
        },
        {
            "game_name": "Double Wilds",
            "game_code": "7bd5233c83de0669336ee649e6c8d2b5",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Double-Wilds.png"
        },
        {
            "game_name": "Moneybags Man",
            "game_code": "c4fdebb24ff26fffb3a65d018da8ae92",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Moneybags-Man.png"
        },
        {
            "game_name": "Miner Babe",
            "game_code": "e705514fdd4f9bea5f82bbd0b2c0a353",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Miner-Babe.png"
        },
        {
            "game_name": "Super Niubi Deluxe",
            "game_code": "5d940d11c48b64ec1e6a3c8be5228250",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Super-Niubi-Deluxe.png"
        },
        {
            "game_name": "Funky King Kong",
            "game_code": "cdea2d0670bc40309b4a9b6f942a218a",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Funky-King-Kong.png"
        },
        {
            "game_name": "Golden Disco",
            "game_code": "dfb8a198ce0e821560cf543387a2acc2",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Golden-Disco.png"
        },
        {
            "game_name": "Treasure Bowl",
            "game_code": "0651af3e73c7600633522ffe15cc175b",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Treasure-Bowl.png"
        },
        {
            "game_name": "Mjolnir",
            "game_code": "e270f0674dff538b181499d18ab47845",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Mjolnir.png"
        },
        {
            "game_name": "Fortune Treasure",
            "game_code": "5a55a19d9cfbead5e64b8169e96bd27a",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Fortune-Treasure.png"
        },
        {
            "game_name": "Super Niubi",
            "game_code": "4042e5d0c777e1d3c3bd481dac0a867e",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Super-Niubi.png"
        },
        {
            "game_name": "Dragons World",
            "game_code": "00b886803f3d067f7028872468e84745",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Dragons-World.png"
        },
        {
            "game_name": "Go Lai Fu",
            "game_code": "a3584394182e8abce362d90c2f048c75",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Go-Lai-Fu.png"
        },
        {
            "game_name": "Birds Party",
            "game_code": "7b497c4d19f87c86ea29910c12129edc",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Birds-Party.png"
        },
        {
            "game_name": "Triple King Kong",
            "game_code": "a9f60e017f2765c74e1ec80473ac4ffa",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Triple-King-Kong.png"
        },
        {
            "game_name": "Orient Animals",
            "game_code": "bdb0459f7e116a20839a3b2a0063a2ff",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Orient-Animals.png"
        },
        {
            "game_name": "Lucky Seven",
            "game_code": "b560b7c42bd29f7d0cda06485a3c4af5",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Lucky-Seven.png"
        },
        {
            "game_name": "Kingsman",
            "game_code": "55e3b4d064b014a403be6ffba8c4343e",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Kingsman.png"
        },
        {
            "game_name": "Dragon",
            "game_code": "735fcdbf9f5e6042132cc01e9860723f",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Dragon.png"
        },
        {
            "game_name": "Dragon Warrior",
            "game_code": "29135c91125ae1655f8c91eb29617705",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Dragon-Warrior.png"
        },
        {
            "game_name": "Billionaire",
            "game_code": "16b1418fe87a6fa5628eec8cb40da056",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Billionaire.png"
        },
        {
            "game_name": "Legendary 5",
            "game_code": "04a3be36bbf1110345d53e07df9c9cc3",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Legendary-5.png"
        },
        {
            "game_name": "Rooster In Love",
            "game_code": "2f24019dc8abbe05b984611462a1f01c",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Rooster-In-Love.png"
        },
        {
            "game_name": "Xi Yang Yang",
            "game_code": "f1496f1b49981a63e6064ac84517b5ae",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Xi-Yang-Yang.png"
        },
        {
            "game_name": "Fortune Horse",
            "game_code": "ca6e7b621b13077debbf1bf9d5a6c031",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Fortune-Horse.png"
        },
        {
            "game_name": "Flirting Scholar Tang Ii",
            "game_code": "857d3426c220b4003cd0e4521c07e94b",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Flirting-Scholar-Tang-Ii.png"
        },
        {
            "game_name": "Open Sesameii",
            "game_code": "558ca5b101d1be5bd7a08c6d01422c4f",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Open-Sesameii.png"
        },
        {
            "game_name": "Winning Mask Ii",
            "game_code": "955ab46e30fcda3b2446169409848fa7",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Winning-Mask-Ii.png"
        },
        {
            "game_name": "Guan Gong",
            "game_code": "90bfd55dcf41709d27f1f38fd4a314a9",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Guan-Gong.png"
        },
        {
            "game_name": "Beauty And The Kingdom",
            "game_code": "478d2e337f0d0a1b40e0e3521f89f1ba",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Beauty-And-The-Kingdom.png"
        },
        {
            "game_name": "Lucky Phoenix",
            "game_code": "8244e0afc46b2b8a3446ec18ae0e129a",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Lucky-Phoenix.png"
        },
        {
            "game_name": "Lucky Miner",
            "game_code": "8146db6ded1ef29540d262650817d090",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Lucky-Miner.png"
        },
        {
            "game_name": "Olympian Temple",
            "game_code": "ca11d9830495d2888d7e50770353ce32",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Olympian-Temple.png"
        },
        {
            "game_name": "Mahjong",
            "game_code": "e9d4b66c06a43e73ec8f1b2055f83c3a",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Mahjong.png"
        },
        {
            "game_name": "Banana Saga",
            "game_code": "77f407b50f00ec4569249b008a5adca0",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Banana-Saga.png"
        },
        {
            "game_name": "Open Sesame",
            "game_code": "d5cede7b6800bd9cd266cde8c4f73dc6",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Open-Sesame.png"
        },
        {
            "game_name": "Four Treasures",
            "game_code": "d53f82ab4fbb353480e012fd763bc339",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Four-Treasures.png"
        },
        {
            "game_name": "Napoleon",
            "game_code": "e4b973ece238c954fbcdf30fdfeae969",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Napoleon.png"
        },
        {
            "game_name": "New Year",
            "game_code": "319fb2a372755ff47f6adc4f36e67b0f",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/New-Year.png"
        },
        {
            "game_name": "Moonlight Treasure",
            "game_code": "85e29fa6b578c6bf131ad4fdff750acb",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Moonlight-Treasure.png"
        },
        {
            "game_name": "Lucky Lion",
            "game_code": "c1557ea0fad63c5e07b32d9f62ef1899",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Lucky-Lion.png"
        },
        {
            "game_name": "Lucky Qilin",
            "game_code": "f2298bcf0de0dccdd767d30b6e4f811a",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Lucky-Qilin.png"
        },
        {
            "game_name": "Formosa Bear",
            "game_code": "e0afed167c1ef4c9a35c527a52419f0a",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Formosa-Bear.png"
        },
        {
            "game_name": "The Llama Adventure",
            "game_code": "6800ef74e2b33c9a9155848f1328c8e5",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/The-Llama-Adventure.png"
        },
        {
            "game_name": "Wukong",
            "game_code": "59acc6ad72fd6fb6cf30eb58cd9bedb8",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Wukong.png"
        },
        {
            "game_name": "Winning Mask",
            "game_code": "4aebce625a1495532a25344f0e4ac584",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Winning-Mask.png"
        },
        {
            "game_name": "Flirting Scholar Tang",
            "game_code": "07df172c089e29e576aa41eeb0cbeb2b",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Flirting-Scholar-Tang.png"
        },
        {
            "game_name": "Lucky Dragons",
            "game_code": "c32fff242e09a234f7350bb9aaa055cc",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Lucky-Dragons.png"
        },

        {
            "game_name": "Plinko",
            "game_code": "cb54272cd536cf77eb6093bae2513095",
            "game_type": "Arcade Games",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Plinko.png"
        },
        {
            "game_name": "Hilo",
            "game_code": "9ffbc085919e5e19f93a682fd3a737bb",
            "game_type": "Arcade Games",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Hilo.png"
        },
        {
            "game_name": "Goal",
            "game_code": "0160b30b64598290365f61211fb84a7b",
            "game_type": "Arcade Games",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Goal.png"
        },
        {
            "game_name": "Firework Burst",
            "game_code": "19f082ffb4656934e80459a73ab73037",
            "game_type": "Arcade Games",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Firework-Burst.png"
        },
        {
            "game_name": "Mines",
            "game_code": "45a2a92108634508e5c47c690eb01c0b",
            "game_type": "Arcade Games",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Mines.png"
        },
        {
            "game_name": "Galaxy Burst",
            "game_code": "37ca0b32e1908480e03db00cdc1bc2cf",
            "game_type": "Arcade Games",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Galaxy-Burst.png"
        },
        {
            "game_name": "Jogo Do Bicho",
            "game_code": "0e8432be6bc0cab304b41bc964aaf154",
            "game_type": "Arcade Games",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Jogo-Do-Bicho.png"
        },
        {
            "game_name": "Caishen Party",
            "game_code": "6437f1794f0753b268b2badbd69ef156",
            "game_type": "Arcade Games",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Caishen-Party.png"
        },
        {
            "game_name": "Lucky Color Game",
            "game_code": "5708005e9f2340dbd719567a94ba44b4",
            "game_type": "Arcade Games",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Lucky-Color-Game.png"
        },
        {
            "game_name": "King Of Football",
            "game_code": "4088c7ed9db461f990d9514d6b9f7537",
            "game_type": "Arcade Games",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/King-Of-Football.png"
        },
        {
            "game_name": "Crazy King Kong",
            "game_code": "c2c611f87d47faae8e4b285fe8145d41",
            "game_type": "Arcade Games",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Crazy-King-Kong.png"
        },
        {
            "game_name": "Super Super Fruit",
            "game_code": "a9899c045de7873e620e0ef330f3fc73",
            "game_type": "Arcade Games",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Super-Super-Fruit.png"
        },
        {
            "game_name": "Huaguoshan Legends",
            "game_code": "6ff786580f7d9453728b9a8a3d1c3499",
            "game_type": "Arcade Games",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Huaguoshan-Legends.png"
        },
        {
            "game_name": "Beer Tycoon",
            "game_code": "b133cf4f3c32b80344b381cc9f26442a",
            "game_type": "Arcade Games",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Beer-Tycoon.png"
        },
        {
            "game_name": "Birds And Animals",
            "game_code": "db93ffd7164953bb1eb4c86b68542ed6",
            "game_type": "Arcade Games",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Birds-And-Animals.png"
        },
        {
            "game_name": "Happy New Year",
            "game_code": "d0b0d503d3d553643f665d5d2fdab138",
            "game_type": "Arcade Games",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Happy-New-Year.png"
        },
        {
            "game_name": "Classic Mario",
            "game_code": "627148e0dd36ff12df432fc920a0c59f",
            "game_type": "Arcade Games",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Classic-Mario.png"
        },
        {
            "game_name": "Happy Lottery",
            "game_code": "d6cd29e274d066e2e8f0cb171e7583a8",
            "game_type": "Lottery Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Happy-Lottery.png"
        },
        {
            "game_name": "Gold Rooster Lottery",
            "game_code": "2f3361619ef9520214c08fd2aecf33da",
            "game_type": "Lottery Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Gold-Rooster-Lottery.png"
        },
        {
            "game_name": "Cai Shen Bingo",
            "game_code": "f3629935719cf04d6b689933486177ce",
            "game_type": "Lottery Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/jdb/Cai-Shen-Bingo.png"
        }

    ]
}
const spribe = {
    platform: 'digital',
    provider: 'spribe',
    games: [
        {
            "game_name": "Aviator",
            "game_code": "a04d1f3eb8ccec8a4823bdf18e3f0e84",
            "game_type": "Crash Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/spribe/Aviator.png"
        },
        {
            "game_name": "Aviatrix",
            "game_code": "6f652ee587522116739db9ed5a8d529f",
            "game_type": "Crash Game",
            "game_image": "https://i.ibb.co.com/hFrJcL41/A001-aviatrix.png"
        },
        {
            "game_name": "Dice",
            "game_code": "8a87aae7a3624d284306e9c6fe1b3e9c",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/spribe/Dice.png"
        },
        {
            "game_name": "Goal",
            "game_code": "c68a515f0b3b10eec96cf6d33299f4e2",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/spribe/Goal.png"
        },
        {
            "game_name": "Hi Lo",
            "game_code": "a669c993b0e1f1b7da100fcf95516bdf",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/spribe/Hi-Lo.png"
        },
        {
            "game_name": "Hotline",
            "game_code": "b31720b3cd65d917a1a96ef61a72b672",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/spribe/Hotline.png"
        },
        {
            "game_name": "Keno",
            "game_code": "c311eb4bbba03b105d150504931f2479",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/spribe/Keno.png"
        },
        {
            "game_name": "Mines",
            "game_code": "5c4a12fb0a9b296d9b0d5f9e1cd41d65",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/spribe/Mines.png"
        },
        {
            "game_name": "Mini Roulette",
            "game_code": "9dc7ac6155c5a19c1cc204853e426367",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/spribe/Mini-Roulette.png"
        },
        {
            "game_name": "Plinko",
            "game_code": "6ab7a4fe5161936012d6b06143918223",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/spribe/Plinko.png"
        },
        {
            "game_name": "Balloon",
            "game_code": "de88f202c5a8beeaccabbd944f8acfbf",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/spribe/balloon.png"
        },
        {
            "game_name": "Keno 80",
            "game_code": "7a762edbe411ebc9be416870a734bd03",
            "game_type": "Slot Game",
            "game_image": "https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/spribe/keno80.png"
        },

    ]
}

const evolution = {
    platform: 'live',
    provider: 'evolution',
    games: [
        {
            game_name: 'Speed Baccarat 3',
            game_code: 'e7931b2e0d410ddc4f88520e9ad87c4b',
            game_type: 'CasinoLive',
            game_image: 'https://i.ibb.co.com/4w8CYZdM/Speed-Baccarat-3.png'
        },
        {
            game_name: 'Speed Baccarat F',
            game_code: 'b332c47c868946659d7de97f4157bdb3',
            game_type: 'CasinoLive',
            game_image: 'https://i.ibb.co.com/FkFnVh4j/Speed-Baccarat-F.png'
        },
        {
            game_name: 'Emperor Speed Baccarat A',
            game_code: '68fa4cdc74cd23b043db2caa25f1b42c',
            game_type: 'CasinoLive',
            game_image: 'https://i.ibb.co.com/tpysNpb6/Emperor-Speed-Baccarat-A.jpg'
        },
        {
            game_name: 'Super Sic Bo',
            game_code: 'e3951a5bf624e822a22cba1cbe619df5',
            game_type: 'CasinoLive',
            game_image: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/evoplay/Super Sic Bo.png'
        },
        {
            game_name: 'First Person Top Card',
            game_code: '64985010e87aab51c7fb18076d34062d',
            game_type: 'CasinoLive',
            game_image: 'https://i.ibb.co.com/wZ3QSYqN/First-Person-Top-Card.png'
        },
        {
            game_name: 'First Person Dream Catcher',
            game_code: '7ee0da50996278d7fe5136f86f368fa5',
            game_type: 'CasinoLive',
            game_image: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/evoplay/First Person Dream Catcher.png'
        },
        {
            game_name: 'First Person Dragon Tiger',
            game_code: '4b4c45709dfd8188d7d6d12fae15bd42',
            game_type: 'CasinoLive',
            game_image: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/evoplay/First Person Dragon Tiger.png'
        },
        {
            game_name: 'First Person Mega Ball',
            game_code: '3150b1cd8fbbddd94d36f20fab504653',
            game_type: 'CasinoLive',
            game_image: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/evoplay/First Person Mega Ball.png'
        },
        {
            game_name: 'First Person Lightning Baccarat',
            game_code: 'fec1b730e804bf14bd471a1e9b82bf44',
            game_type: 'CasinoLive',
            game_image: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/evoplay/First Person Lightning Baccarat.png'
        },
        {
            game_name: 'First Person Craps',
            game_code: '823245918aa2afd108a5912e363c083c',
            game_type: 'CasinoLive',
            game_image: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/evoplay/First Person Craps.png'
        },
        {
            game_name: 'First Person Baccarat',
            game_code: 'e18dfa4a5dd4a0f2d8b45337bd6abb9d',
            game_type: 'CasinoLive',
            game_image: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/evoplay/First Person Baccarat.png'
        },
        {
            game_name: 'First Person Golden Wealth Baccarat',
            game_code: '88e49e3fb9a9883f01f167d03f5efdcb',
            game_type: 'CasinoLive',
            game_image: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/evoplay/First Person Golden Wealth Baccarat.png'
        },
        {
            game_name: 'First Person American Roulette',
            game_code: '88b2d98462fbc45d6d31e95083e183df',
            game_type: 'CasinoLive',
            game_image: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/evoplay/First Person American Roulette.png'
        },
        {
            game_name: 'First Person Deal or No Deal',
            game_code: 'c715eb06391fabe5275d0b56440f49f3',
            game_type: 'CasinoLive',
            game_image: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/evoplay/First Person Deal or No Deal.png'
        },
        {
            game_name: 'First Person Blackjack',
            game_code: '4ac0e874a4d5fc55bcdba5302b43bc96',
            game_type: 'CasinoLive',
            game_image: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/evoplay/First Person Blackjack.png'
        },
        {
            game_name: 'First Person Lightning Blackjack',
            game_code: '74914b065a9e6b9c7cb8a0e4b17294ed',
            game_type: 'CasinoLive',
            game_image: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/evoplay/First Person Lightning Blackjack.png'
        },
        {
            game_name: 'First Person Roulette',
            game_code: 'a82670530f49a6b3445dc1a592a2eb9e',
            game_type: 'CasinoLive',
            game_image: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/evoplay/First Person Roulette.png'
        },
        {
            game_name: 'Dream Catcher',
            game_code: '7f50a6fbfcd9257299303b5757d43525',
            game_type: 'CasinoLive',
            game_image: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/evoplay/Dream Catcher.png'
        },
        {
            game_name: 'Football Studio Dice',
            game_code: '1909b4e3380dc37654f8e3997e63ec1b',
            game_type: 'CasinoLive',
            game_image: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/evoplay/Football Studio Dice.png'
        },
        {
            game_name: 'Dead or Alive: Saloon',
            game_code: 'eda1a2c5edb8370f8df58dcf8e1381b9',
            game_type: 'CasinoLive',
            game_image: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/evoplay/Dead or Alive: Saloon.png'
        },
        {
            game_name: 'First Person Lightning Roulette',
            game_code: 'f5ee6fce16d369d1a656f3b227fc7236',
            game_type: 'CasinoLive',
            game_image: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/api/evoplay/First Person Lightning Roulette.png'
        },
        {
            "game_name": "Football Studio",
            "game_code": "392e13e38b3cec5ad259254a206d343a",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/rR1LYjxQ/Football-Studio.png"
        },
        {
            "game_name": "Deal or No Deal",
            "game_code": "bee6be84ab995f2040f4e575c2cc3910",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/Kz0HLwkS/Deal-or-No-Deal.png"
        },
        {
            "game_name": "Gonzo's Treasure Hunt",
            "game_code": "e1969a739eb17b9e7d97835357a30082",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/84Mc7ZXB/Gonzos-Treasure-Hunt.png"
        },
        {
            "game_name": "Cash or Crash",
            "game_code": "b53a604877024ef2eab9946898e65d6b",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/JjmmpQTR/Cash-or-Crash.png"
        },
        {
            "game_name": "Monopoly Big Baller",
            "game_code": "067806e82742ca16bfffe70f76215647",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/PsbpH0VV/Monopoly-Big-Baller.png"
        },
        {
            "game_name": "Mega Ball",
            "game_code": "3955853fc6a0b53f7f9b9cff0be19cb8",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/bR7wytcM/Mega-Ball.png"
        },
        {
            "game_name": "Monopoly Live",
            "game_code": "d496ac5fd91702331133e44b6bd12b26",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/GftsYWnN/Monopoly-Live.png"
        },
        {
            "game_name": "Crazy Time A",
            "game_code": "814aa56348ac4165588f2a3e251f8732",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/YT7F4sgL/Crazy-Time-A.png"
        },
        {
            "game_name": "Teen Patti",
            "game_code": "0617a82334f4f1766cf282ce906e1df7",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/bMtJX364/Teen-Patti.png"
        },
        {
            "game_name": "Super Andar Bahar",
            "game_code": "f7b98e899461bdd49f92afc36b4c0db5",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/0jYpV61j/Super-Andar-Bahar.png"
        },
        {
            "game_name": "Crazy Time",
            "game_code": "917c0c51d248c33eb058e3210a2e7371",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/fdXdws9R/Crazy-Time.png"
        },
        {
            "game_name": "Side Bet City",
            "game_code": "ccf9a69b0ff627e53fdecfcb3a379ef2",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/nv0HWMm/Side-Bet-City.png"
        },
        {
            "game_name": "Texas Hold'em Bonus Poker",
            "game_code": "0d743830cca897a7c4c9187bc7f9b812",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/v4svxJ5z/Texas-Holdem-Bonus-Poker.png"
        },
        {
            "game_name": "Caribbean Stud Poker",
            "game_code": "724eebd5cbe7555b01ed60279cb59e5a",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/R4GhcvLZ/Caribbean-Stud-Poker.png"
        },
        {
            "game_name": "Extreme Texas Hold'em",
            "game_code": "fc4e71748bc1a8a7abfc4c1e2f63aa3b",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/XZxc79LP/Extreme-Texas-Holdem.webp"
        },
        {
            "game_name": "Triple Card Poker",
            "game_code": "b7c3b022f1c2b768524523d855a58d89",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/wFqFNWrm/Triple-Card-Poker.png"
        },
        {
            "game_name": "Salon Privé Roulette",
            "game_code": "105735cbbaca3b69176c710ebb2c751d",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/nsqYh1qs/Salon-Priv-Roulette.webp"
        },
        {
            "game_name": "2 Hand Casino Hold'em",
            "game_code": "97dcc429fe7142159aab82b918780f14",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/Pz3WqWFS/2-Hand-Casino-Holdem.jpg"
        },
        {
            "game_name": "Casino Hold'em",
            "game_code": "8cb4d1c55915742a45f59f2adbb97e24",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/dsKfqCXj/Casino-Holdem.png"
        },
        {
            "game_name": "Dragonara Roulette",
            "game_code": "5c558d5217948dedcccd2592705a8b2f",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/rKz4nx22/Dragonara-Roulette.png"
        },
        {
            "game_name": "Auto Lightning Roulette",
            "game_code": "bad3e93f3faadef550cb11fcb44a49b1",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/zVGz9jhd/Auto-Lightning-Roulette.png"
        },
        {
            "game_name": "Auto-Roulette VIP",
            "game_code": "367c395a50d4ef9edda332e17094670b",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/xqn9gvwr/Auto-Roulette-VIP.png"
        },
        {
            "game_name": "Auto-Roulette La Partage",
            "game_code": "56fbfbaa2183a0389eed13255b8b9b52",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/5XVv89zt/Auto-Roulette-La-Partage.png"
        },
        {
            "game_name": "Speed Auto Roulette",
            "game_code": "1ffeecc77f75d0485e83036269fd9401",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/bgbxd0ZM/Speed-Auto-Roulette.png"
        },
        {
            "game_name": "Double Ball Roulette",
            "game_code": "fae08e8e222f162b27a2d5c4329d1044",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/k6gS5yKM/Double-Ball-Roulette.png"
        },
        {
            "game_name": "American Roulette",
            "game_code": "0afb35f8abd269ca0c0c65a49d5145db",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/Q3F1Mhh7/American-Roulette.png"
        },
        {
            "game_name": "VIP Roulette",
            "game_code": "e8f217c3d554285933cb67072c897fac",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/YTXrWFQL/VIP-Roulette.png"
        },
        {
            "game_name": "Instant Roulette",
            "game_code": "ec65c22981a707736871eecfca8e5e25",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/Kjn9knFg/Instant-Roulette.png"
        },
        {
            "game_name": "Auto-Roulette",
            "game_code": "ed9e15ea8a2cbb9e7ad2604819764d43",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/vvkkp4GN/Auto-Roulette.png"
        },
        {
            "game_name": "Immersive Roulette",
            "game_code": "3b43390eebe1f1a84b15f1251a253b24",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/TBpxZ40g/Immersive-Roulette.png"
        },
        {
            "game_name": "Emperor Roulette",
            "game_code": "53b7cbb34adc1279d0df4c0942af9393",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/p6XQv3SQ/Emperor-Roulette.jpg"
        },
        {
            "game_name": "Gold Bar Roulette",
            "game_code": "ddec0b9e4bcb684d843af9f480e57369",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/0RnT9Yrs/Gold-Bar-Roulette.jpg"
        },
        {
            "game_name": "XXXtreme Lightning Roulette",
            "game_code": "394fe6a2cde24bc487767236cc6eccd6",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/5xwB5tTj/XXXtreme-Lightning-Roulette.png"
        },
        {
            "game_name": "Roulette",
            "game_code": "c9020da3ac9119910b7146416d5a9850",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/23Z9p69n/Roulette.png"
        },
        {
            "game_name": "Salon Privé Blackjack G",
            "game_code": "cf2ee43e0200d8fe0564628d5a56bd6f",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/bg9SXSdR/Salon-Priv-Blackjack-G.png"
        },
        {
            "game_name": "Lightning Roulette",
            "game_code": "4a858d6b74c05260d3ea2762838798c7",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/5hXz8C2F/Lightning-Roulette.png"
        },
        {
            "game_name": "Salon Privé Blackjack I",
            "game_code": "d9b7ea7819d2d7abee3197bf2b1281c7",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/wZn98WHx/Salon-Priv-Blackjack-I.png"
        },
        {
            "game_name": "Salon Privé Blackjack J",
            "game_code": "cae32c1011d6e41ab7d6948f1696ab1c",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/9knKMkQ5/Salon-Priv-Blackjack-J.png"
        },
        {
            "game_name": "Salon Privé Blackjack H",
            "game_code": "db69d21bbd5bc9d37b38bbfbfa3169fc",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/NgVFGWNN/Salon-Priv-Blackjack-H.png"
        },
        {
            "game_name": "Salon Privé Blackjack E",
            "game_code": "88094da66b69066587ab29163d239142",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/S7vrndpp/Salon-Priv-Blackjack-E.png"
        },
        {
            "game_name": "Salon Privé Blackjack F",
            "game_code": "9aef9d09e355adc2f1bb3c4179d28385",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/whWfQhk1/Salon-Priv-Blackjack-F.png"
        },
        {
            "game_name": "Salon Privé Blackjack C",
            "game_code": "2e8a0e70afbf41baf8200fbdf90fb6ec",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/pvC23Z02/Salon-Priv-Blackjack-C.png"
        },
        {
            "game_name": "Salon Privé Blackjack B",
            "game_code": "4c4ee10f6c080904bc2e70f66d6185d4",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/84z2B5YS/Salon-Priv-Blackjack-B.png"
        },
        {
            "game_name": "Salon Privé Blackjack D",
            "game_code": "9e78f6d00dbebadc3efe5a52af3a0c83",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/yB77D2tK/Salon-Priv-Blackjack-D.png"
        },
        {
            "game_name": "Salon Privé Blackjack A",
            "game_code": "0b8610191202673d86d53d45f4f05804",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/BV0HmcGw/Salon-Priv-Blackjack-A.png"
        },
        {
            "game_name": "Blackjack Diamond VIP",
            "game_code": "7d4e80750fdbd046e210dc8e1d1a0c21",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/wNLJ3sZ3/Blackjack-Diamond-VIP.png"
        },
        {
            "game_name": "Blackjack Fortune VIP",
            "game_code": "06e7ecf8debac2b86e8b38342de30a7a",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/G4hzCckk/Blackjack-Fortune-VIP.png"
        },
        {
            "game_name": "Blackjack Grand VIP",
            "game_code": "79efa086e10bbd8543b6e03e7a491351",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/6Jq0c9np/Blackjack-Grand-VIP.png"
        },
        {
            "game_name": "Blackjack Platinum VIP",
            "game_code": "c2bd2aafaa4dbaff9df0cd0b53fc6056",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/bMFcDN3p/Blackjack-Platinum-VIP.png"
        },
        {
            "game_name": "Blackjack VIP Gamma",
            "game_code": "9f71de77938927179599cd645a5688c5",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/9H9q2DBd/Blackjack-VIP-Gamma.png"
        },
        {
            "game_name": "Blackjack VIP Alpha",
            "game_code": "a6117241477a0b712edc856274691f9b",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/k2Mj6Ffj/Blackjack-VIP-Alpha.png"
        },
        {
            "game_name": "Blackjack VIP 27",
            "game_code": "74f9dadea990e593f531953b1feaac7b",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/LXZkr8Jb/Blackjack-VIP-27.png"
        },
        {
            "game_name": "Blackjack VIP Beta",
            "game_code": "3a3bb51ef96c4795ac20c935ca68443b",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/9kCFNB5P/Blackjack-VIP-Beta.png"
        },
        {
            "game_name": "Blackjack VIP 26",
            "game_code": "84c4ac47b33cb83dbdfbd56af4e658ad",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/G3c5Lpbg/Blackjack-VIP-26.png"
        },
        {
            "game_name": "Blackjack VIP 21",
            "game_code": "fcb1de01fe2c14217bfabd92976c7a05",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/j9twPDGh/Blackjack-VIP-21.png"
        },
        {
            "game_name": "Blackjack VIP 25",
            "game_code": "cc61ff297d5beef775880c9ffcccf63e",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/m58vY8kj/Blackjack-VIP-25.png"
        },
        {
            "game_name": "Blackjack VIP 20",
            "game_code": "a9d74415dfdde9ca16087d260c63fd68",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/SX7ntw9k/Blackjack-VIP-20.png"
        },
        {
            "game_name": "Blackjack VIP 19",
            "game_code": "31915e590bc4f5904681c9ed3fec7e91",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/1YpzyFgG/Blackjack-VIP-19.png"
        },
        {
            "game_name": "Blackjack VIP 22",
            "game_code": "ba4f73d5e19cb97db65f0766cd785434",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/ymPxWjf9/Blackjack-VIP-22.png"
        },

        {
            "game_name": "Blackjack VIP 17",
            "game_code": "994a2681526c98fec2b9a2d63a642faa",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/d069gB74/Blackjack-VIP-17.png"
        },
        {
            "game_name": "Blackjack VIP 18",
            "game_code": "ebdf09c0f6d79eed79b1027afc9d7df7",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/V000fJw6/Blackjack-VIP-18.png"
        },
        {
            "game_name": "Blackjack VIP 16",
            "game_code": "295743c7d72fd2eb61ca06749bb25a44",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/GQ7V70bP/Blackjack-VIP-16.png"
        },
        {
            "game_name": "Blackjack VIP 15",
            "game_code": "e200f3434cd89322594336ee0f90afd0",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/XxqsfDV6/Blackjack-VIP-15.png"
        },
        {
            "game_name": "Blackjack VIP 14",
            "game_code": "1d5d1c1c3d9c76bd7f4c58b9239c373a",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/7dNfKcGV/Blackjack-VIP-14.png"
        },
        {
            "game_name": "Blackjack VIP 13",
            "game_code": "ad6b96a22d790052e3f899b3ece69c03",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/ZRWm3p02/Blackjack-VIP-13.png"
        },
        {
            "game_name": "Blackjack VIP 11",
            "game_code": "1329b0405db81b9964d6dd6eb0a514c9",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/tpz6vkPs/Blackjack-VIP-11.png"
        },
        {
            "game_name": "Blackjack VIP 10",
            "game_code": "323f4086833fda7bb471f10e18a28364",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/3mScBhB6/Blackjack-VIP-10.png"
        },
        {
            "game_name": "Blackjack VIP 9",
            "game_code": "54806d16c3eac96d4bea63ccfc0c674c",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/6VfB1hy/Blackjack-VIP-9.png"
        },
        {
            "game_name": "Blackjack VIP 5",
            "game_code": "f3d684a1b2fb22ac35c67e296df4db31",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/jdW0fg7/Blackjack-VIP-5.png"
        },
        {
            "game_name": "Blackjack VIP 8",
            "game_code": "ecffee81bd446ea53e4836e497f9e803",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/hJ8415v4/Blackjack-VIP-8.png"
        },
        {
            "game_name": "Blackjack VIP 6",
            "game_code": "4a33673ccc580aea8ae80ffa03c12ba7",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/MkP8HM2h/Blackjack-VIP-6.png"
        },
        {
            "game_name": "Blackjack VIP 7",
            "game_code": "3d3f89247b5ec9e98e76ef2b22da2532",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/twKcvd3J/Blackjack-VIP-7.png"
        },
        {
            "game_name": "Blackjack VIP 4",
            "game_code": "aed251dded03e8a1e665e52cdc4b6e80",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/QFPPqLbM/Blackjack-VIP-4.png"
        },
        {
            "game_name": "Blackjack VIP X",
            "game_code": "195f9f3cb289ab0c8e281317692590ba",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/chY0tdyj/Blackjack-VIP-X.png"
        },
        {
            "game_name": "Blackjack VIP 3",
            "game_code": "f8e17bc0ad780b65f684558001ee2e64",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/JjyzY4ND/Blackjack-VIP-3.png"
        },
        {
            "game_name": "Blackjack VIP 2",
            "game_code": "7530ac3d1140882df7e883641237bb42",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/pr4Vtfzg/Blackjack-VIP-2.png"
        },
        {
            "game_name": "Blackjack VIP Z",
            "game_code": "54b14b8af2eab62dad3053c09ff7508d",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/9kpFhqCm/Blackjack-VIP-Z.png"
        },
        {
            "game_name": "Blackjack VIP 1",
            "game_code": "9f509cdc3cdce669368977eda1588011",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/zW6bX5dW/Blackjack-VIP-1.png"
        },
        {
            "game_name": "Blackjack VIP V",
            "game_code": "c69e64c185d94548fda619a867e1f031",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/V08mw9mc/Blackjack-VIP-V.png"
        },
        {
            "game_name": "Blackjack VIP T",
            "game_code": "78beceac05fb03bb597646ee2a85cb1e",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/XhM253x/Blackjack-VIP-T.png"
        },
        {
            "game_name": "Blackjack VIP U",
            "game_code": "921477a239b298fdd623e29c8f982274",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/h1rYHvpc/Blackjack-VIP-U.png"
        },
        {
            "game_name": "Blackjack VIP S",
            "game_code": "a422edff8144adb81cd3e5d0236bb52b",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/twsNQ9jF/Blackjack-VIP-S.png"
        },
        {
            "game_name": "Blackjack VIP P",
            "game_code": "5a04abf1c8f61ff36beaa840b38fd720",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/DHZPTmwq/Blackjack-VIP-P.png"
        },
        {
            "game_name": "Blackjack VIP N",
            "game_code": "8cadf51f3bab6ca1d1351e39920f0cd0",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/DHDXnnjG/Blackjack-VIP-N.png"
        },
        {
            "game_name": "Blackjack VIP Q",
            "game_code": "694ea4e8c2bc49bb69c0c113a29e5c18",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/wZzX1jNT/Blackjack-VIP-Q.png"
        },
        {
            "game_name": "Blackjack VIP M",
            "game_code": "bee49a234fcb2ed9547b9e1562953f35",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/99Wdp65q/Blackjack-VIP-M.png"
        },
        {
            "game_name": "Blackjack VIP O",
            "game_code": "4134e22ef51602a341306df756ee8f2c",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/20kZkGfY/Blackjack-VIP-O.png"
        },
        {
            "game_name": "Blackjack VIP I",
            "game_code": "2703c1a1340451d9f9d35904c721f7d6",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/k212MJfB/Blackjack-VIP-I.png"
        },
        {
            "game_name": "Blackjack VIP K",
            "game_code": "ce84d2072af4db522109e3e349bec9c9",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/tp0SCFkd/Blackjack-VIP-K.png"
        },
        {
            "game_name": "Blackjack VIP J",
            "game_code": "bd5be8139f01f6719bdd15b92e005523",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/1Gdn2Rzm/Blackjack-VIP-J.png"
        },
        {
            "game_name": "Blackjack VIP L",
            "game_code": "2d2e7afef9695e9cf82be87a08f28d23",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/rKFtdyKj/Blackjack-VIP-L.png"
        },
        {
            "game_name": "Blackjack VIP H",
            "game_code": "fe2e28180d600b1dfc7784324d3df640",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/8w0B57Z/Blackjack-VIP-H.png"
        },
        {
            "game_name": "Blackjack VIP E",
            "game_code": "2c2f06025f65fe745cabd81a3aae8aba",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/QjkXpwS3/Blackjack-VIP-E.png"
        },
        {
            "game_name": "Blackjack VIP G",
            "game_code": "40273c03c2a48786cb6111e35f012e6b",
            "game_type": "CasinoLive",
            "game_image": "https://i.ibb.co.com/5X9dBGJ2/Blackjack-VIP-G.png"
        }


    ]


}
const sexybcrt = {
    platform: 'live',
    provider: 'sexybcrt',
    games: [

        {
            game_name: 'Baccarat Classic',
            game_code: 'a225b3ced269ae6545ce3750bcb15175',
            game_type: 'CasinoLive',
            game_image: 'https://i.ibb.co.com/M516xq8R/S-02-Baccarat-Classic.png'
        },
        {
            game_name: 'Baccarat',
            game_code: 'e2b258c3076709d5bef791b5031b7bd2',
            game_type: 'CasinoLive',
            game_image: 'https://i.ibb.co.com/HD7mncPy/S-03-Baccarat.png'
        },
        {
            game_name: 'DragonTiger',
            game_code: '5956fee9c7e1524f0e6310e75a368c81',
            game_type: 'CasinoLive',
            game_image: 'https://i.ibb.co.com/cKVbwFRk/S-04-Dragon-Tiger.png'
        },
        {
            game_name: 'Roulette',
            game_code: 'ab22f33340fac5c424ba87c259204002',
            game_type: 'CasinoLive',
            game_image: 'https://i.ibb.co.com/DDyytg4y/S-05-Roulette.png'
        },


        {
            game_name: 'Thai Hi Lo',
            game_code: '2d5b06cf3cc2aa86777523de7df46a78',
            game_type: 'CasinoLive',
            game_image: 'https://i.ibb.co.com/xqD0L5kn/S-08-Thai-Hi-Lo.png'
        },
        {
            game_name: 'Thai Fish Prawn Crab',
            game_code: '3b504cf69d3b581436eecc82eef54c4c',
            game_type: 'CasinoLive',
            game_image: 'https://i.ibb.co.com/YBfmkTCn/S-09-Thai-Fish-Prawn-Crab.png'
        },
        {
            game_name: 'Extra Sicbo',
            game_code: '828afebe8ddb20b96b670e471262c3d1',
            game_type: 'CasinoLive',
            game_image: 'https://i.ibb.co.com/Zp3X5B8C/S-10-Extra-Sicbo.png'
        },
        {
            game_name: 'Sedie',
            game_code: 'a203874299381060b2c91fa169799031',
            game_type: 'CasinoLive',
            game_image: 'https://i.ibb.co.com/whXS4B1D/S-11-Sedie.png'
        },


    ]


}

const pragmatic = {
    platform: "digital",
    provider: "pragmatic",
    games: [
        { game_name: "Gem Fire Fortune", game_code: "8a0b30eb466a8a07027cbddc19369d0f", game_type: "Slot Game", game_image: "https://i.ibb.co.com/60DhzhkF/code-PPA-01-Gem-Fire-Fortune.png" },
        { game_name: "Wild West Gold Blazing Bounty", game_code: "91cd6233551cd56e70d900794ed728e3", game_type: "Slot Game", game_image: "https://i.ibb.co.com/vb8GsnW/code-PPA-02-Wild-West-Gold-Blazing-Bounty.png" },
        { game_name: "Finger Lick’n Free Spins", game_code: "aa861b71cc3c5dbab1fd7073d5c1c452", game_type: "Slot Game", game_image: "https://i.ibb.co.com/6R8zWD1N/code-PPA-03-Finger-Lick-n-Free-Spins.png" },
        { game_name: "Gold Party 2 – After Hours", game_code: "e1d2da140286507e851fde1cb2fdd4ba", game_type: "Slot Game", game_image: "https://i.ibb.co.com/661JkQ8/code-PPA-04-Gold-Party-2-After-Hours.png" },
        { game_name: "Temple Guardians", game_code: "d333e6e0316422a0d5ffb7eae28fd3b7", game_type: "Slot Game", game_image: "https://i.ibb.co.com/ycQnSWqB/code-PPA-05-Temple-Guardians.png" },
        { game_name: "Big Bass Boxing Bonus Round", game_code: "0b6df3ffc8f38d0e39fccee31e1edf2b", game_type: "Slot Game", game_image: "https://i.ibb.co.com/C52qdbkJ/code-PPA-06-Big-Bass-Boxing-Bonus-Round.png" },
        { game_name: "Mummy’s Jewels", game_code: "f30340fa76609f5220055eae27ab881e", game_type: "Slot Game", game_image: "https://i.ibb.co.com/2312vvZR/code-PPA-001-Mummy-s-Jewels.jpg" },
        { game_name: "Gates of Hades", game_code: "5eaf8bc24222d8245734ec57cde23bc3", game_type: "Slot Game", game_image: "https://i.ibb.co.com/9mfhYcr4/code-PPA-08-Gates-of-Hades.png" },
        { game_name: "Slime Pop", game_code: "e763129659cb5ec4d4a0393f3236dd38", game_type: "Slot Game", game_image: "https://i.ibb.co.com/6c9ZBRvp/code-PPA-09-Slime-Pop.png" },
        { game_name: "Eye of Spartacus", game_code: "94c536991cca6e6df70a30c7e1d896cc", game_type: "Slot Game", game_image: "https://i.ibb.co.com/dwjR29v9/code-PPA-10-Eye-of-Spartacus.png" },
        { game_name: "Mahjong Wins Super Scatter", game_code: "259ad8e105ef217dad404bffe0fff257", game_type: "Slot Game", game_image: "https://i.ibb.co.com/YFZgRxNV/code-PPA-11-Mahjong-Wins-Super-Scatter.png" },
        { game_name: "Majestic Express - Gold Run", game_code: "ba642e78eca4b9ac43f1a56f8c824705", game_type: "Slot Game", game_image: "https://i.ibb.co.com/TD4VYMdP/code-PPA-12-Majestic-Express-Gold-Run.png" },
        { game_name: "Resurrecting Riches", game_code: "dec331c52aade0f61e5f7dd4bbedfde9", game_type: "Slot Game", game_image: "https://i.ibb.co.com/PzJhWgjv/code-PPA-13-Resurrecting-Riches.png" },
        { game_name: "Jumbo Safari", game_code: "223147051fc0a47a6d90ebe3e3a0e9c6", game_type: "Slot Game", game_image: "https://i.ibb.co.com/ZzT2Bvyq/code-PPA-14-Jumbo-Safari.png" },
        { game_name: "Sleeping Dragon", game_code: "4a67372025a83767178a6c5fc6c4c8d4", game_type: "Slot Game", game_image: "https://i.ibb.co.com/NgWgsgs4/code-PPA-15-Sleeping-Dragon.png" },
        { game_name: "Fiesta Fortune", game_code: "fc263087951d1b7406c8a2f3bbedc363", game_type: "Slot Game", game_image: "https://i.ibb.co.com/QvLp30xS/code-PPA-16-Fiesta-Fortune.png" },
        { game_name: "Witch Heart Megaways", game_code: "a47148d4858a7f4599dfc00c68a2c141", game_type: "Slot Game", game_image: "https://i.ibb.co.com/V0LZssPz/code-PPA-17-Witch-Heart-Megaways.png" },
        { game_name: "Gates of Olympus Super Scatter", game_code: "880a68222d05a3697055d523d574cb2b", game_type: "Slot Game", game_image: "https://i.ibb.co.com/QFHRG75f/code-PPA-18-Gates-of-Olympus-Super-Scatter.png" },
        { game_name: "Cash Surge", game_code: "de109cef80306297f2a7522a5283dd18", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Z3nyLrP/code-PPA-19-Cash-Surge.png" },
        { game_name: "Sweet Cherry Blossom", game_code: "ce6fefa0eb82fd4a3f069827ce4f5e25", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Kj8fW18g/code-PPA-20-Sweet-Cherry-Blossom.png" },
        { game_name: "Big Bass Bonanza 1000", game_code: "00d1836f3a1200cb6754a61be4c39160", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Nd8Py7rg/code-PPA-21-Big-Bass-Bonanza-1000.png" },
        { game_name: "5 Lions Reborn", game_code: "b00d127ba0c5f8439f94646887f1fd4d", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Yqt9hhJ/code-PPA-22-5-Lions-Reborn.png" },
        { game_name: "Ride The Lightning", game_code: "4a6be4b9aeb053d692a649db586d7e56", game_type: "Slot Game", game_image: "https://i.ibb.co.com/HD1hF6CB/code-PPA-23-Ride-The-Lightning.png" },
        { game_name: "Joker’s Jewels Cash", game_code: "fcb9a4dabb068f060d3701be9fc6a0f0", game_type: "Slot Game", game_image: "https://i.ibb.co.com/gMK1Fk19/code-PPA-536-Joker-s-Jewels.jpg" },
        { game_name: "Bandit Megaways", game_code: "de19dcca7f6fbfa5cc5807e786b6b617", game_type: "Slot Game", game_image: "https://i.ibb.co.com/TxVx5Dn4/code-PPA-25-Bandit-Megaways.png" },
        { game_name: "Fruit Party Dice", game_code: "365d741d1fecf08663e58016675d2a11", game_type: "Slot Game", game_image: "https://i.ibb.co.com/WW8qJ6Rr/code-PPA-26-Fruit-Party-Dice.jpg" },
        { game_name: "Blitz Super Wheel", game_code: "d1f8f611d448510a487271b818eabe2f", game_type: "Slot Game", game_image: "https://i.ibb.co.com/pjWKRtLL/code-PPA-27-Blitz-Super-Wheel.png" },
        { game_name: "Book of Monsters", game_code: "34cb1fb87c318a4923fc7b7b4e31d53e", game_type: "Slot Game", game_image: "https://i.ibb.co.com/mr7B8cyJ/code-PPA-28-Book-of-Monsters.png" },
        { game_name: "Triple Pot Gold", game_code: "241e7aaee249b053cb53f7f3e0edf578", game_type: "Slot Game", game_image: "https://i.ibb.co.com/cXNhDbHV/code-PPA-29-Triple-Pot-Gold.png" },
        { game_name: "The Dog House – Royal Hunt", game_code: "102fb01e01cbb7528c6ac803bbd9dd13", game_type: "Slot Game", game_image: "https://i.ibb.co.com/WNSTMMWR/code-PPA-711-The-Big-Dog-House.png" },
        { game_name: "Volcano Goddess", game_code: "276582955d8f162b3379939a3eb5b038", game_type: "Slot Game", game_image: "https://i.ibb.co.com/mVnNJ1Hs/code-PPA-31-Volcano-Goddess.png" },
        { game_name: "Lucky’s Wild Pub", game_code: "fbe795aa609d23d09688d82498d38f50", game_type: "Slot Game", game_image: "https://i.ibb.co.com/QF097ty4/code-PPA-690-Lucky-s-Wild-Pub-2.png" },
        { game_name: "Wild Wild Joker", game_code: "45a1f0f25c0b7c3ab56c1993f9e6e03b", game_type: "Slot Game", game_image: "https://i.ibb.co.com/0Vct6NR9/code-PPA-33-Wild-Wild-Joker.png" },
        { game_name: "Raging Waterfall Megaways", game_code: "497d313c846b303aa1aeea495a4a44b3", game_type: "Slot Game", game_image: "https://i.ibb.co.com/ymXWn5dH/code-PPA-034-Raging-Waterfall-Megaways.png" },
        { game_name: "Greedy Fortune Pig", game_code: "200d25646470d5cca20d0dd408d7957a", game_type: "Slot Game", game_image: "https://i.ibb.co.com/hFJBdW8S/code-PPA-35-Greedy-Fortune-Pig.png" },
        { game_name: "5 Lions Megaways 2", game_code: "30535756ecf42673db61eca89df50bc3", game_type: "Slot Game", game_image: "https://i.ibb.co.com/FqjksGRF/code-PPA-36-5-Lions-Megaways.png" },
        { game_name: "Peppe’s Pepperoni Pizza Plaza", game_code: "395891d339277b24073f5a1ca46cce3c", game_type: "Slot Game", game_image: "https://i.ibb.co.com/39Rxt0Nd/code-PPA-37-Peppe-s-Pepperoni-Pizza-Plaza.png" },
        { game_name: "Big Bass Return to the Races", game_code: "9f4e61bc4ef7ebffd8637dd1db5202f1", game_type: "Slot Game", game_image: "https://i.ibb.co.com/9kkq10Pk/code-PPA-38-Big-Bass-Return-to-the-Races.png" },
        { game_name: "Bigger Bass Splash", game_code: "1944eb208471b5dfd960f26e80cc3715", game_type: "Slot Game", game_image: "https://i.ibb.co.com/4nCQt77f/code-PPA-39-Bigger-Bass-Splash.png" },
        { game_name: "Savannah Legend", game_code: "69866a02334ebe58c3d69c0a4d59255a", game_type: "Slot Game", game_image: "https://i.ibb.co.com/zW9bTs05/code-PPA-40-Savannah-Legend.png" },
        { game_name: "John Hunter and Galileo’s Secrets", game_code: "0518b5e45a9953982e1c1e77206c2755", game_type: "Slot Game", game_image: "https://i.ibb.co.com/HfqyQ388/code-PPA-41-John-Hunter-and-Galileo-s-Secrets.png" },
        { game_name: "Ancient Island Megaways", game_code: "914c41ff6ce7c680e2a110d35420b1be", game_type: "Slot Game", game_image: "https://i.ibb.co.com/x8XLKcHf/code-PPA-42-Ancient-Island-Megaways.png" },
        { game_name: "Escape the Pyramid Fire & Ice", game_code: "ce7cd8d59599fec6326d5da24f9847ef", game_type: "Slot Game", game_image: "https://i.ibb.co.com/7xbgqrFZ/code-PPA-43-Escape-the-Pyramid-Fire-Ice.png" },
        { game_name: "Wild Wildebeest Wins", game_code: "5f096f82cd6cf67f3f3f030a0bb89542", game_type: "Slot Game", game_image: "https://i.ibb.co.com/V7sCsJm/code-PPA-44-Wild-Wildebeest-Wins.png" },
        { game_name: "Irish Crown", game_code: "3a6bb0239060b0acf471ab2671ca74db", game_type: "Slot Game", game_image: "https://i.ibb.co.com/p6vkcTpb/code-PPA-45-Irish-Crown.png" },
        { game_name: "Wild Wild Pearls", game_code: "69b91ecb2d7ba33c804ceba3ac81956a", game_type: "Slot Game", game_image: "https://i.ibb.co.com/1JGjsFT0/code-PPA-46-Wild-Wild-Pearls.png" },
        { game_name: "Aztec Gems Megaways", game_code: "ba3dc54ad1f451262910dda6c61001ce", game_type: "Slot Game", game_image: "https://i.ibb.co.com/LztG1YsW/code-PPA-47-Aztec-Gems-Megaways.png" },
        { game_name: "Mahjong Wins - Gong Xi Fa Cai", game_code: "022f71df2642ce42cec8d75be0ec4c59", game_type: "Slot Game", game_image: "https://i.ibb.co.com/j9v7yY5N/code-PPA-48-Mahjong-Wins-Gong-Xi-Fa-Cai.png" },
        { game_name: "Brick House Bonanza", game_code: "953182d14bc438f502e277812dc452c4", game_type: "Slot Game", game_image: "https://i.ibb.co.com/nNWkSxbG/code-PPA-49-Brick-House-Bonanza.png" },

    ],
};

const sabasport = {
    platform: "digital",
    provider: "sabasport",
    games: [
        { game_name: "SABA Sports", game_code: "08ced9dd788aed11ff3c7f387ae0f063", game_type: "Sports Game", game_image: "https://i.ibb.co.com/ym3yjKBg/SABA-001-SABA-Sports.png" },
        { game_name: "SABA Sports PHP", game_code: "bef536c0ee1fd3d0bd327fba605c70cc", game_type: "Sports Game", game_image: "https://i.ibb.co.com/prbbY6z4/saba-sports-php.webp" },
    ],
};
const playngo = {
    platform: "digital",
    provider: "playngo",
    games: [
        { game_name: "Sparky&Shortz", game_code: "50a248ea2542e62a1a796d2b1e121de6", game_type: "Slot Game", game_image: "https://i.ibb.co.com/8nrkKPzN/code-PG5-Sparky-Shortz.png" },
        { game_name: "Muerto en Mictlan", game_code: "f5a5294357d78653567c392b8f386bf6", game_type: "Slot Game", game_image: "https://i.ibb.co.com/fzXGJdyg/code-PG-244-Muerto-en-Mictl-n.png" },
        { game_name: "Beasts of Fire", game_code: "ad9c45d8bed86115afea828f362b1421", game_type: "Slot Game", game_image: "https://i.ibb.co.com/rGZFcZvN/code-PG7-Beasts-of-Fire.png" },
        { game_name: "Bull in a Rodeo", game_code: "790c55c939b8c4beb01a5a0fd9ab9268", game_type: "Slot Game", game_image: "https://i.ibb.co.com/zh0mskfd/code-PG8-Bull-in-a-Rodeo.png" },
        { game_name: "Tales of Asgard: Loki's Fortune", game_code: "e2b7db849dbf6fa77303ff05412d7ab9", game_type: "Slot Game", game_image: "https://i.ibb.co.com/cSQZKDnq/code-PG9-Tales-of-Asgard-Loki-s-Fortune.png" },
        { game_name: "Merlin and the Ice Queen Morgana", game_code: "82be129aa1a06d7cfa6cb8dfe68d2645", game_type: "Slot Game", game_image: "https://i.ibb.co.com/4RZP9VJy/code-PG10-Merlin-and-the-Ice-Queen-Morgana.png" },
        { game_name: "Cat Wilde and the Lost Chapter", game_code: "fe30f84e42e82fb4a31cffb271d73a51", game_type: "Slot Game", game_image: "https://i.ibb.co.com/prLwkJkv/code-PG11-Cat-Wilde-and-the-Lost-Chapter.png" },
        { game_name: "Gigantoonz", game_code: "8650281b7cb4e707acad09774b45b84a", game_type: "Slot Game", game_image: "https://i.ibb.co.com/399B718j/code-PG12-Gigantoonz.png" },
        { game_name: "Moon Princess: Christmas Kingdom", game_code: "ea6ee43262e53deb1990393fa9a06103", game_type: "Slot Game", game_image: "https://i.ibb.co.com/qMfWkNvQ/code-PG13-Moon-Princess-Christmas-Kingdom.png" },
        { game_name: "Love Joker", game_code: "dd40b1b10dc69ed698ebc55d3f0dc567", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Mx9Pjf4T/code-PG14-Love-Joker.png" },
        { game_name: "The Last Sundown", game_code: "99f0a52139f0e7a0af9117554f43536d", game_type: "Slot Game", game_image: "https://i.ibb.co.com/whJGXZSz/code-PG15-The-Last-Sundown.png" },
        { game_name: "15 Crystal Roses: A Tale of Love", game_code: "6b072dcb3eedf445e0260fc2d2e83316", game_type: "Slot Game", game_image: "https://i.ibb.co.com/BVHTzDMW/code-PG16-15-Crystal-Roses-A-Tale-of-Love.png" },
        { game_name: "Tale of Kyubiko", game_code: "bc82afddb6d24ef891f70d7b1c9a3106", game_type: "Slot Game", game_image: "https://i.ibb.co.com/mFtVMQJS/code-PG17-Tale-of-Kyubiko.png" },
        { game_name: "Rich Wilde and the Wandering City", game_code: "55510a4d01b521a72a7e20848e142bdf", game_type: "Slot Game", game_image: "https://i.ibb.co.com/gZ9LMjRv/code-PG18-Rich-Wilde-and-the-Wandering-City.png" },
        { game_name: "Captain Xeno's Earth Adventure", game_code: "a0b7345b4699ab37d93c8815e7d99d13", game_type: "Slot Game", game_image: "https://i.ibb.co.com/0WnNHqJ/code-PG19-Captain-Xeno-s-Earth-Adventure.png" },
        { game_name: "Hooligan Hustle", game_code: "8e3e1afd890266cb34e2a8994bd38ed2", game_type: "Slot Game", game_image: "https://i.ibb.co.com/7tJ19PbQ/code-PG20-Hooligan-Hustle.png" },
        { game_name: "Raging Rex 2", game_code: "9cf7b04a911896e8e13aac62ef1682ba", game_type: "Slot Game", game_image: "https://i.ibb.co.com/kVmfB979/code-PG21-Raging-Rex-2.png" },
        { game_name: "Safari of Wealth", game_code: "278389ee41407bab6092e388257346b9", game_type: "Slot Game", game_image: "https://i.ibb.co.com/6Jr17Rr8/code-PG22-Safari-of-Wealth.png" },
        { game_name: "Secret of Dead", game_code: "ea30e0dc6c93bc21459f7c45a371ab91", game_type: "Slot Game", game_image: "https://i.ibb.co.com/8LJ93GxK/code-PG23-Secret-of-Dead.png" },
        { game_name: "Tales of Asgard: Freya's Wedding", game_code: "a2942bb4945ef9b8170acf713177a721", game_type: "Slot Game", game_image: "https://i.ibb.co.com/DPLcst1D/code-PG24-Tales-of-Asgard-Freya-s-Wedding.png" },
        { game_name: "Puebla Parade", game_code: "824a43d254bf89ebec0c2e3800713a35", game_type: "Slot Game", game_image: "https://i.ibb.co.com/0j0g1xGP/code-PG25-Puebla-Parade.png" },
        { game_name: "Moon Princess 100", game_code: "b723f5238f1ff6816c725c0ecb400c67", game_type: "Slot Game", game_image: "https://i.ibb.co.com/jkbs3Ns3/code-PG26-Moon-Princess-100.png" },
        { game_name: "Idol of Fortune", game_code: "ba6566bce43702a5398decb1fcc01b59", game_type: "Slot Game", game_image: "https://i.ibb.co.com/j94jPCx1/code-PG27-Idol-of-Fortune.png" },
        { game_name: "Forge of Gems", game_code: "0932ea849be274ff5ae4da3a7c44cffa", game_type: "Slot Game", game_image: "https://i.ibb.co.com/qFsmFNbC/code-PG28-Forge-of-Gems.png" },
        { game_name: "Fat Frankies", game_code: "d9da996edfe9cd68b32fd2e7cde00fd4", game_type: "Slot Game", game_image: "https://i.ibb.co.com/vvht1HRC/code-PG29-Fat-Frankies.png" },
        { game_name: "Eye of Atum", game_code: "62766fe321045f1637fcbd925ad1fb63", game_type: "Slot Game", game_image: "https://i.ibb.co.com/JjLScXQF/code-PG30-Eye-of-Atum.png" },
        { game_name: "Animal Madness", game_code: "4d322fc10f41306a221c63df5ac84500", game_type: "Slot Game", game_image: "https://i.ibb.co.com/207V3WJW/code-PG31-Animal-Madness.png" },
        { game_name: "Cash of Command", game_code: "09a2d876c28540cf122bba072f8ffb16", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Ymp9xhy/code-PG32-Cash-of-Command.png" },
        { game_name: "Cat Wilde and the Pyramids of Dead", game_code: "9a1a83e60432df6c05c17b6c09a1d7aa", game_type: "Slot Game", game_image: "https://i.ibb.co.com/39sVSvMf/code-PG33-Cat-Wilde-and-the-Pyramids-of-Dead.png" },
        { game_name: "Champions of Mithrune", game_code: "65587840ef2d8d3b90c6f1cd19d278f2", game_type: "Slot Game", game_image: "https://i.ibb.co.com/MknVWM8F/code-PG34-Champions-of-Mithrune.png" },
        { game_name: "Charlie Chance and the Curse of Cleopatra", game_code: "f3883d409c9125e3781faddab0d09ee3", game_type: "Slot Game", game_image: "https://i.ibb.co.com/HTt1qVmQ/code-PG35-Charlie-Chance-and-the-Curse-of-Cleopatra.png" },
        { game_name: "Derby Wheel", game_code: "b92f03933a0b2ddb75f1055cbcfa0ac5", game_type: "Slot Game", game_image: "https://i.ibb.co.com/N2Q592Gd/code-PG36-Derby-Wheel.png" },
        { game_name: "Forge of Fortunes", game_code: "acb0775f641f765421de58f48a4a4de0", game_type: "Slot Game", game_image: "https://i.ibb.co.com/8D5kVVLc/code-PG37-Forge-of-Fortunes.png" },
        { game_name: "Fortune Rewind", game_code: "a56191619b35626ad2e62ced9e840173", game_type: "Slot Game", game_image: "https://i.ibb.co.com/HDRkVDqN/code-PG38-Fortune-Rewind.png" },
        { game_name: "Gates of Troy", game_code: "1f33db1a0f4ca4699dd7cdb427f2b57a", game_type: "Slot Game", game_image: "https://i.ibb.co.com/VcMMyfFk/code-PG39-Gates-of-Troy.png" },
        { game_name: "Immortails of Egypt", game_code: "c9c6e4e64cb322cbdf4488f110ab577a", game_type: "Slot Game", game_image: "https://i.ibb.co.com/N6sxxqbx/code-PG40-Immortails-of-Egypt.png" },
        { game_name: "King's Mask", game_code: "0dbcfb1dae8c1ca0f6adcb37abad5318", game_type: "Slot Game", game_image: "https://i.ibb.co.com/hFScLLY9/code-PG41-King-s-Mask.png" },
        { game_name: "Leprechaun's Vault", game_code: "18bdfc9546627412b6f9e1c00343589c", game_type: "Slot Game", game_image: "https://i.ibb.co.com/yDKZZX8/code-PG42-Leprechaun-s-Vault.png" },
        { game_name: "Mega Don", game_code: "14acbf2ef6569c68794675241665bd28", game_type: "Slot Game", game_image: "https://i.ibb.co.com/DHxfXsjz/code-PG43-Mega-Don.png" },
        { game_name: "Merlin's Grimoire", game_code: "d20b52e4181bb272739d66ae00c6d809", game_type: "Slot Game", game_image: "https://i.ibb.co.com/LdSLNC6r/code-PG44-Merlin-s-Grimoire.png" },
        { game_name: "Mount M", game_code: "687aacc4e3d7812942c26cc04af557ff", game_type: "Slot Game", game_image: "https://i.ibb.co.com/c521LjY/code-PG45-Mount-M.png" },
        { game_name: "Rise of Gods: Reckoning", game_code: "79f20a8b34c76f3614ebb59473f7a680", game_type: "Slot Game", game_image: "https://i.ibb.co.com/C5JLP4j9/code-PG46-Rise-of-Gods-Reckoning.png" },
        { game_name: "Rocco Gallo", game_code: "06a472c2a59b35ff0ae92254770e778f", game_type: "Slot Game", game_image: "https://i.ibb.co.com/9kZ2sMBX/code-PG47-Rocco-Gallo.png" },
        { game_name: "Rotiki", game_code: "547cfdbb534bf30e8f139c2c177db55a", game_type: "Slot Game", game_image: "https://i.ibb.co.com/xtVTtzqS/code-PG48-Rotiki.png" },
        { game_name: "Wild Trigger", game_code: "229a79586252112eea2c2bee0e3ce2e2", game_type: "Slot Game", game_image: "https://i.ibb.co.com/ZbDSSsg/code-PG49-Wild-Trigger.png" },
        { game_name: "The Shimmering Woods", game_code: "796e07a02452f884c2b02a95699560e0", game_type: "Slot Game", game_image: "https://i.ibb.co.com/ns9nSyjP/code-PG50-The-Shimmering-Woods.png" },
        { game_name: "Rich Wilde & The Shield of Athena", game_code: "1b3cbdd3d76e5673712ab7f9eb2535e3", game_type: "Slot Game", game_image: "https://i.ibb.co.com/TqN6KqJX/code-PG51-Rich-Wilde-The-Shield-of-Athena.png" },
        { game_name: "Rabbit Hole Riches - Court of Hearts", game_code: "118791235917848fe0f1642177f17421", game_type: "Slot Game", game_image: "https://i.ibb.co.com/c02tXfz/code-PG52-Rabbit-Hole-Riches-Court-of-Hearts.png" },
        { game_name: "Pack & Cash", game_code: "03b37d93b45d616adbd11ca392618a6e", game_type: "Slot Game", game_image: "https://i.ibb.co.com/JN7XRJy/code-PG53-Pack-Cash.png" },
        { game_name: "Xmas Magic", game_code: "15ab10c0b440c230a656f827394f6cab", game_type: "Slot Game", game_image: "https://i.ibb.co.com/1GkgjrBZ/code-PG54-Xmas-Magic.png" },
        { game_name: "Xmas Joker", game_code: "9150986fe0151f255531e0d4dd18fb8d", game_type: "Slot Game", game_image: "https://i.ibb.co.com/6RNXv9HC/code-PG55-Xmas-Joker.png" }
    ],
};
//new
const fachai = {
    platform: "digital",
    provider: "fachai",
    games: [
        { game_name: "GODS GRANT FORTUNE", game_code: "46816b28e0fbcf25d3e01c389510af70", game_type: "Fish Game", game_image: "https://i.ibb.co.com/ymTx1ZTL/code-21009-GODS-GRANT-FORTUNE.jpg" },
        { game_name: "EGYPT BONANZA", game_code: "0b506916e1b001c6eb121fb834e09ada", game_type: "Slot Game", game_image: "https://img.b112j.com/upload/game/AWCV2_FC/BDT/FC-SLOT-035.png?v=1778347228687" },
        { game_name: "GO GO RISE", game_code: "2d1c2e84556060e33e1f4f8b419c5b3a", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/Y7HM9Px8/code-27008-GO-GO-RISE.jpg" },
        { game_name: "LEGEND OF INCA", game_code: "c7b9fdd6e1e633485c67c1db2dc57406", game_type: "Slot Game", game_image: "https://img.b112j.com/upload/game/AWCV2_FC/BDT/FC-SLOT-034.png?v=1778347228529" },
        { game_name: "NIGHT MARKET 2", game_code: "3e3b0ba086c839b394220152951c6d25", game_type: "Slot Game", game_image: "https://img.b112j.com/upload/game/AWCV2_FC/BDT/FC-SLOT-032.png?v=1778347228213" },
        { game_name: "STAR HUNTER", game_code: "9272bfd25844c3a1373614a457392084", game_type: "Fish Game", game_image: "https://i.ibb.co.com/n9tP6cg/code-21008-STAR-HUNTER.jpg" },
        { game_name: "CHINESE NEW YEAR", game_code: "c7ea70b0a6c39e2235610b057e0c6621", game_type: "Slot Game", game_image: "https://img.b112j.com/upload/game/AWCV2_FC/BDT/FC-SLOT-043.png?v=1778347230430" },
        { game_name: "CHINESE NEW YEAR 2", game_code: "6468b1e08cc2132f3c8e7e7d4c619c53", game_type: "Slot Game", game_image: "https://img.b112j.com/upload/game/AWCV2_FC/BDT/FC-SLOT-043.png?v=1778347230430" },
        { game_name: "NIGHT MARKET", game_code: "9198e4319ced66e3f3dac17c8d36fad8", game_type: "Slot Game", game_image: "https://img.b112j.com/upload/game/AWCV2_FC/BDT/FC-SLOT-004.png?v=1778347223242" },
        { game_name: "LUCKY FORTUNES", game_code: "6940313357dd1ec127bb2203f9ae8e6c", game_type: "Slot Game", game_image: "https://img.b112j.com/upload/game/AWCV2_FC/BDT/FC-SLOT-021.png?v=1778347226084" },
        { game_name: "GOLDEN GENIE", game_code: "7b81c1c65363a4c9bf89d8064a41f56a", game_type: "Slot Game", game_image: "https://img.b112j.com/upload/game/AWCV2_FC/BDT/FC-SLOT-046.png?v=1759492919737" },
        { game_name: "SUGAR BANG BANG", game_code: "69f7770ee6c9b2eb5756652833b84092", game_type: "Slot Game", game_image: "https://img.b112j.com/upload/game/AWCV2_FC/BDT/FC-SLOT-025.png?v=1778347226760" },
        { game_name: "MONKEY KING FISHING", game_code: "9900afb8cdc3016a34ef00ad563b3293", game_type: "Fish Game", game_image: "https://i.ibb.co.com/wFRP5CSB/code-21003-MONKEY-KING-FISHING.jpg" },
        { game_name: "COWBOYS", game_code: "2ea85e851818778e2ed4317c9982e54a", game_type: "Slot Game", game_image: "https://i.ibb.co.com/cSKvTjC6/code-22029-COWBOYS.jpg" },
        { game_name: "ZEUS", game_code: "da0d973cee506257c900d18375883f2c", game_type: "Slot Game", game_image: "https://i.ibb.co.com/27bfPxc8/code-22049-ZEUS.jpg" },
        { game_name: "GRAND BLUE", game_code: "2ed381e03765549d45617e7ed48fc37d", game_type: "Slot Game", game_image: "https://i.ibb.co.com/67HV8SQt/code-22037-GRAND-BLUE.jpg" },
        { game_name: "RICH MAN", game_code: "0a462387fe3c636324c5d9041a39c94c", game_type: "Slot Game", game_image: "https://i.ibb.co.com/R4tvQsTR/code-22036-RICH-MAN.jpg" },
        { game_name: "GOLDEN PANTHER", game_code: "60df04ad04885d74510d4c06e05919aa", game_type: "Slot Game", game_image: "https://i.ibb.co.com/tpSY6bYq/code-22016-GOLDEN-PANTHER.jpg" },
        { game_name: "FIERCE FISHING", game_code: "0b25331b95eabc71b962d8b85681e37d", game_type: "Fish Game", game_image: "https://i.ibb.co.com/0p3Dgm11/code-21006-FIERCE-FISHING.jpg" },
        { game_name: "MONEY TREE DOZER", game_code: "d031266666b559fef858205fe12bb1ef", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/mVtM0dVb/code-27001-MONEY-TREE-DOZER.jpg" },
        { game_name: "MAGIC BEANS", game_code: "b628cd862301d9bd73e70b944a2b3c11", game_type: "Slot Game", game_image: "https://i.ibb.co.com/cSj6L5Dj/code-22032-MAGIC-BEANS.jpg" },
        { game_name: "MERGE MAGIC", game_code: "9735225d268562198fc5079a36e6b6fe", game_type: "Slot Game", game_image: "https://i.ibb.co.com/wZBH8pvy/code-22045-MERGE-MAGIC.jpg" },
        { game_name: "TREASURE RAIDERS", game_code: "c56cfddb7bdbc6bbb517a643803f3121", game_type: "Slot Game", game_image: "https://img.b112j.com/upload/game/AWCV2_FC/BDT/FC-SLOT-065.png?v=1781251907164" },
        { game_name: "BAO CHUAN FISHING", game_code: "e896288c157bc846234d254d03b083f1", game_type: "Fish Game", game_image: "https://i.ibb.co.com/zVHNtgH7/code-21004-BAO-CHUAN-FISHING.jpg" },
        { game_name: "SUPER ELEMENTS", game_code: "756fbfeac906e1e78e49ee74fa20b367", game_type: "Slot Game", game_image: "https://img.b112j.com/upload/game/AWCV2_FC/BDT/FC-SLOT-049.png?v=1781256805249" },
        { game_name: "ROBIN HOOD", game_code: "17184971ad9e01777cb2c06465f479fb", game_type: "Slot Game", game_image: "https://img.b112j.com/upload/game/AWCV2_FC/BDT/FC-SLOT-020.png?v=1778347225914" },
        { game_name: "CRAZY BUFFALO", game_code: "e5a2c89d257b68a1c2855e00e76bc934", game_type: "Slot Game", game_image: "https://img.b112j.com/upload/game/AWCV2_FC/BDT/FC-SLOT-026.png?v=1778347226937" },
        { game_name: "FORTUNE KOI", game_code: "1d45e05527b049177d2f55aeb8a26e44", game_type: "Slot Game", game_image: "https://i.ibb.co.com/PsNPpTY6/code-22022-FORTUNE-KOI.jpg" },
        { game_name: "TREASURE CRUISE", game_code: "be44b0154904b119fa44cde7debcb82e", game_type: "Slot Game", game_image: "https://i.ibb.co.com/jvCwRcvS/code-22028-TREASURE-CRUISE.jpg" },
        { game_name: "WIN WIN NEKO", game_code: "9951f259f97eb5202a590284848e4592", game_type: "Slot Game", game_image: "https://i.ibb.co.com/JRtgw5XB/code-22050-WIN-WIN-NEKO.jpg" },
        { game_name: "LUXURY GOLDEN PANTHER", game_code: "d1d5678c7f936d93221b0abf470d9c6d", game_type: "Slot Game", game_image: "https://i.ibb.co.com/7xmcw0km/code-22030-LUXURY-GOLDEN-PANTHER.jpg" },
        { game_name: "PONG PONG HU", game_code: "5476c4b6b6cc56a28ebcc836dc550df4", game_type: "Slot Game", game_image: "https://i.ibb.co.com/N2rMtZ3W/code-22021-PONG-PONG-HU.jpg" },
        { game_name: "GOLD RUSH", game_code: "efe01092d040cafc980e6ff266a661f6", game_type: "Slot Game", game_image: "https://i.ibb.co.com/vvJJkfd6/code-22034-GOLD-RUSH.jpg" },
        { game_name: "FORTUNE EGG", game_code: "93fe7c6e8ec4fba41eec4cc52aa03308", game_type: "Slot Game", game_image: "https://i.ibb.co.com/0VFNKjPT/code-22051-FORTUNE-EGG.jpg" },
        { game_name: "THREE LITTLE PIGS", game_code: "d8135aaf7a26d46c5f05811b470fd882", game_type: "Slot Game", game_image: "https://i.ibb.co.com/ycCjjHwB/code-22017-THREE-LITTLE-PIGS.jpg" },
        { game_name: "LIGHTNING BOMB", game_code: "56c52aafb2a426512e1d9319e39525d0", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/N6gtM906/code-27005-LIGHTNING-BOMB.jpg" },
        { game_name: "ANIMAL RACING", game_code: "a1c4af9556716238cc206142191601a3", game_type: "Slot Game", game_image: "https://img.b112j.com/upload/game/AWCV2_FC/BDT/FC-SLOT-011.png?v=1778347224414" },
        { game_name: "SUPER COLOR GAME", game_code: "6a15165043642df7c8f15b81955ec6bd", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/99qNxX5Y/code-27007-Super-Color-Game.jpg" },
        { game_name: "HOT POT PARTY", game_code: "1c5a69caf9e2f1736eab4e7989f0ed0f", game_type: "Slot Game", game_image: "https://i.ibb.co.com/twkvmcPd/code-22026-HOT-POT-PARTY.jpg" },
        { game_name: "GLORY OF ROME", game_code: "74d2c49fa6db0aaa0f21f572e853977f", game_type: "Slot Game", game_image: "https://i.ibb.co.com/fVf056nM/code-22038-GLORY-OF-ROME.jpg" },
        { game_name: "PANDA DRAGON BOAT", game_code: "82ee456817c94ee4277c5656b02fe3bf", game_type: "Slot Game", game_image: "https://i.ibb.co.com/V0TCkNQj/code-22019-PANDA-DRAGON-BOAT.jpg" },
        { game_name: "DA LE MEN", game_code: "c71b42d70137fc20da8106e2543a3775", game_type: "Slot Game", game_image: "https://i.ibb.co.com/4RskWYf2/code-22023-DA-LE-MEN.jpg" },
        { game_name: "CIRCUS DOZER", game_code: "5567159cfbb33c82c406384533ffb9d6", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/MxZ9ZmZ3/code-27002-CIRCUS-DOZER.jpg" },
        { game_name: "WAR OF THE UNIVERSE", game_code: "303e0dd2081ecb6fb4f834f3223bfd1f", game_type: "Slot Game", game_image: "https://i.ibb.co.com/zW0qMGN9/code-22031-WAR-OF-THE-UNIVERSE.jpg" },
        { game_name: "FA CHAI DOZER", game_code: "ab53133d196c47e91376d9e82e7d5280", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/tTxfC4T6/code-27003-FA-CHAI-DOZER.jpg" },
        { game_name: "HAPPY DUO BAO", game_code: "9da31e3ea32029b6221b423390f78d14", game_type: "Slot Game", game_image: "https://i.ibb.co.com/pvFbtSv5/code-22027-HAPPY-DUO-BAO.jpg" },
        { game_name: "LUCKY 9", game_code: "4de0c305e78b77ab9b3714138299a36d", game_type: "Table Game", game_image: "https://i.ibb.co.com/ds1jW4DS/code-28001-Lucky-9.jpg" },
        { game_name: "FA CHAI FISHING", game_code: "04666c8536a1ae5e7a86a4c019fed992", game_type: "Fish Game", game_image: "https://i.ibb.co.com/3mPmNsZ3/code-21007-FA-CHAI-FISHING.jpg" },
        { game_name: "CHILIHUAHUA", game_code: "b677323f4bfb14e28a2df679d946993b", game_type: "Slot Game", game_image: "https://i.ibb.co.com/tMfxn84N/code-22059-CHILIHUAHUA.jpg" },
        { game_name: "BOXING RICHES", game_code: "f7ea01c4cc69ad2990c2a1f69394f08b", game_type: "Slot Game", game_image: "https://i.ibb.co.com/99XkncgV/code-22065-BOXING-RICHES.jpg" },
        { game_name: "POKER WIN", game_code: "acbb123948d98dd0745c0876b236812b", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Ndc2GYV6/code-22095-POKER-WIN-2.jpg" },
        { game_name: "CHINESE NEW YEAR MOREWAYS", game_code: "c9a9e3b6325ff66ea33134e5b59d85d6", game_type: "Slot Game", game_image: "https://i.ibb.co.com/tpMPjqZp/code-22064-CHINESE-NEW-YEAR-MOREWAYS.jpg" },
        { game_name: "ROMA GLADIATRIX", game_code: "0816f874c3158d7015a94be92179df71", game_type: "Slot Game", game_image: "https://i.ibb.co.com/BVYb0GP3/code-22066-ROMA-GLADIATRIX.jpg" },
        { game_name: "FORTUNE GODDESS", game_code: "1180fe0cde1d83f307d3db95883123d8", game_type: "Slot Game", game_image: "https://i.ibb.co.com/s91nJvgZ/code-22057-FORTUNE-GODDESS.jpg" },
        { game_name: "QUEEN OF INCA", game_code: "b2e0b41e9e4892e3133e8109830a8bfa", game_type: "Slot Game", game_image: "https://i.ibb.co.com/KBq0yxV/code-22063-QUEEN-OF-INCA.jpg" },
        { game_name: "FORTUNE MONEY BOOM", game_code: "a7969767da0317b91b1d79c9645beefd", game_type: "Slot Game", game_image: "https://i.ibb.co.com/YFVxN9Zc/code-22058-FORTUNE-MONEY-BOOM.jpg" },
        { game_name: "LUCKY FORTUNES 3x3", game_code: "8fb374c36918b49d6d3cf4c5acca8f11", game_type: "Slot Game", game_image: "https://i.ibb.co.com/0RQjdfRV/code-22061-LUCKY-FORTUNES-3x3.jpg" },
        { game_name: "FORTUNE SHEEP", game_code: "cce3ee2271788268012af054ded9d193", game_type: "Slot Game", game_image: "https://i.ibb.co.com/svng9V8J/code-22062-FORTUNE-SHEEP.jpg" },
        { game_name: "MINES", game_code: "9f01a3aaa2f517416c0e25fae5e4aab6", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/JFpFTwmS/code-27009-MINES.jpg" },
        { game_name: "SUGAR BANG BANG 2", game_code: "a9356b06b10d45430c8c5e39c1495161", game_type: "Slot Game", game_image: "https://i.ibb.co.com/1fHckKDd/code-22071-SUGAR-BANG-BANG-2.jpg" },
        { game_name: "PHOENIX FEVER", game_code: "890af0346fa60480f0ff6c6b3235569e", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Ld7WHv0R/code-22072-PHOENIX-FEVER.jpg" },
        { game_name: "JUNGLE BANG BANG", game_code: "a1e8f49f643c3a1aa264970f14e646e0", game_type: "Slot Game", game_image: "https://i.ibb.co.com/DDMcXctg/code-22084-JUNGLE-BANG-BANG.jpg" },
        { game_name: "TREASURES OF ODIN", game_code: "db0c45f4fc7a2a106b886e89e6ba8945", game_type: "Slot Game", game_image: "https://i.ibb.co.com/YTWTNJmp/code-22067-TREASURES-OF-ODIN.jpg" },
        { game_name: "PHOENIX FEVER JACKPOT", game_code: "5226f45579695a40088b2c221f4d8e1f", game_type: "Slot Game", game_image: "https://i.ibb.co.com/5xkpXW0R/code-22073-PHOENIX-FEVER-JACKPOT.jpg" },
        { game_name: "BUFFALO WAYS", game_code: "b86dfd1a8ca545ac50c6147ca48a2223", game_type: "Slot Game", game_image: "https://i.ibb.co.com/nMhLKS1c/code-22069-BUFFALO-WAYS.jpg" },
        { game_name: "SWORD OF KING", game_code: "f543a0a6fa08d8468239adea2ed9f134", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Cs4CCq75/code-22075-SWORD-OF-KING.jpg" }


    ]
    ,
};
const eazygaming = {
    platform: "digital",
    provider: "eazygaming",
    games: [
        { game_name: "Witch's Love", game_code: "730934d13092e3f9e7c23f2a774e663a", game_type: "Slot Game", game_image: "https://i.ibb.co.com/gLRBMPYL/EG001-Witch-s-Love.png" },
        { game_name: "Neko Maid", game_code: "177977776019fe295e1fa61383400b92", game_type: "Slot Game", game_image: "https://i.ibb.co.com/FLxhhzks/EG002-Neko-Maid.png" },
        { game_name: "Adventure Of Sinbad", game_code: "4349ce1ba0fc4c1c794a11d18d7ba94b", game_type: "Slot Game", game_image: "https://i.ibb.co.com/0yMC6CrQ/EG003-Adventure-Of-Sinbad.png" },
        { game_name: "G-idol", game_code: "c86ff6fdb3e91db1b7d110d58a778a74", game_type: "Slot Game", game_image: "https://i.ibb.co.com/SDML4JsR/EG004-G-idol.png" },
        { game_name: "Goal Line Baby", game_code: "364805284c56dc5888fd21e73be3dda2", game_type: "Slot Game", game_image: "https://i.ibb.co.com/9kvxYwc9/EG005-Goal-Line-Baby.png" },
        { game_name: "Miss Holmes: Cold Case", game_code: "045efa0ecf10c2d171f93db6c1e2e75c", game_type: "Slot Game", game_image: "https://i.ibb.co.com/M58CHw8x/EG006-Miss-Holmes-Cold-Case.png" },
        { game_name: "Kitsune Sister", game_code: "70c6ce3e01e79c019a9bd68522826993", game_type: "Slot Game", game_image: "https://i.ibb.co.com/pjQVZHFH/EG007-Kitsune-Sister.png" },
        { game_name: "Queen Of Casino", game_code: "b84161166710f1ab3223421c92b406cb", game_type: "Slot Game", game_image: "https://i.ibb.co.com/xKpmCVvg/EG008-Queen-Of-Casino.png" },
        { game_name: "Streaming Girl", game_code: "bf89fbb9dbef22224b3da74f6654e1a5", game_type: "Slot Game", game_image: "https://i.ibb.co.com/zWyrxH7H/EG009-Streaming-Girl.png" },
        { game_name: "Dim Sum Hottie", game_code: "920fe25ea07729a287c668216bdfc256", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Lzj34Z3W/EG010-Dim-Sum-Hottie.png" },
        { game_name: "Goddess Wonderland", game_code: "9d18644a1c6951932f0b7ced77ff0f49", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Q70dQ7ny/EG011-Goddess-Wonderland.png" },
        { game_name: "Napoleon", game_code: "422b086bd63d28be3e812dbb7736b9b8", game_type: "Slot Game", game_image: "https://i.ibb.co.com/BVrhcp2v/EG012-Napoleon.png" },
        { game_name: "Tron: Century", game_code: "35c52efe2c5618e5bc3bdf47d5da1dd2", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Z1M2LdHS/EG013-Tron-Century.png" },
        { game_name: "Glory of Poseidon", game_code: "357e66a063eb207b7d5d9b841b313801", game_type: "Slot Game", game_image: "https://i.ibb.co.com/qffpjBh/EG014-Glory-of-Poseidon.png" },
        { game_name: "Beauty SPA", game_code: "4f000007fa6a15bfe51d1ce1766e57b7", game_type: "Slot Game", game_image: "https://i.ibb.co.com/LXrZQPnS/EG015-Beauty-SPA.png" },
        { game_name: "Bikini Revelry", game_code: "66c29ee5ba8641cd859a8f139142402e", game_type: "Slot Game", game_image: "https://i.ibb.co.com/S70bz2F1/EG016-Bikini-Revelry.png" },
        { game_name: "Money tree", game_code: "77336e5f3488be53a2851df9ce46e738", game_type: "Slot Game", game_image: "https://i.ibb.co.com/s9T5nzhj/EG017-Money-tree.png" }
    ]
    ,
};
const bggaming = {
    platform: "digital",
    provider: "bggaming",
    games: [
        { game_name: "Catdiana", game_code: "384b3a3daaea2fa88474b0ada8ad1ef2", game_type: "Slot Game", game_image: "https://i.ibb.co.com/PzVX52WD/code-B01-Catdiana.jpg" },
        { game_name: "Dice Clash", game_code: "46ffd224ee8960ceb02d5d7cb6c3ec88", game_type: "Dice Game", game_image: "https://i.ibb.co.com/N6TYTXHg/code-B02-Dice-Clash.jpg" },
        { game_name: "Snoop Dogg Dollars", game_code: "42c10ec14f7bed81dd8948bcc9ff3d79", game_type: "Slot Game", game_image: "https://i.ibb.co.com/k2fCDTN1/code-B03-Snoop-Dogg-Dollars.png" },
        { game_name: "Forgotten", game_code: "5692803026f0040a9d205b5f2859303d", game_type: "Slot Game", game_image: "https://i.ibb.co.com/VWXZg6m6/code-B04-Forgotten.jpg" },
        { game_name: "Rotating Element", game_code: "312e294c95f438e0c2a53edc16f42dd1", game_type: "Slot Game", game_image: "https://i.ibb.co.com/qY8pWwLb/code-B05-Rotating-Element.jpg" },
        { game_name: "Haunted Reels", game_code: "acf9940b57dfc5c17dae1683546254f8", game_type: "Slot Game", game_image: "https://i.ibb.co.com/DD1c6WcW/code-B06-Haunted-Reels.jpg" },
        { game_name: "Carnival Bonanza", game_code: "3872e9e145ed83caabc13a45fb731eaa", game_type: "Slot Game", game_image: "https://i.ibb.co.com/4Zft6dQj/code-B07-Carnival-Bonanza.jpg" },
        { game_name: "Aztec's Claw Wild Dice", game_code: "107be31f7f1acd063a3848d9ab8faaab", game_type: "Slot Game", game_image: "https://i.ibb.co.com/9m1SxYF2/code-B08-Aztec-s-Claw-Wild-Dice.jpg" },
        { game_name: "Fortuna TRUEWAYS", game_code: "096cff957fbb194d2b6600af093d32bb", game_type: "Slot Game", game_image: "https://i.ibb.co.com/wFC1zhcp/code-B09-Fortuna-TRUEWAYS.jpg" },
        { game_name: "Voodoo People", game_code: "362714f8384ac625c50da8def330e897", game_type: "Slot Game", game_image: "https://i.ibb.co.com/V1FdZPx/code-B10-Voodoo-People.jpg" },
        { game_name: "Top Eagle", game_code: "2eceb69abe28088ebd587e3d20e42132", game_type: "Crash Game", game_image: "https://i.ibb.co.com/ZpFXkMbM/code-B11-Top-Eagle.jpg" },
        { game_name: "Royal Fruits MultiLines", game_code: "9c85548c5a5682fb75b97d93f9bf6ba1", game_type: "Slot Game", game_image: "https://i.ibb.co.com/9ScXPcp/code-B12-Royal-Fruits-Multi-Lines.jpg" },
        { game_name: "Robospin", game_code: "21dbf27bf1926124b306bc5659c47883", game_type: "Casual Game", game_image: "https://i.ibb.co.com/whnnqhSc/code-B13-Robospin.jpg" },
        { game_name: "Train to Rio Grande", game_code: "7d9fcac036458ee987df0963fa23fbe0", game_type: "Slot Game", game_image: "https://i.ibb.co.com/5XKsFmjY/code-B14-Train-to-Rio-Grande.jpg" },
        { game_name: "Kraken's Hunger", game_code: "f798b5e34e30ec1d707bbad93275de66", game_type: "Slot Game", game_image: "https://i.ibb.co.com/7d7TDJrG/code-B15-Kraken-s-Hunger.jpg" },
        { game_name: "Mine Gems", game_code: "caf101eea60fb8976d2b08cbc4ac57db", game_type: "Casual Game", game_image: "https://i.ibb.co.com/RpZsbCzd/code-B16-Mine-Gems.jpg" },
        { game_name: "Catch the Gold Hold and Win", game_code: "c15396a5ca8b7bb0336d9823e7d70599", game_type: "Slot Game", game_image: "https://i.ibb.co.com/TxKdBZWF/code-B17-Catch-the-Gold-Hold-and-Win.jpg" },
        { game_name: "Street Power", game_code: "c1bde325f7f9ebb6dd8eb8bdc2701e89", game_type: "Casual Game", game_image: "https://i.ibb.co.com/fzxW8WrL/code-B18-Street-Power.jpg" },
        { game_name: "Wild West TRUEWAYS", game_code: "29b092dc73646c8ad1e68a89160e837c", game_type: "Slot Game", game_image: "https://i.ibb.co.com/tTnRpzpJ/code-B19-Wild-West-TRUEWAYS.jpg" },
        { game_name: "Secret Bar Multidice X", game_code: "de10c5031eba2a70c3ef056df6a301a0", game_type: "Slot Game", game_image: "https://i.ibb.co.com/HpNMxFYK/code-B20-Secret-Bar-Multidice-X.jpg" },
        { game_name: "Gold Magnate", game_code: "4330b56250e3e12d42a333a54cf53252", game_type: "Slot Game", game_image: "https://i.ibb.co.com/fYv3Wn9N/code-B21-Gold-Magnate.jpg" },
        { game_name: "Grand Patron", game_code: "1de21a609d4ff294a2dcf5b54f11247e", game_type: "Slot Game", game_image: "https://i.ibb.co.com/5hfvNsjf/code-B22-Grand-Patron.jpg" },
        { game_name: "Aviamasters", game_code: "d3c7985229b2e4651fa7889445a5bfd8", game_type: "Casual Game", game_image: "https://i.ibb.co.com/3YyKcTJJ/code-B23-Aviamasters.jpg" },

        { game_name: "Dragon Age Hold & Win (Dragon Age)", game_code: "300cc204eb151ef25e59a5ae5e30bc35", game_type: "Slot Game", game_image: "https://i.ibb.co.com/yn2Bq9vN/code-B25-Dragon-Age-Hold-Win-Dragon-Age.jpg" },
        { game_name: "Fishing Club", game_code: "1a6331cb34de981ca1e88592ef06c752", game_type: "Casual Game", game_image: "https://i.ibb.co.com/6JsD8zdm/code-B26-Fishing-Club.jpg" },
        { game_name: "Gold of Minos", game_code: "33017959e334dc1c7b0b1b5436951838", game_type: "Slot Game", game_image: "https://i.ibb.co.com/4ZLRDQ4d/code-B27-Gold-of-Minos.jpg" },
        { game_name: "Panda Luck", game_code: "ae09663fb727565cc8754b6b33637b4d", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Jj5L2wdB/code-B28-Panda-Luck.jpg" },
        { game_name: "Chicken Rush", game_code: "7df9dde49a097fe9b62222ba12f606df", game_type: "Slot Game", game_image: "https://i.ibb.co.com/9mXdcD67/code-B29-Chicken-Rush.jpg" },
        { game_name: "Luck & Magic Scratch", game_code: "ef0998245805a6a32a910a6667ad7c6c", game_type: "Scratch cards", game_image: "https://i.ibb.co.com/5XqsYJZM/code-B30-Luck-Magic-Scratch.jpg" },
        { game_name: "OOF The Goldmine Planet", game_code: "96da7b41a5092a2ba6d80c02d54d8e4e", game_type: "Slot Game", game_image: "https://i.ibb.co.com/KPS6ZCg/code-B31-OOF-The-Goldmine-Planet.jpg" },
        { game_name: "Lucky Dragon MultiDice X", game_code: "1f580513685cdfd29b3c6cd1493211a8", game_type: "Slot Game", game_image: "https://i.ibb.co.com/mV6d078J/code-B32-Lucky-Dragon-Multi-Dice-X.jpg" },
        { game_name: "3 Kings Scratch", game_code: "206b98759b35412a1ecf0cc0fa42b29a", game_type: "Scratch cards", game_image: "https://i.ibb.co.com/d46sxKwz/code-B33-3-Kings-Scratch.jpg" },
        { game_name: "Diamond of Jungle", game_code: "163940b133daf4662a23ac3642698eea", game_type: "Slot Game", game_image: "https://i.ibb.co.com/93h5pL3L/code-B34-Diamond-of-Jungle.jpg" },
        { game_name: "Dragon's Crash", game_code: "fc81d13da9be4741f1897b7142c1e43a", game_type: "Crash Game", game_image: "https://i.ibb.co.com/zhyJHVBc/code-B35-Dragon-s-Crash.jpg" },
        { game_name: "Lucky 8 Merge Up", game_code: "e8a2fedff5f5941e2ebebf6cb8ae10f1", game_type: "Slot Game", game_image: "https://i.ibb.co.com/nsyPpptd/code-B36-Lucky-8-Merge-Up.jpg" },
        { game_name: "Pop Zen", game_code: "fe31a3383c140b2389eec2c09b95f641", game_type: "Slot Game", game_image: "https://i.ibb.co.com/d0NzbzN0/code-B37-Pop-Zen.jpg" },
        { game_name: "Aztec Clusters", game_code: "ebdc5bc54ce398aa8d1a7466a4e68d21", game_type: "Slot Game", game_image: "https://i.ibb.co.com/1tNtPyGB/code-B38-Aztec-Clusters.jpg" },
        { game_name: "Wild Heart", game_code: "9ea3ced80f0706d9d6d25994092b3cd4", game_type: "Slot Game", game_image: "https://i.ibb.co.com/prGKgGQ9/code-B39-Wild-Heart.jpg" },
        { game_name: "God of Wealth Hold And Win", game_code: "0a8bae754cd2dba41b5998fcce9d5b37", game_type: "Slot Game", game_image: "https://i.ibb.co.com/N2M0QtjV/code-B40-God-of-Wealth-Hold-And-Win.jpg" },
        { game_name: "Keepers Of The Secret", game_code: "e85b9a6b6d7bf1f41ba0e4a320585d62", game_type: "Slot Game", game_image: "https://i.ibb.co.com/qLsW3x6s/code-B41-Keepers-Of-The-Secret.jpg" },
        { game_name: "Wild Tiger", game_code: "a1de8d30de1e8795221e0cbcea462141", game_type: "Slot Game", game_image: "https://i.ibb.co.com/8hZqjPn/code-B42-Wild-Tiger.jpg" },
        { game_name: "Capymania Green", game_code: "1709447d71bc8e313f35ba35b0033845", game_type: "Scratch cards", game_image: "https://i.ibb.co.com/20P3DtQx/code-B43-Capymania-Green.jpg" },
        { game_name: "Capymania Orange", game_code: "02207f5732e5b39e0c1fbe435ebb1b26", game_type: "Scratch cards", game_image: "https://i.ibb.co.com/3yTv89SV/code-B44-Capymania-Orange.jpg" },
        { game_name: "Capymania Yellow", game_code: "7e4b004c6fc0c64537050447e2965ef9", game_type: "Scratch cards", game_image: "https://i.ibb.co.com/Vp3Wk1Kn/code-B45-Capymania-Yellow.jpg" },
        { game_name: "Hottest 666", game_code: "9568278f10bfbb78253db073bb816e4f", game_type: "Slot Game", game_image: "https://i.ibb.co.com/zV93VVhS/code-B46-Hottest-666.jpg" },
        { game_name: "Gemza", game_code: "3f61a021f0d55f041ff714d16bc4ac17", game_type: "Slot Game", game_image: "https://i.ibb.co.com/nF5b3NL/code-B47-Gemza.jpg" },
        { game_name: "Ice Scratch Bronze", game_code: "e51c959e79559583f491fcfea1ab68b7", game_type: "Scratch cards", game_image: "https://i.ibb.co.com/ynGhfThB/code-B48-Ice-Scratch-Bronze.jpg" },
        { game_name: "Ice Scratch Gold", game_code: "a01aa8b7e5d3058d109db68af8ac4bd0", game_type: "Scratch cards", game_image: "https://i.ibb.co.com/8D9FmwLw/code-B49-Ice-Scratch-Gold.jpg" },
        { game_name: "Ice Scratch Silver", game_code: "b596d059279938f1ab74ed3eaeebdc8e", game_type: "Scratch cards", game_image: "https://i.ibb.co.com/600SYBDy/code-B50-Ice-Scratch-Silver.jpg" },
        { game_name: "Slot Machine", game_code: "2ade52905d4104a302def8149910b664", game_type: "Slot Game", game_image: "https://i.ibb.co.com/nNPg7GZz/code-B51-Slot-Machine.jpg" },
        { game_name: "Gift X", game_code: "e0a7754ad24321587b40915d6f391070", game_type: "Crash Game", game_image: "https://i.ibb.co.com/Vc0MYBRB/code-B52-Gift-X.jpg" },
        { game_name: "Tramp Day", game_code: "0c8fffd494b172256607a79ec4fb7acd", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Vcb2Rwkc/code-B53-Tramp-Day.jpg" },
        { game_name: "Book of Panda Megaways", game_code: "81c648af2d38be5fd6bd735f672f35b6", game_type: "Slot Game", game_image: "https://i.ibb.co.com/pvjqJ27r/code-B54-Book-of-Panda-Megaways.jpg" },
        { game_name: "Mummy's Gold", game_code: "4afaea9e17bbc75d26d92cc7c7d2ec65", game_type: "Slot Game", game_image: "https://i.ibb.co.com/hJShsK7s/code-B55-Mummy-s-Gold.jpg" },
        { game_name: "Merge Up", game_code: "22aeab95aef5b3f01b7b7f563dc36ac7", game_type: "Slot Game", game_image: "https://i.ibb.co.com/SF4xrk2/code-B56-Merge-Up.jpg" },
        { game_name: "Scratch Alpaca Bronze", game_code: "8664b8269de1a8b4a91d45fb375bcfb0", game_type: "Scratch cards", game_image: "https://i.ibb.co.com/90SC2VW/code-B57-Scratch-Alpaca-Bronze.jpg" },
        { game_name: "Scratch Alpaca Gold", game_code: "a584912bbe94b034018b3f7dc9794d9e", game_type: "Scratch cards", game_image: "https://i.ibb.co.com/WWG11KpX/code-B58-Scratch-Alpaca-Gold.jpg" },
        { game_name: "Scratch Alpaca Silver", game_code: "58e06f5e2ce49a695a51e1636f4095bf", game_type: "Scratch cards", game_image: "https://i.ibb.co.com/ksSN4fFy/code-B59-Scratch-Alpaca-Silver.jpg" },
        { game_name: "Monster Hunt", game_code: "eff2df94539988f3468e687a7d7cea30", game_type: "Slot Game", game_image: "https://i.ibb.co.com/J9SfGrP/code-B60-Monster-Hunt.jpg" },
        { game_name: "Mice & Magic Wonder Spin", game_code: "0ccaaa45143d186f7ef3311989bb018a", game_type: "Slot Game", game_image: "https://i.ibb.co.com/CKjxFkF6/code-B61-Mice-Magic-Wonder-Spin.jpg" },
        { game_name: "Bone Bonanza", game_code: "7d05837c55942cf0f36e2597b7e0ae76", game_type: "Slot Game", game_image: "https://i.ibb.co.com/N6QYz66t/code-B62-Bone-Bonanza.jpg" },
        { game_name: "Maneki 88 Fortunes", game_code: "05d6232a3336a2b4bb2ee83b4b6bcf7d", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Z6DBmTWd/code-B63-Maneki-88-Fortunes.jpg" },
        { game_name: "Wild Cash Dice", game_code: "94783ae2695c2546da00bec3213fcfa0", game_type: "Slot Game", game_image: "https://i.ibb.co.com/SwjmDt7H/code-B64-Wild-Cash-Dice.jpg" },
        { game_name: "Savage Buffalo Spirit Megaways", game_code: "042f069ea08ab7fb50af2027b2d93725", game_type: "Slot Game", game_image: "https://i.ibb.co.com/DfK5NRkv/code-B65-Savage-Buffalo-Spirit-Megaways.jpg" }
    ]
    ,
};
const km = {
    platform: "digital",
    provider: "km",
    games: [
        { game_name: "Penguin Panic", game_code: "1c9a1b9147a04994c899faec87fb1352", game_type: "Table Game", game_image: "https://i.ibb.co.com/99c31q9q/KM-61-Penguin-Panic.jpg" },
        { game_name: "Video Poker", game_code: "dd4d960875be77bde1dfdc481a3495bc", game_type: "Table Game", game_image: "https://i.ibb.co.com/fVNCBfsS/KM-62-Video-Poker.jpg" },
        { game_name: "Gold Mine", game_code: "c73eccc34c692f336f2332e927f13055", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Txz8s3zd/KM-63-Gold-Mine.jpg" },
        { game_name: "Toon Crash", game_code: "a92698b9cbec7f355870466602810ca7", game_type: "Table Game", game_image: "https://i.ibb.co.com/nNDC1Md1/KM-64-Toon-Crash.jpg" },
        { game_name: "Iron Dome", game_code: "93c356f0911addcd4282f1d1af2fa329", game_type: "Table Game", game_image: "https://i.ibb.co.com/P3fVjQ4/KM-65-Iron-Dome.jpg" },
        { game_name: "Almighty Greek", game_code: "78b5bd93dabb9ab681eeb002bbe78188", game_type: "Slot Game", game_image: "https://i.ibb.co.com/WvsQZ9Kg/KM-66-Almighty-Greek.jpg" },
        { game_name: "Warriors Temple", game_code: "d03ef012d9f545cb7ad3eb37be85baf8", game_type: "Slot Game", game_image: "https://i.ibb.co.com/fdb19CdF/KM-67-Warriors-Temple.jpg" },
        { game_name: "Dice Duet", game_code: "eb638dc43fd5762889eb1fc6e5d22ecc", game_type: "Table Game", game_image: "https://i.ibb.co.com/CKGtS1PL/KM-68-Dice-Duet.jpg" },
        { game_name: "Gold Rush Bonanza", game_code: "81a64237f0d2522e7d5e27461de12fd9", game_type: "Slot Game", game_image: "https://i.ibb.co.com/SX00pPd0/KM-69-Gold-Rush-Bonanza.jpg" },
        { game_name: "Leppy's Loot", game_code: "1fd7dbe78a8d3912ce28a2fc63f488a9", game_type: "Slot Game", game_image: "https://i.ibb.co.com/mrRQmzGq/KM-70-Leppy-s-Loot.jpg" },
        { game_name: "Egyptian Mines", game_code: "0cfd7e0901a2cb99bb8fe47eeab8215b", game_type: "Table Game", game_image: "https://i.ibb.co.com/BHtwGPnx/KM-71-Egyptian-Mines.jpg" },
        { game_name: "Jogo De Bozo", game_code: "1d821c77f169f85f876e87de54625887", game_type: "Table Game", game_image: "https://i.ibb.co.com/PJ7Qzmc/KM-72-Jogo-De-Bozo.jpg" },
        { game_name: "Hippo Splash", game_code: "cc9fdac6d38d79bb564762baabe099ce", game_type: "Slot Game", game_image: "https://i.ibb.co.com/60KNGdmH/KM-73-Hippo-Splash.jpg" },
        { game_name: "Pirate's Tresure", game_code: "40133e6572603484d3406f126f00d1e4", game_type: "Slot Game", game_image: "https://i.ibb.co.com/3mmYZMTh/KM-74-Pirate-s-Tresure.jpg" },
        { game_name: "Piggy Heist", game_code: "e793bc96c7aad22833422292a8f7aac4", game_type: "Slot Game", game_image: "https://i.ibb.co.com/LDp2HZPT/KM-75-Piggy-Heist.jpg" },
        { game_name: "Merlin's Saga", game_code: "d1f8fcf6194114917664af0d7ad95c4a", game_type: "Slot Game", game_image: "https://i.ibb.co.com/LXcPDdxB/KM-76-Merlin-s-Saga.jpg" },
        { game_name: "London Mystery", game_code: "d17c382283f61b126abac9453bcbbd09", game_type: "Slot Game", game_image: "https://i.ibb.co.com/xSFVQ7sx/KM-77-London-Mystery.jpg" },
        { game_name: "Horus Glory", game_code: "8740d016de45d10bc39a0a049994f7f1", game_type: "Slot Game", game_image: "https://i.ibb.co.com/zTdctbW8/KM-78-Horus-Glory.jpg" },
        { game_name: "Ladder Game", game_code: "b0db27d1892defd4614614fc826329e8", game_type: "Table Game", game_image: "https://i.ibb.co.com/4Rq6tnSx/KM-79-Ladder-Game.jpg" },
        { game_name: "Cupid Archery", game_code: "cb833139d14364862e77260931bfa6da", game_type: "Slot Game", game_image: "https://i.ibb.co.com/d45SnVDs/KM-80-Cupid-Archery.jpg" },
        { game_name: "Rome Gladiator", game_code: "6da4413a7bf4413316fe1ea84a6a2c66", game_type: "Slot Game", game_image: "https://i.ibb.co.com/bjGzG93Y/KM-81-Rome-Gladiator.jpg" },
        { game_name: "Bicho", game_code: "8bffb2e1429e5cc41a3f25b499eabf10", game_type: "Table Game", game_image: "https://i.ibb.co.com/bMqKwTpz/KM-82-Bicho.jpg" },
        { game_name: "Burmese 6 Animals", game_code: "43c6b5b2f3a61a9556dd553d4853cb94", game_type: "Table Game", game_image: "https://i.ibb.co.com/v4Bsfm0y/KM-83-Burmese-6-Animals.jpg" },
        { game_name: "Hunk Cai Shen", game_code: "2c7ac8a392c7b4803a88f9162733bc52", game_type: "Slot Game", game_image: "https://i.ibb.co.com/5Xh9mqhk/KM-84-Hunk-Cai-Shen.jpg" },
        { game_name: "Speedy Andar Bahar", game_code: "140fe97d0f6d5e9ca713e957acf1dcc5", game_type: "Table Game", game_image: "https://i.ibb.co.com/9931pDyY/KM-85-Speedy-Andar-Bahar.jpg" },
        { game_name: "Magic Pearls", game_code: "2653300fa50048f58a09e9e0b451f3cd", game_type: "Slot Game", game_image: "https://i.ibb.co.com/kV6WdV1y/KM-86-Magic-Pearls.webp" },
        { game_name: "Captain Loot", game_code: "ddb7802958863d7fa280e7e358fcfefa", game_type: "Slot Game", game_image: "https://i.ibb.co.com/whT0C6Fc/KM-87-Captain-Loot.jpg" },
        { game_name: "Chicken Crossy", game_code: "14807d064afec4b00c845c8b5fdb6351", game_type: "Table Game", game_image: "https://i.ibb.co.com/BKwMQnbB/KM-88-Chicken-Crossy.jpg" },
        { game_name: "Teen Patti Blitz", game_code: "5ee137ab91ce7d519f7d1b3618114ec5", game_type: "Table Game", game_image: "https://i.ibb.co.com/bMGMK90D/KM-89-Teen-Patti-Blitz.jpg" },
        { game_name: "7 Up 7 Down Rush", game_code: "662abe294b44bf77c8cc6c162e3489d8", game_type: "Table Game", game_image: "https://i.ibb.co.com/n256PDv/KM-90-7-Up-7-Down-Rush.jpg" },
        { game_name: "Dear Senpai", game_code: "9a3dacc2bc68cb90da67a4a263588a63", game_type: "Slot Game", game_image: "https://i.ibb.co.com/MQ9v5pk/KM-91-Dear-Senpai.jpg" },
        { game_name: "Money Wheel Deluxe", game_code: "dad4dca903d6af9c1785026d95cc2ed8", game_type: "Table Game", game_image: "https://i.ibb.co.com/LX10JyK5/KM-92-Money-Wheel-Deluxe.jpg" },
        { game_name: "Thai Fish Prawn Crab GO", game_code: "f9772d5dcb593d0a5d2a7859da54fc07", game_type: "Table Game", game_image: "https://i.ibb.co.com/23vWgnh9/KM-93-Thai-Fish-Prawn-Crab-GO.jpg" },
        { game_name: "Mahjong Beauty", game_code: "45305555854c69d9893ee79c054a4785", game_type: "Slot Game", game_image: "https://i.ibb.co.com/GvvT034x/KM-94-Mahjong-Beauty.jpg" },
        { game_name: "Samba Rhapsody", game_code: "d25b3461c5db0791ed8d9cf1f8267400", game_type: "Slot Game", game_image: "https://i.ibb.co.com/TBcM7WHk/KM-95-Samba-Rhapsody.jpg" },
        { game_name: "Vietnam Rock Paper Scissors", game_code: "3f3f876b0174d3b15199a47ea6d58477", game_type: "Table Game", game_image: "https://i.ibb.co.com/3gLTD1J/KM-97-Vietnam-Rock-Paper-Scissors.jpg" },
        { game_name: "Lucky Cat Gala", game_code: "3e2b0af4d1bc8b604f5aae6c86f4a058", game_type: "Table Game", game_image: "https://i.ibb.co.com/7tqK5w24/KM-98-Lucky-Cat-Gala.jpg" },
        { game_name: "Bai Cao Mystic Four", game_code: "4cc0fe20507910e4e309dc579285ba03", game_type: "Table Game", game_image: "https://i.ibb.co.com/zKxwL6S/KM-99-Bai-Cao-Mystic-Four.jpg" },
        { game_name: "Teen Patti Versus", game_code: "a4e49ce1e39785211a649d7cb4d75b67", game_type: "Table Game", game_image: "https://i.ibb.co.com/ktVyS3b/KM-100-Teen-Patti-Versus.jpg" }
    ]
    ,
};
const relaxgaming = {
    platform: "digital",
    provider: "relaxgaming",
    games: [
        { game_name: "6 Wild Sharks", game_code: "202715df7fed47121496ead87f777c70", game_type: "Slot Game", game_image: "https://i.ibb.co.com/35qHhM3g/RG-03-6-Wild-Sharks.png" },
        { game_name: "Alice In Adventureland", game_code: "a84f48e5a30029420528ba6915312f71", game_type: "Slot Game", game_image: "https://i.ibb.co.com/gLCYkQWG/RG-04-Alice-In-Adventureland.png" },
        { game_name: "Attila The Hun", game_code: "6e942b33c944fbfd0199e9c651e22307", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Cs3ydrKV/RG-05-Attila-The-Hun.png" },
        { game_name: "Aurora", game_code: "9963ea2cace07152fc4e625e9a83afa0", game_type: "Slot Game", game_image: "https://i.ibb.co.com/0zWvsny/RG-06-Aurora.png" },
        { game_name: "Aztec Luck", game_code: "1ad257ba975e7bf8c867704ecdd21c3b", game_type: "Slot Game", game_image: "https://i.ibb.co.com/99Sp0ZyL/1026-GOLDEN-AZTEC.jpg" },
        { game_name: "Beast Mode", game_code: "c8b928e2c00fa0f2f5ca2a6447da3612", game_type: "Slot Game", game_image: "https://i.ibb.co.com/G462m6zd/RG-08-Beast-Mode.png" },
        { game_name: "Book of 99", game_code: "24f01721a5c9d5420ac3b4af7939233e", game_type: "Slot Game", game_image: "https://i.ibb.co.com/HLsYNWhJ/RG-09-Book-of-99.png" },
        { game_name: "Book of Destiny", game_code: "9cc73530b2250a5686ce9232d4e1de49", game_type: "Slot Game", game_image: "https://i.ibb.co.com/MDJr9vg3/RG-10-Book-of-Destiny.png" },
        { game_name: "Boost it", game_code: "5df4f9668ec1f6bafb0280e5f925fd58", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Ds0sCsr/RG-11-Boost-it.png" },
        { game_name: "Bounty Showdown", game_code: "f37ce10de227223f41453582bcc28cfe", game_type: "Slot Game", game_image: "https://i.ibb.co.com/1YNTFhfK/RG-12-Bounty-Showdown.png" },
        { game_name: "Caravan of Riches", game_code: "07b6b170f5d6670dea0b33a90281af1e", game_type: "Slot Game", game_image: "https://i.ibb.co.com/JWyV7f3J/RG-13-Caravan-of-Riches.png" },
        { game_name: "Caveman Bob", game_code: "cac55ca05f276e2d367f1f1c07e91350", game_type: "Slot Game", game_image: "https://i.ibb.co.com/3YN8NPh2/RG-14-Caveman-Bob.png" },
        { game_name: "Chip Spin", game_code: "f5791cec452ebbeb3befd12b7c27314a", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Gf7m4MN5/RG-15-Chip-Spin.png" },
        { game_name: "Christmas Santa", game_code: "1a8eacb9ffdf18a1b8023fcc85c8f30b", game_type: "Slot Game", game_image: "https://i.ibb.co.com/TD8nTnxt/RG-16-Christmas-Santa.png" },
        { game_name: "Clover Fortunes", game_code: "07e7ab86bc0801442c43eff99a232bd6", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Q31DjKkV/RG-17-Clover-Fortunes.png" },
        { game_name: "Cluster Tumble", game_code: "276031cf4c6d182ac0dde2440de4ff2c", game_type: "Slot Game", game_image: "https://i.ibb.co.com/vCwq99g5/RG-18-Cluster-Tumble.png" },
        { game_name: "Crystal Golem", game_code: "7963b3addd926a73a599b881ec906d72", game_type: "Slot Game", game_image: "https://i.ibb.co.com/vC9NV6wn/RG-19-Crystal-Golem.png" },
        { game_name: "Dead Man's Trail", game_code: "7c74df7ff8eb3196300d4ef2b105b8a1", game_type: "Slot Game", game_image: "https://i.ibb.co.com/ZpP2RtgS/RG-20-Dead-Man-s-Trail.png" },
        { game_name: "Deep Descent", game_code: "0894cec481afaea1c85b66992b548591", game_type: "Slot Game", game_image: "https://i.ibb.co.com/4RcVrTqX/RG-21-Deep-Descent.png" },
        { game_name: "Desert Shark", game_code: "d83293f698af234801bac20dc508b866", game_type: "Slot Game", game_image: "https://i.ibb.co.com/jcb07L5/RG-22-Desert-Shark.png" },
        { game_name: "Dragons Awakening", game_code: "60ab472ffaf7edc0655cd0bd531ad16b", game_type: "Slot Game", game_image: "https://i.ibb.co.com/ns2rdLmd/RG-23-Dragons-Awakening.png" },
        { game_name: "Electric Wilds", game_code: "7ad2ddf6fef9d7bb637f7868148d0f60", game_type: "Slot Game", game_image: "https://i.ibb.co.com/66BRqLj/RG-24-Electric-Wilds.png" },
        { game_name: "Elemento", game_code: "b2ce225ef2b7e333efd00173f323f33e", game_type: "Slot Game", game_image: "https://i.ibb.co.com/N6wXRcf9/RG-25-Elemento.png" },
        { game_name: "Emerald's Infinity Reels", game_code: "94dcdcb04587ab7aca0b0a20549f659e", game_type: "Slot Game", game_image: "https://i.ibb.co.com/HDvtBfb5/RG-26-Emerald-s-Infinity-Reels.png" },
        { game_name: "Epic Joker", game_code: "8475f301c0bcb3773e5ab2c34619c091", game_type: "Slot Game", game_image: "https://i.ibb.co.com/pjvZDFbX/RG-27-Epic-Joker.png" },
        { game_name: "Erik the Red", game_code: "83de38637d1f14bba830c242fa8617a2", game_type: "Slot Game", game_image: "https://i.ibb.co.com/rKMVpjSD/RG-28-Erik-the-Red.png" },
        { game_name: "Flower Fortunes Supreme", game_code: "c9cd62edbd4bc5bb38955436b62aad7b", game_type: "Slot Game", game_image: "https://i.ibb.co.com/PZmrBh2f/RG-29-Flower-Fortunes-Supreme.png" },
        { game_name: "Frequent Flyer", game_code: "e81cea750f7152af7d71982dbc567f3c", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Rkz47SZX/RG-30-Frequent-Flyer.png" },
        { game_name: "Fruit Strike", game_code: "10fa8ebebb936f67b806412decd7057f", game_type: "Slot Game", game_image: "https://i.ibb.co.com/7Nb6QTSz/RG-31-Fruit-Strike.png" },
        { game_name: "Golden Castle", game_code: "da55439845c3eaebe4aafe77b15c3dd9", game_type: "Slot Game", game_image: "https://i.ibb.co.com/h1FpwpYP/RG-32-Golden-Castle.png" },
        { game_name: "Golden Gods", game_code: "b2d996b091f292f5d51f386ba74909b0", game_type: "Slot Game", game_image: "https://i.ibb.co.com/WW6g7248/RG-33-Golden-Gods.png" },
        { game_name: "Hazakura Ways", game_code: "86929be84fe1f0d67913a8960ed15fd0", game_type: "Slot Game", game_image: "https://i.ibb.co.com/FbrKDtJm/RG-34-Hazakura-Ways.png" },
        { game_name: "Helios Fury", game_code: "747b8549ea241d6894c6ed81ba3aa3bc", game_type: "Slot Game", game_image: "https://i.ibb.co.com/TMP3G9Kx/RG-35-Helios-Fury.png" },
        { game_name: "Hellcatraz", game_code: "a21c9e64ecadb4ac2ef6591b2d25e721", game_type: "Slot Game", game_image: "https://i.ibb.co.com/q36100Lm/RG-36-Hellcatraz.png" },
        { game_name: "Heroe's Gathering", game_code: "1041cc7ee268d01bef9167b2750a79d3", game_type: "Slot Game", game_image: "https://i.ibb.co.com/2YC0Zbgq/RG-37-Heroe-s-Gathering.png" },
        { game_name: "Heroes Hunt 2", game_code: "61f666c39f980c8f502904fd33385942", game_type: "Slot Game", game_image: "https://i.ibb.co.com/hJvzpsv4/RG-38-Heroes-Hunt-2.png" },
        { game_name: "HEX", game_code: "b83138c16ca5b9f17eec6c56898a9d38", game_type: "Slot Game", game_image: "https://i.ibb.co.com/99htdXjh/RG-39-HEX.png" },
        { game_name: "Ignite The Night", game_code: "bc0292df2bf187a78230ffac3da03fc0", game_type: "Slot Game", game_image: "https://i.ibb.co.com/844g2PgL/RG-40-Ignite-The-Night.png" },
        { game_name: "Iron Bank", game_code: "e4ca777001c387d1d0f72afc1685675b", game_type: "Slot Game", game_image: "https://i.ibb.co.com/xqyBkCfn/RG-41-Iron-Bank.png" },
        { game_name: "It's Time", game_code: "c63471a52b7cc5f9d0430706558af627", game_type: "Slot Game", game_image: "https://i.ibb.co.com/RG4y2Hhn/RG-42-It-s-Time.png" },
        { game_name: "Joker Jackpot", game_code: "3b50ee5424f0a603c5e099bf238f206a", game_type: "Slot Game", game_image: "https://i.ibb.co.com/KcxbfzNM/RG-43-Joker-Jackpot.png" },
        { game_name: "King of Kings", game_code: "6538c023e2a114c08aa6dc99a074d346", game_type: "Slot Game", game_image: "https://i.ibb.co.com/kgYQF9F9/RG-44-King-of-Kings.png" },
        { game_name: "Kluster Krystals Megaclusters", game_code: "5683181337fcb0199cefa0d2a0accc61", game_type: "Slot Game", game_image: "https://i.ibb.co.com/dJ7ByZZ5/RG-45-Kluster-Krystals-Megaclusters.png" },
        { game_name: "La Fiesta", game_code: "bcc619fe63942c19eea3262ffeb457b5", game_type: "Slot Game", game_image: "https://i.ibb.co.com/zkyG39h/RG-46-La-Fiesta.png" },
        { game_name: "Let's get ready to Rumble", game_code: "713751df9feb95ec6ba3107bec478f4e", game_type: "Slot Game", game_image: "https://i.ibb.co.com/spND4dMK/RG-47-Let-s-get-ready-to-Rumble.png" },
        { game_name: "Magikspell", game_code: "04fa959a6d67e73c75ae914e8d8ab970", game_type: "Slot Game", game_image: "https://i.ibb.co.com/LhzHVT55/RG-48-Magikspell.png" },
        { game_name: "Marching Legions", game_code: "e0afcc1e0c80717e0109f24210ad6ad9", game_type: "Slot Game", game_image: "https://i.ibb.co.com/j9XXdjgP/RG-49-Marching-Legions.png" },
        { game_name: "Maze Escape", game_code: "9c694106c336ae752eaaf21c8294cb6f", game_type: "Slot Game", game_image: "https://i.ibb.co.com/sJPCRkcB/RG-50-Maze-Escape.png" },
        { game_name: "Medallion Megaways", game_code: "5228ebc61415bab98372846ad6723165", game_type: "Slot Game", game_image: "https://i.ibb.co.com/8LrqPHyr/RG-51-Medallion-Megaways.png" },
        { game_name: "Mega Flip", game_code: "0d9c8f4c90c9ae3967010af3adf9af12", game_type: "Slot Game", game_image: "https://i.ibb.co.com/KkVMFbv/RG-52-Mega-Flip.png" },
        { game_name: "Mega Masks", game_code: "4da9b77527b051c23d54f737a8511217", game_type: "Slot Game", game_image: "https://i.ibb.co.com/57gbrQv/RG-53-Mega-Masks.png" },
        { game_name: "Mega Mine", game_code: "2e4c51b2765d93618a3f315682cbf6db", game_type: "Slot Game", game_image: "https://i.ibb.co.com/XxRXHytw/RG-54-Mega-Mine.png" },
        { game_name: "Money Cart", game_code: "bd2dda321e50679e17332c84dbcff09a", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Y7h4BdCq/RG-55-Money-Cart.png" },
        { game_name: "Money Cart 2", game_code: "800084ab353ffbc364984ecda50f39a8", game_type: "Slot Game", game_image: "https://i.ibb.co.com/NnK2Q8gL/RG-56-Money-Cart-2.png" },
        { game_name: "Money Train", game_code: "fad0fd9b89d6784c6a4110b6609ff685", game_type: "Slot Game", game_image: "https://i.ibb.co.com/6cBfF4FX/RG-57-Money-Train.png" },
        { game_name: "Money Train 2", game_code: "53e2366f625dc6ebc240a32541e93a9d", game_type: "Slot Game", game_image: "https://i.ibb.co.com/QjrJ7Ksz/RG-58-Money-Train-2.png" },
        { game_name: "Multiplier Odyssey", game_code: "5b69407e95f29e79f0e5aff93e83d0e4", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Y7F352jc/RG-59-Multiplier-Odyssey.png" },
        { game_name: "Mystery Stacks", game_code: "bf4c0d4cac1fe23448a11017b281c93d", game_type: "Slot Game", game_image: "https://i.ibb.co.com/4gpHKtz9/RG-60-Mystery-Stacks.png" },
        { game_name: "Plunderland", game_code: "871e21dded538632a5c0a4accf30fc55", game_type: "Slot Game", game_image: "https://i.ibb.co.com/1Gn2NfBx/RG-61-Plunderland.png" },
        { game_name: "Powerspin", game_code: "a8a21cd62f27103c8f277129ca67376f", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Z6GMGbjD/RG-62-Powerspin.png" },
        { game_name: "Ramses Revenge", game_code: "28ab7b8ceb6a6878b024fbb2196ad310", game_type: "Slot Game", game_image: "https://i.ibb.co.com/4ZPTXd3H/RG-63-Ramses-Revenge.png" },
        { game_name: "Rocky's Gold", game_code: "276fab1972603f8d7e5eab2385a35259", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Lddk5PNw/RG-64-Rocky-s-Gold.png" },
        { game_name: "Royal Potato", game_code: "c84f14ec356c6c9137f519675ac99506", game_type: "Slot Game", game_image: "https://i.ibb.co.com/5x112Ltv/RG-65-Royal-Potato.png" },
        { game_name: "Sails of Fortune", game_code: "8d4c17f08994b2a42903ff72fed2d75e", game_type: "Slot Game", game_image: "https://i.ibb.co.com/GQbmdvGy/RG-66-Sails-of-Fortune.png" },
        { game_name: "Santa's Stack", game_code: "222fe762eec92afc6de5562b6853a322", game_type: "Slot Game", game_image: "https://i.ibb.co.com/mVVqX2CG/RG-67-Santa-s-Stack.png" },
        { game_name: "Serpent Shrine", game_code: "27fc5f9ebc932a75efb4b1381304c408", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Qj38J6RY/RG-68-Serpent-Shrine.png" },
        { game_name: "Sherlock Bones", game_code: "bd3dd93484b07041024ad23dff3da9a8", game_type: "Slot Game", game_image: "https://i.ibb.co.com/MDJb4hTK/RG-69-Sherlock-Bones.png" },
        { game_name: "Snake Arena", game_code: "210b089dbbd0104f00c2f093e58f9dd5", game_type: "Slot Game", game_image: "https://i.ibb.co.com/7tdHqLs1/RG-70-Snake-Arena.png" },
        { game_name: "Space Miners", game_code: "0d7283aa7ae90cfdaea4e7982acb21db", game_type: "Slot Game", game_image: "https://i.ibb.co.com/0jY072WH/RG-71-Space-Miners.png" },
        { game_name: "Spirit of The Beast", game_code: "c9f41931cda435c0c80fbdc761b66d1e", game_type: "Slot Game", game_image: "https://i.ibb.co.com/TnG2hJm/RG-72-Spirit-of-The-Beast.png" },
        { game_name: "Splendour Forest", game_code: "b4fd2cc496356a5d63e9c14160b707a9", game_type: "Slot Game", game_image: "https://i.ibb.co.com/xqVxQP60/RG-73-Splendour-Forest.png" },
        { game_name: "Star Pops", game_code: "064357bd3f8a3f50350db142bee82215", game_type: "Slot Game", game_image: "https://i.ibb.co.com/3mv2xJZV/RG-74-Star-Pops.png" },
        { game_name: "Super Boost", game_code: "89656510874f78a6e2159e1377ec55d7", game_type: "Slot Game", game_image: "https://i.ibb.co.com/yc0w5d4X/RG-75-Super-Boost.png" },
        { game_name: "Templar Tumble", game_code: "f43d0e981d28ceb7810ba13bb2256c51", game_type: "Slot Game", game_image: "https://i.ibb.co.com/9kQtd2xx/RG-76-Templar-Tumble.png" },
        { game_name: "Temple Tumble", game_code: "3262fc859fa134a4a373607d6cc71fbe", game_type: "Slot Game", game_image: "https://i.ibb.co.com/rKNCFbVV/RG-77-Temple-Tumble.png" },
        { game_name: "The Golden Sail", game_code: "5a52417f6a7fe389a7abe77cae838135", game_type: "Slot Game", game_image: "https://i.ibb.co.com/d0xQs5tC/RG-78-The-Golden-Sail.png" },
        { game_name: "The Great Pigsby", game_code: "8bce189551fbd9871fb19bdb35a06279", game_type: "Slot Game", game_image: "https://i.ibb.co.com/xScNyGnr/RG-79-The-Great-Pigsby.png" },
        { game_name: "The Great Pigsby Megaways", game_code: "f8ccf08677de47b53e3576ff5b3a155a", game_type: "Slot Game", game_image: "https://i.ibb.co.com/xScNyGnr/RG-79-The-Great-Pigsby.png" },
        { game_name: "Top Dawg$", game_code: "17fbe4ff135f4be5451abb1fbd837c78", game_type: "Slot Game", game_image: "https://i.ibb.co.com/tMYrR5zR/RG-81-Top-Dawg.png" },
        { game_name: "Tower Tumble", game_code: "046a747cb698fafab6727fc4bd488db5", game_type: "Slot Game", game_image: "https://i.ibb.co.com/tPKjmmrg/RG-82-Tower-Tumble.png" },
        { game_name: "Troll's Gold", game_code: "14fbe3ca7391d58561589a31b9b237c4", game_type: "Slot Game", game_image: "https://i.ibb.co.com/YKsDnt8/RG-83-Troll-s-Gold.png" },
        { game_name: "Twisted Turbine", game_code: "4cdcffd906d3e7036322ca3c660ef9ce", game_type: "Slot Game", game_image: "https://i.ibb.co.com/d4Rv3PHG/RG-84-Twisted-Turbine.png" },
        { game_name: "Volatile Vikings", game_code: "4b279c61e4cc5d63ae3a0fe98944a9bd", game_type: "Slot Game", game_image: "https://i.ibb.co.com/vCVzGRHK/RG-85-Volatile-Vikings.png" },
        { game_name: "Wild Chapo", game_code: "5a1696874baae65ada36024621b80825", game_type: "Slot Game", game_image: "https://i.ibb.co.com/27pXq2DC/RG-86-Wild-Chapo.png" },
        { game_name: "Wildchemy", game_code: "0dcbaa8bfc76d8b0641df762a8649028", game_type: "Slot Game", game_image: "https://i.ibb.co.com/spKjFp8x/RG-87-Wildchemy.png" },
        { game_name: "Zombie Circus", game_code: "d4caa1b692e779ca3d7397b58755dade", game_type: "Slot Game", game_image: "https://i.ibb.co.com/VptWhHDS/RG-88-Zombie-Circus.png" }
    ]
    ,
};
const evoplay = {
    platform: "digital",
    provider: "evoplay",
    games: [
        { game_name: "Mary's Mining Mania", game_code: "58817c1ce7f65322581e1be2aeadadee", game_type: "instant game", game_image: "https://i.ibb.co.com/WvLxjSVq/code-EPA2-Mary-s-Mining-Mania.jpg" },
        { game_name: "Lucky Porker Bonus Buy", game_code: "a83230f3acade57c2b27e77f8f9002b1", game_type: "video slot", game_image: "https://i.ibb.co.com/rK2XwkYm/code-EPA3-Lucky-Porker-Bonus-Buy.jpg" },
        { game_name: "Europe Transit Bonus Buy", game_code: "23fa591e8d844c65f60c188778f8303a", game_type: "video slot", game_image: "https://i.ibb.co.com/1GPGPBCp/code-EPA4-Europe-Transit-Bonus-Buy.jpg" },
        { game_name: "Northern Temple Bonus Buy", game_code: "234b6bf7260c93d5bc638b60d6b8511b", game_type: "video slot", game_image: "https://i.ibb.co.com/8DYhF1Yc/code-EPA5-Northern-Temple-Bonus-Buy.jpg" },
        { game_name: "Goddess Of The Night Bonus Buy", game_code: "668353e4fe70ec38c958fc09353d977e", game_type: "video slot", game_image: "https://i.ibb.co.com/Fk19ZjPJ/code-EPA6-Goddess-Of-The-Night-Bonus-Buy.jpg" },
        { game_name: "Neon Capital Bonus Buy", game_code: "a3676ae2df86374d136e30c0d51e2996", game_type: "video slot", game_image: "https://i.ibb.co.com/MybXztmx/code-EPA7-Neon-Capital-Bonus-Buy.jpg" },
        { game_name: "Goddess of the Night", game_code: "bc4f2a5cdafd60877bd7decce61561ba", game_type: "video slot", game_image: "https://i.ibb.co.com/3m2YFp1J/code-EPA8-Goddess-of-the-Night.jpg" },
        { game_name: "Northern Temple", game_code: "61f76fbcb85fdd340304574eb6c1083f", game_type: "video slot", game_image: "https://i.ibb.co.com/9fF07zB/code-EPA9-Northern-Temple.jpg" },
        { game_name: "Lucky Porker", game_code: "f8cf0fdec52cce71072c4159eb1c9224", game_type: "video slot", game_image: "https://i.ibb.co.com/TMyk1HDq/code-EPA10-Lucky-Porker.jpg" },
        { game_name: "Europe Transit", game_code: "51ecfd4912cb93a693523c908fb738f9", game_type: "video slot", game_image: "https://i.ibb.co.com/3YjWRgKD/code-EPA11-Europe-Transit.jpg" },
        { game_name: "Xmas Keno Cat", game_code: "fdff2a1bab4fdec3599cf29b26c7a1a3", game_type: "Slot Game", game_image: "https://i.ibb.co.com/ymMMDRhr/code-EPE252-Uncrossable-Rush-XMas.jpg" },
        { game_name: "X-Demon Bonus Buy", game_code: "9ef0ff60c1adb03b9f777cf7fdade6d3", game_type: "video slot", game_image: "https://i.ibb.co.com/tTZHwDBx/code-EPA13-X-Demon-Bonus-Buy.jpg" },
        { game_name: "X-Demon", game_code: "60173b6bcdf9d5d96931dc7516cce002", game_type: "video slot", game_image: "https://i.ibb.co.com/kgXMjYBF/code-EPA14-X-Demon.jpg" },
        { game_name: "Wonder Farm Bonus Buy", game_code: "abcccab4dafb536db5176f4dd6967eeb", game_type: "video slot", game_image: "https://i.ibb.co.com/zWmyydXR/code-EPA15-Wonder-Farm-Bonus-Buy.jpg" },
        { game_name: "Wonder Farm", game_code: "e2c7f9694088040491f024b15544b3c0", game_type: "video slot", game_image: "https://i.ibb.co.com/N4Yf8yy/code-EPA16-Wonder-Farm.jpg" },
        { game_name: "Wolf Hiding Bonus Buy", game_code: "fb300c072f655d2f81641c2be72b0f58", game_type: "video slot", game_image: "https://i.ibb.co.com/DDtfYL0W/code-EPA17-Wolf-Hiding-Bonus-Buy.jpg" },
        { game_name: "Wolf Hiding", game_code: "8e95cd667a6d2b61d31c16d167125559", game_type: "video slot", game_image: "https://i.ibb.co.com/d0n4by42/code-EPA18-Wolf-Hiding.jpg" },
        { game_name: "Wild Overlords Bonus Buy", game_code: "a4baefea8c96a19b13b4c1b091dceb3d", game_type: "video slot", game_image: "https://i.ibb.co.com/qLmCrnKN/code-EPA19-Wild-Overlords-Bonus-Buy.jpg" },
        { game_name: "Wild Overlords", game_code: "50286869adfdd58224797db54df4ac93", game_type: "video slot", game_image: "https://i.ibb.co.com/Q3cxGFrC/code-EPA20-Wild-Overlords.jpg" },
        { game_name: "Wild Bullets", game_code: "d4b0ce668d4e90cba8581ed740f47ffe", game_type: "video slot", game_image: "https://i.ibb.co.com/B5rDTf06/code-EPA21-Wild-Bullets.jpg" },
        { game_name: "Wheel of Time", game_code: "e69ae392236b0275f357ed756d3fbbc7", game_type: "instant game", game_image: "https://i.ibb.co.com/zhJgRn6N/code-EPA109-Magic-Wheel.jpg" },
        { game_name: "Western Reels", game_code: "742546e917724e33b084b1ea80ac5904", game_type: "video slot", game_image: "https://i.ibb.co.com/ynGT4W5r/code-EPA88-Old-West.jpg" },
        { game_name: "Vegas Nights", game_code: "cb5e4dacd8ec8783972ac64164770416", game_type: "video slot", game_image: "https://i.ibb.co.com/nqYpNS0g/code-EPA24-Vegas-Nights.jpg" },
        { game_name: "Valley of Dreams", game_code: "b32495d9ee065b2aae52c35014806ca0", game_type: "video slot", game_image: "https://i.ibb.co.com/WpWChtj2/code-EPA25-Valley-of-Dreams.png" },
        { game_name: "Unlimited Wishes", game_code: "d36d6e34d2807f8968929ef048655951", game_type: "video slot", game_image: "https://i.ibb.co.com/spMw8ngR/code-EPA26-Unlimited-Wishes.jpg" },
        { game_name: "Unlimited Treasures Bonus Buy", game_code: "693d47e6f61bd2aa27c13f6d3fbb74fe", game_type: "video slot", game_image: "https://i.ibb.co.com/XrSpNDp7/code-EPA27-Unlimited-Treasures-Bonus-Buy.jpg" },
        { game_name: "Unlimited Treasures", game_code: "1a201944c4097ec94e7e74f83fea7dc6", game_type: "video slot", game_image: "https://i.ibb.co.com/TqhDjBLh/code-EPA28-Unlimited-Treasures.jpg" },
        { game_name: "Triple Chili", game_code: "392b293870153cf7e65c172a1dc5a9d5", game_type: "video slot", game_image: "https://i.ibb.co.com/fGLpnxMr/code-EPA29-Triple-Chili.jpg" },
        { game_name: "Trip to the Future", game_code: "b6a46dc4a6d35660517d5ae35ac227ff", game_type: "Slot Game", game_image: "https://i.ibb.co.com/DPc9Mz0d/code-EPA135-Hot-Triple-Sevens.jpg" },
        { game_name: "Tree Of Light Bonus Buy", game_code: "7b1837fd27abdf24f1461bebc199e8e8", game_type: "video slot", game_image: "https://i.ibb.co.com/0p1yTD2h/code-EPA31-Tree-Of-Light-Bonus-Buy.jpg" },
        { game_name: "Tree of Light", game_code: "5867eb70eb08b522e1f44ea5bc33a213", game_type: "video slot", game_image: "https://i.ibb.co.com/0pWvV1kW/code-EPA32-Tree-of-Light.png" },
        { game_name: "Treasure-snipes: Christmas Bonus Buy", game_code: "ca3a67f5181a6e86c94a25b4162ddf3f", game_type: "video slot", game_image: "https://i.ibb.co.com/BDL3Q2W/code-EPA33-Treasure-snipes-Christmas-Bonus-Buy.jpg" },
        { game_name: "Treasure-snipes: Christmas", game_code: "088d2ed459019ae6de11f7860342ee57", game_type: "video slot", game_image: "https://i.ibb.co.com/212BnLzb/code-EPA34-Treasure-snipes-Christmas.jpg" },
        { game_name: "Treasure-snipes Bonus Buy", game_code: "26c898682112883ea50be69c5766b7c6", game_type: "video slot", game_image: "https://i.ibb.co.com/nqggLJGH/code-EPA35-Treasure-snipes-Bonus-Buy.jpg" },
        { game_name: "Treasure-Snipes", game_code: "13bd0bd2c811989a10459a386a2939ee", game_type: "video slot", game_image: "https://i.ibb.co.com/F1ngZbV/code-EPA36-Treasure-Snipes.jpg" },
        { game_name: "Treasure of the Gods", game_code: "6bd81be054b9e2846d5626adfb04921e", game_type: "instant game", game_image: "https://i.ibb.co.com/rff26bv6/code-EPA37-Treasure-of-the-Gods.jpg" },
        { game_name: "Treasure Mania", game_code: "a717d11e7a78b6c05c9d1337c1d58b52", game_type: "video slot", game_image: "https://i.ibb.co.com/mdrbXwJ/code-EPA38-Treasure-Mania.png" },
        { game_name: "Thimbles", game_code: "814cf15a2faff32d479c6d8e69baa986", game_type: "instant game", game_image: "https://i.ibb.co.com/wZX7GJnW/code-EPA39-Thimbles.jpg" },
        { game_name: "The Slavs", game_code: "f0dd6ee9c991538662c66db1fb5f6fcb", game_type: "video slot", game_image: "https://i.ibb.co.com/MxffTXxy/code-EPA40-The-Slavs.jpg" },
        { game_name: "The Greatest Catch Bonus Buy", game_code: "bf7e85bc4f56302e92369481e3ffba6c", game_type: "video slot", game_image: "https://i.ibb.co.com/vCK931xP/code-EPA41-The-Greatest-Catch-Bonus-Buy.jpg" },
        { game_name: "The Greatest Catch", game_code: "c113c62b010f448b281ca16cae935914", game_type: "video slot", game_image: "https://i.ibb.co.com/KzQ3gmgz/code-EPA42-The-Greatest-Catch.jpg" },
        { game_name: "The Great Wall Treasure", game_code: "e7a0f9d6503d39083fdd512dfe9c482a", game_type: "Slot Game", game_image: "https://i.ibb.co.com/KzQ3gmgz/code-EPA42-The-Greatest-Catch.jpg" },
        { game_name: "The Emperor's Tomb", game_code: "567b79d2f2849dd68fbc37b9a211d4e7", game_type: "video slot", game_image: "https://i.ibb.co.com/5hB8Mfnc/code-EPA45-The-Emperor-s-Tomb.jpg" },
        { game_name: "Temple of Thunder", game_code: "f75f229e24dcc389214bc65a87697c35", game_type: "video slot", game_image: "https://i.ibb.co.com/zWvVXf44/code-EPA46-Temple-of-Thunder.jpg" },
        { game_name: "Temple of Dead Bonus Buy", game_code: "77c3109374d2d17a2c9e44d544c244e0", game_type: "video slot", game_image: "https://i.ibb.co.com/6cGJTWBj/code-EPA47-Temple-of-Dead-Bonus-Buy.jpg" },
        { game_name: "Temple of Dead", game_code: "fbcc05972043b7dc4ff03e583410d56a", game_type: "video slot", game_image: "https://i.ibb.co.com/ksHz6HGN/code-EPA48-Temple-of-Dead.png" },
        { game_name: "Talismans of Fortune", game_code: "96f74cf998fc152084e03afabee45e7e", game_type: "video slot", game_image: "https://i.ibb.co.com/BHzbL7nT/code-EPA49-Talismans-of-Fortune.jpg" },
        { game_name: "Sweet Sugar", game_code: "51267b0432cf5819590f7d322cfeeb2d", game_type: "video slot", game_image: "https://i.ibb.co.com/QvHR1HZH/code-EPA51-Sweet-Sugar.png" },
        { game_name: "Surf Zone", game_code: "37d423393a5c79fff1ecbddd07fee270", game_type: "video slot", game_image: "https://i.ibb.co.com/x8qhbL4V/code-EPA52-Surf-Zone.jpg" },
        { game_name: "Sold it Bonus Buy", game_code: "8fda0343e213121627fc9cf4c3d771a1", game_type: "video slot", game_image: "https://i.ibb.co.com/fzW21RBd/code-EPA55-Sold-it-Bonus-Buy.jpg" },
        { game_name: "Sold it", game_code: "44ab6ba5268ed8ce3b8dc616b327e9d8", game_type: "video slot", game_image: "https://i.ibb.co.com/r27Gt7ND/code-EPA56-Sold-it.jpg" },
        { game_name: "Soccer Solo Striker", game_code: "f61025613b581df8ad5727da782bd8da", game_type: "instant game", game_image: "https://i.ibb.co.com/cStZbz9H/code-EPA57-Soccer-Solo-Striker.jpg" },
        { game_name: "Shadow Of Luxor", game_code: "ac5c88f22c0b570ac4826380e99b79fc", game_type: "video slot", game_image: "https://i.ibb.co.com/Q76SfHm5/code-EPA58-Shadow-Of-Luxor.jpg" },


        { game_name: "Scratch Match", game_code: "d763610ce7c5c22a12e1f7c840836af8", game_type: "instant game", game_image: "https://i.ibb.co.com/FQpRs8p/code-EPA61-Scratch-Match.jpg" },
        { game_name: "Save the Hamster", game_code: "62fa50b18baf9cb6190fe23c684e38ed", game_type: "instant game", game_image: "https://i.ibb.co.com/pjTysLpb/code-EPA62-Save-the-Hamster.jpg" },
        { game_name: "Runes Of Destiny", game_code: "a90416eb3f298ceb10bac60100e37a2e", game_type: "video slot", game_image: "https://i.ibb.co.com/MD2fCspP/code-EPA63-Runes-Of-Destiny.png" },
        { game_name: "Rueda De Chile Bonus Buy", game_code: "d8855fde26e955b501d2d65cf1ac203b", game_type: "video slot", game_image: "https://i.ibb.co.com/NnnkS85D/code-EPA64-Rueda-De-Chile-Bonus-Buy.jpg" },
        { game_name: "Rueda De Chile", game_code: "f9c8e7d065cd8a9c1f135706a6a9b72a", game_type: "video slot", game_image: "https://i.ibb.co.com/23pQGwTt/code-EPA65-Rueda-De-Chile.jpg" },

        { game_name: "Roll The Dice", game_code: "93c1e88bf2a1bd489a1360cb533a9c6e", game_type: "instant game", game_image: "https://i.ibb.co.com/WNzZyKJc/code-EPA67-Roll-The-Dice.jpg" },
        { game_name: "Rocket Stars", game_code: "7335c18ab12e7f8902411a6abd692f78", game_type: "video slot", game_image: "https://i.ibb.co.com/FLPk3ysR/code-EPA68-Rocket-Stars.png" },



        { game_name: "Robin Hood", game_code: "d8ffea673dfa9835af890c44bd6420ef", game_type: "video slot", game_image: "https://i.ibb.co.com/b5Jqj8N1/code-EPA72-Robin-Hood.png" },
        { game_name: "Rise of Horus", game_code: "e9f0fa071c389c91cc7e1c786c392aeb", game_type: "video slot", game_image: "https://i.ibb.co.com/5WZLXKQb/code-EPA73-Rise-of-Horus.png" },
        { game_name: "Rich Reels", game_code: "6cd7fc00e69d8a482cd3fcb1a2e8ae60", game_type: "video slot", game_image: "https://i.ibb.co.com/F4RVFWKW/code-EPA74-Rich-Reels.jpg" },
        { game_name: "Reign Of Dragons", game_code: "4ed27a1a60b74411ce5787615a93555a", game_type: "video slot", game_image: "https://i.ibb.co.com/tMLvZjdb/code-EPA75-Reign-Of-Dragons.png" }
    ]
    ,
};
const ezugi = {
    platform: "digital",
    provider: "ezugi",
    games: [
        { game_name: "EZ Dealer Roleta Brazileira", game_code: "4165dec80667c631a66941c68a5bee96", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/nNq21BTX/code-481004-EZ-Dealer-Roleta-Brazileira.png" },
        { game_name: "Roleta da sorte", game_code: "eacbc601b30b2992db7c3eda2a777fe6", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/Hp1Mbhyy/code-241000-Roleta-da-sorte.png" },
        { game_name: "Dragon Tiger da Sorte", game_code: "f84c5ce9ae53fac2e7afa9f8157e453c", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/7Nk7qDRv/code-24150-Dragon-Tiger-da-Sorte.png" },
        { game_name: "Blackjack da Sorte", game_code: "4f22281594a261d99c1b1222bc2d3a8a", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/ym50Mp3Z/code-260-Blackjack-da-Sorte.png" },
        { game_name: "Oracle 360 Roulette", game_code: "c74c90c712566b3212cd08a4c191275d", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/Y4VRYqpT/code-611003-Oracle-360-Roulette.png" },
        { game_name: "Oracle Real Roulette", game_code: "c5d4fd6cec78dd439ed2ee33c8965777", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/dsBSpkCT/code-611001-Oracle-Real-Roulette.png" },
        { game_name: "Russian Roulette", game_code: "ce1b314dccf3756a581d117190ddd172", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/j9Qfkg2F/code-601000-Russian-Roulette.png" },
        { game_name: "Turkish Roulette", game_code: "f8bbea8c1a3b2204190d6a7e3c8d55e8", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/0pybmMwb/code-501000-Turkish-Roulette.png" },
        { game_name: "EZ Dealer Roulette Mandarin", game_code: "db62931938bcaf0b327b11304a406b16", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/Rk5BtwFJ/code-481003-EZ-Dealer-Roulette-Mandarin.png" },
        { game_name: "EZ Dealer Roulette Japanese", game_code: "4a963476f45508711a7147ba888600ad", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/SDFBDqwt/code-481002-EZ-Dealer-Roulette-Japanese.png" },
        { game_name: "EZ Roulette", game_code: "fb53959d1f55434d555ee50e0fc764b8", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/WhTCcm3/code-481000-EZ-Roulette.webp" },
        { game_name: "Ruleta del Sol", game_code: "4589bec2f464797bb0752d2eb283babd", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/mCXDd0LV/code-431000-Ruleta-del-Sol.png" },
        { game_name: "Spanish Roulette", game_code: "7d0d91d4477b9d14e3a4ba40e34451ea", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/SXpXM46t/code-411000-Spanish-Roulette.png" },
        { game_name: "Casino Marina Roulette 2", game_code: "44b99989a409c0ca24aca784f0433dcc", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/1Jp6whZ5/code-321001-Casino-Marina-Roulette-2.png" },
        { game_name: "Casino Marina Roulette 1", game_code: "d205c518208016404504e995620d2b83", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/Wv4rQ2Hr/code-321000-Casino-Marina-Roulette-1.png" },
        { game_name: "Ultimate Andar Bahar", game_code: "75f81c56555d394503f544f3431ef370", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/LXbrctCq/code-228100-Ultimate-Andar-Bahar.png" },
        { game_name: "Teen Patti 3 Card", game_code: "26f9f76a8fc813b8abcb6b8cb03c2eab", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/0RyWdDtF/code-227100-Teen-Patti-3-Card.png" },
        { game_name: "Namaste Roulette", game_code: "b1ffb1afd5b76785bd4ee21e31400849", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/gHXnYts/code-221005-Namaste-Roulette.png" },
        { game_name: "Prestige Auto Roulette", game_code: "efaed662fbebbb84e056c09580ae1aa4", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/GzfmWZJ/code-221004-Prestige-Auto-Roulette.png" },
        { game_name: "Diamond Roulette", game_code: "a40c7e3222a17717bcc1d2e4f5d6eae8", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/RGmfdgRp/code-221003-Diamond-Roulette.png" },
        { game_name: "Speed Auto Roulette", game_code: "f4299915859041e94b641a558a1ca9df", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/Z65jVXmL/code-221002-Speed-Auto-Roulette.png" },
        { game_name: "Speed Roulette", game_code: "b5c8e49fdd80b57de6da0e234b1bd683", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/m5HjybTm/code-221000-Speed-Roulette.png" },
        { game_name: "Casino Marina Baccarat 4", game_code: "527db204952a306f8459b9d702dfb285", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/0RLJhzhR/code-32103-Casino-Marina-Baccarat-4.jpg" },
        { game_name: "Casino Marina Baccarat 3", game_code: "243c511540c8d82597245bd282c327a1", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/Fbs3nJ9n/Casino-Marina-Baccarat-3.jpg" },
        { game_name: "Casino Marina Baccarat 2", game_code: "58501dadbf6088c4722e72660a1f38b7", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/5WS40ZsF/code-32101-Casino-Marina-Baccarat-2.jpg" },
        { game_name: "Spanish Unlimited Blackjack", game_code: "e34d828be9c5dbd861dbcc414d2daad7", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/wrRcn0st/code-4151-Spanish-Unlimited-Blackjack.png" },
        { game_name: "Rumba Blackjack 4", game_code: "1c77a06449c384b97f6239572ef87be3", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/1Y2SSqrj/code-414-Rumba-Blackjack-4.png" },
        { game_name: "Rumba Blackjack 3", game_code: "e6a2e3cc081f28298164d9197c38ec7c", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/VpS0yp8c/code-413-Rumba-Blackjack-3.png" },
        { game_name: "Rumba Blackjack 2", game_code: "22c57f788355265137a61874d0b53bb9", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/XxzmZNHC/code-412-Rumba-Blackjack-2.png" },
        { game_name: "Rumba Blackjack 1", game_code: "8ef17e9b4c5c67b7f43f4bced3c31a27", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/hRmmrvzM/code-411-Rumba-Blackjack-1.png" },
        { game_name: "VIP Diamond Blackjack", game_code: "48420430ede7a5d7615dae19aa4463a7", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/jKfcWGV/code-225-VIP-Diamond-Blackjack.png" },
        { game_name: "Surrender Blackjack", game_code: "d9723621d4007265d66cc115b5a953df", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/q391gPpG/code-224-Surrender-Blackjack.png" },
        { game_name: "Gold Blackjack 1", game_code: "2955688bdb4f23686e3ce61b905aafeb", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/jk7qh4F5/code-204-Gold-Blackjack-1.png" },
        { game_name: "Gold Blackjack 3", game_code: "02478a653aa641470951d0a9cae59699", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/zVMNcXJD/code-203-Gold-Blackjack-3.png" },
        { game_name: "VIP Fortune Baccarat", game_code: "044a24737767690ed7a0be43ed9dd137", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/RTCjPh4R/code-106-VIP-Fortune-Baccarat.jpg" },
        { game_name: "Speed Fortune Baccarat", game_code: "a4f20ded65fffacd9001782619a90cce", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/8ntfqN1y/code-105-Speed-Fortune-Baccarat.jpg" },
        { game_name: "Fortune Baccarat", game_code: "04f266b7a2e9e68865d52fb7f2ac5e8a", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/DgTM6wJQ/code-102-Fortune-Baccarat.jpg" },
        { game_name: "Unlimited Blackjack", game_code: "18cf7864fee424c7471bb7996aa4d37a", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/LXbtVTk0/code-51-Unlimited-Blackjack.png" },
        { game_name: "Ultimate Sic Bo", game_code: "5cd59a9381764a84f5792d237469903a", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/5h2MZtrh/code-224100-Ultimate-Sic-Bo.jpg" },
        { game_name: "Ultimate Roulette", game_code: "b7385424b2c19a46cbcece0c8dfb0080", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/fYZYCp0k/code-541000-Ultimate-Roulette.png" },
        { game_name: "Sic Bo", game_code: "101e3c281b35485001bec47561a0a03e", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/Wvf2RyKp/code-224000-Sic-Bo.jpg" },
        { game_name: "Italian Roulette", game_code: "2e31c310ad2491d3c6021f6063dc9b74", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/mFBqJmdn/code-1000-Italian-Roulette.png" },
        { game_name: "EZ Dealer Roulette Thai", game_code: "a987ab0cda923c2f8e6fbc5292d7a062", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/v6WrGGvT/code-481001-EZ-Dealer-Roulette-Thai.png" },
        { game_name: "Portomaso Roulette 2", game_code: "91a2daa3d4b8065ffb75818568907ff8", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/Vc3687pr/code-611000-Portomaso-Roulette-2.png" },
        { game_name: "Casino Marina Baccarat 1", game_code: "2227c0b7445885e9f6a852eaf2fe74b6", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/mFtvSNkG/code-32100-Casino-Marina-Baccarat-1.webp" },
        { game_name: "Casino Marina Andar Bahar", game_code: "5058f0aa42547208b1307fcbf21dcf9a", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/84fMmJzC/code-328000-Casino-Marina-Andar-Bahar.png" },
        { game_name: "One Day Teen Patti", game_code: "01556a46c5163d5570739dd7cddfcf68", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/3YGSGJvz/code-227103-One-Day-Teen-Patti.png" },
        { game_name: "Lucky 7", game_code: "c88c40ec4fc544518d938315e2d1b2a3", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/DHJchmKq/code-228001-Lucky-7.png" },
        { game_name: "Dragon Tiger", game_code: "efdb52994fbfe97efcbd878dbd697ebb", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/Kj1xr5G9/code-150-Dragon-Tiger.png" },
        { game_name: "Cricket War", game_code: "93e289d1b18a9f82fb5d790f3c8e6735", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/Kj1xr5G9/code-150-Dragon-Tiger.png" },
        { game_name: "Casino Hold'em", game_code: "045e21f65e0e96eb502a4856ca9ababb", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/BKK0tm4J/code-507000-Casino-Hold-em.png" },
        { game_name: "Salon Prive Blackjack", game_code: "9f944a6cb336df7664f81e3ff6aba50e", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/2Yvjc9pH/code-227-Salon-Prive-Blackjack.png" },
        { game_name: "Gold Blackjack 5", game_code: "b307868469ec2b2e612045335086ff33", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/gLmgspQ6/code-227-Salon-Prive-Blackjack.png" },
        { game_name: "Bet on Teen Patti", game_code: "e1b5650cd867be7719c15e7596aa7217", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/n8jtwfMD/code-227101-Bet-on-Teen-Patti.png" },
        { game_name: "Super 6 Baccarat", game_code: "f1fa68fce40959ce6ad5f367739f9e27", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/fwC2Fck/code-130-Super-6-Baccarat.png" },
        { game_name: "Knockout Baccarat", game_code: "b12517092523e6d4b0c991a181c7d813", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/7dNqGpHm/code-120-Knockout-Baccarat.png" }
    ]
    ,
};

const ideal = {
    platform: "digital",
    provider: "ideal",
    games: [
        { game_name: "Emperor Qin", game_code: "d58b1c2dd6456da42b2c1a33c70c1630", game_type: "Slot Game", game_image: "https://i.ibb.co.com/67zrZpxw/ID001-Emperor-Qin.png" },
        { game_name: "Cracker", game_code: "b6668f2abcfff3f7f78ae92fe908f99f", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Pv5PYL32/ID002-Cracker.png" },
        { game_name: "FaFaFa", game_code: "017c1edeaf54d4684d675055c44a6f7e", game_type: "Slot Game", game_image: "https://i.ibb.co.com/yKkdhFH/ID003-Fa-Fa-Fa.png" },
        { game_name: "Gold Toad", game_code: "654155802c34cee717e943c4e2bb6bfe", game_type: "Slot Game", game_image: "https://i.ibb.co.com/q3DVGxTj/ID004-Gold-Toad.png" },
        { game_name: "Lion Legend", game_code: "eb8dd621ea38d742ff846362a9b1085d", game_type: "Slot Game", game_image: "https://i.ibb.co.com/C5GY5ZHP/ID005-Lion-Legend.png" },
        { game_name: "Goblin's Gold", game_code: "697993800419bf160901aa9133cde524", game_type: "Slot Game", game_image: "https://i.ibb.co.com/wFx6DT3n/ID006-Goblin-s-Gold.png" },
        { game_name: "The Unsurpassed Grace", game_code: "bf0ae3c404807429451d088725ae5377", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Kpsx0vs9/ID007-The-Unsurpassed-Grace.png" },
        { game_name: "Arctic King", game_code: "8249b0e703ceb0816f3645dbac0a83ce", game_type: "Slot Game", game_image: "https://i.ibb.co.com/G3H1bDJb/ID008-Arctic-King.png" },
        { game_name: "Jalapeno", game_code: "f23ad5acc6c690a45f1280ba49d28266", game_type: "Slot Game", game_image: "https://i.ibb.co.com/fGrtPrMd/ID009-Jalapeno.png" },
        { game_name: "Ice Age Mammoths", game_code: "484025f23c821e32fc6ac31ff75613d6", game_type: "Slot Game", game_image: "https://i.ibb.co.com/BKfS8Gt9/ID010-Ice-Age-Mammoths.png" },
        { game_name: "Zorro", game_code: "e2a8a030f69553e9dd8f287c11bed399", game_type: "Slot Game", game_image: "https://i.ibb.co.com/zT0WyX8L/ID011-Zorro.png" },
        { game_name: "Three Kings", game_code: "316aa38ad4468a2ab757ff5a8836ab59", game_type: "Slot Game", game_image: "https://i.ibb.co.com/C54n32DJ/ID012-Three-Kings.png" },
        { game_name: "Panda Warrior", game_code: "96b1f087066664f4bbf547719f4ce562", game_type: "Slot Game", game_image: "https://i.ibb.co.com/whqLhH7G/ID013-Panda-Warrior.png" },
        { game_name: "Pirate Attack", game_code: "1ae2dd4a2b6b520ea618e49734114cc2", game_type: "Slot Game", game_image: "https://i.ibb.co.com/s95YJbbM/ID014-Pirate-Attack.png" },
        { game_name: "Crazy Penguin", game_code: "b242216f35f89856685b923ea29033d5", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Xr2Ytk9h/ID015-Crazy-Penguin.png" },
        { game_name: "Fortune Cat", game_code: "a1149d0f9c50430ae060b026f09e4c7a", game_type: "Slot Game", game_image: "https://i.ibb.co.com/BHQdKw70/ID016-Fortune-Cat.png" },
        { game_name: "Toy Soldiers", game_code: "32d3a212089035386a95a21d6582d368", game_type: "Slot Game", game_image: "https://i.ibb.co.com/nNJY5xNq/ID017-Toy-Soldiers.png" },
        { game_name: "Power of Thor", game_code: "324d92fb13d0d6228279b4f7792a75ac", game_type: "Slot Game", game_image: "https://i.ibb.co.com/bRbLkYPD/ID018-Power-of-Thor.png" },
        { game_name: "Dragon Tiles", game_code: "ba653f265134f4662d05363515e5c510", game_type: "Slot Game", game_image: "https://i.ibb.co.com/4nqqrH1D/ID019-Dragon-Tiles.png" },
        { game_name: "Fortune Gate", game_code: "18bd994afe332e7ac903f511d485644e", game_type: "Slot Game", game_image: "https://i.ibb.co.com/JRF18pV2/ID020-Fortune-Gate.png" },
        { game_name: "Shining Diamond", game_code: "c5d0d421f875023cbf927692da2009d9", game_type: "Slot Game", game_image: "https://i.ibb.co.com/xqwnVLpd/ID021-Shining-Diamond.png" },
        { game_name: "Gold Miner", game_code: "182d8051c14f15943b8362f809bb23f0", game_type: "Slot Game", game_image: "https://i.ibb.co.com/TFwNv2c/ID022-Gold-Miner.png" },
        { game_name: "Foxy Heist", game_code: "466cbf64cf586706eddbc2dd89e2d5b0", game_type: "Slot Game", game_image: "https://i.ibb.co.com/7NCDrQQ5/ID023-Foxy-Heist.png" },
        { game_name: "Treasure Mine", game_code: "a38019da304f80b536e9677aba84ec9e", game_type: "Slot Game", game_image: "https://i.ibb.co.com/1fZtJQDH/ID024-Treasure-Mine.png" },
        { game_name: "God of Fortune", game_code: "a1353a355a096a5d7d15fb2636f19f0a", game_type: "Slot Game", game_image: "https://i.ibb.co.com/GvH2dXGw/ID025-God-of-Fortune.png" },
        { game_name: "Fortune Koi", game_code: "1eedbd0f491dd245a7e325f200d94834", game_type: "Slot Game", game_image: "https://i.ibb.co.com/jkCMmfKc/ID026-Fortune-Koi.png" },
        { game_name: "Viking Age", game_code: "4bca928196d945e72b3826e8077ba69f", game_type: "Slot Game", game_image: "https://i.ibb.co.com/7tt3hncN/ID027-Viking-Age.png" },
        { game_name: "Fortune Boy", game_code: "4e17695dcfeb6f29e97d392f209f6035", game_type: "Slot Game", game_image: "https://i.ibb.co.com/9FBHbXK/ID028-Fortune-Boy.png" },
        { game_name: "Fortune Panda", game_code: "ce8cc0acf6790e96586cd18e2911c9fc", game_type: "Slot Game", game_image: "https://i.ibb.co.com/tw8Q5wjb/ID029-Fortune-Panda.png" },
        { game_name: "Gold Rush", game_code: "a6edba75571a6e2ad7627bb3c3fbf1aa", game_type: "Slot Game", game_image: "https://i.ibb.co.com/J6LK7ct/ID030-Gold-Rush.png" },
        { game_name: "Train Robber", game_code: "96972e9e911bcff850e2447d4e659378", game_type: "Slot Game", game_image: "https://i.ibb.co.com/S76frjTr/ID031-Train-Robber.png" },
        { game_name: "Jalapeno 2", game_code: "eaa49c574b992a6fb3f45c94b9fb4e80", game_type: "Slot Game", game_image: "https://i.ibb.co.com/fGrtPrMd/ID009-Jalapeno.png" },
        { game_name: "Mystery Show", game_code: "1532bc4df58dc85a1be5117db62675c5", game_type: "Slot Game", game_image: "https://i.ibb.co.com/XrxTvbh1/ID033-Mystery-Show.png" },
        { game_name: "Pirate Treasure", game_code: "1d6dbb878939ef9da13b6b8874eb922b", game_type: "Slot Game", game_image: "https://i.ibb.co.com/rG64fjPg/ID034-Pirate-Treasure.png" },
        { game_name: "Royale Expedition", game_code: "b96cb5a9b96659e7697cd854e201cf3b", game_type: "Slot Game", game_image: "https://i.ibb.co.com/jvqwXw3s/ID035-Royale-Expedition.png" },
        { game_name: "Eagle Parade", game_code: "b0112c09fd807bfe0c1d839b6f002948", game_type: "Slot Game", game_image: "https://i.ibb.co.com/KzLG5zJr/ID036-Eagle-Parade.png" },
        { game_name: "The King Of Olympus", game_code: "aca500c0066dbf7668bba2ebf63e0ae4", game_type: "Slot Game", game_image: "https://i.ibb.co.com/kgHb4tqT/ID037-The-King-Of-Olympus.png" },
        { game_name: "Mahjong Gold", game_code: "58f09506283d7a0832dfcab0327ae379", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Hfwm1rn3/ID038-Mahjong-Gold.png" },
        { game_name: "Candy Burst", game_code: "dffdfcc2b41ec5672c30b88bbb2e92b7", game_type: "Slot Game", game_image: "https://i.ibb.co.com/xK7z76WF/ID039-Candy-Burst.png" },
        { game_name: "Leprechaun", game_code: "0c78c20229def7d837cbb6bf2d8ae73d", game_type: "Slot Game", game_image: "https://i.ibb.co.com/tPCVG8DK/ID040-Leprechaun.png" },
        { game_name: "Fortune Neko", game_code: "98a25fb8528bd23ab8f88c1ccf1c92ce", game_type: "Slot Game", game_image: "https://i.ibb.co.com/ksxxLRKv/ID041-Fortune-Neko.png" },
        { game_name: "Legend of Aztec", game_code: "6c50989ecf5860cc47279d5ee858037e", game_type: "Slot Game", game_image: "https://i.ibb.co.com/VWkMKJPB/ID042-Legend-of-Aztec.png" },
        { game_name: "Almighty Zeus", game_code: "d7102fbb62d30b0e9e951c49ad376bfd", game_type: "Slot Game", game_image: "https://i.ibb.co.com/RkRFQ2ct/ID043-Almighty-Zeus.png" },
        { game_name: "Gemstone Princess", game_code: "d15afcbd55b16b6b21d6612ea7f09869", game_type: "Slot Game", game_image: "https://i.ibb.co.com/dwBLVwCG/ID044-Gemstone-Princess.png" },
        { game_name: "Mahjong Gold 2", game_code: "77d52f4b95fdc6c04828bd9605e7d1c0", game_type: "Slot Game", game_image: "https://i.ibb.co.com/WWSSyNZB/ID045-Mahjong-Gold-2.png" },
        { game_name: "Lucky Witch", game_code: "322742d014aca4cb302d86fb3029aba2", game_type: "Slot Game", game_image: "https://i.ibb.co.com/QFrg0FbT/ID046-Lucky-Witch.png" },
        { game_name: "Fishing Tycoon", game_code: "35970ef5302ee2f20b9de877d6727448", game_type: "Slot Game", game_image: "https://i.ibb.co.com/N6WTTWhJ/ID047-Fishing-Tycoon.png" },
        { game_name: "Jade Emperor", game_code: "db2e28711729f50609629a9d38de6f9f", game_type: "Slot Game", game_image: "https://i.ibb.co.com/1wF2Mwj/ID048-Jade-Emperor.png" },
        { game_name: "Crazy Thieves", game_code: "992092a828098028e7de260f937aa4da", game_type: "Slot Game", game_image: "https://i.ibb.co.com/0pX6jtLv/ID049-Crazy-Thieves.png" },
        { game_name: "Spooky Halloween", game_code: "124c8e22d59b3fc448265a1e9b32620c", game_type: "Slot Game", game_image: "https://i.ibb.co.com/sd2jYmBB/ID050-Spooky-Halloween.png" },
        { game_name: "Fortune Bull", game_code: "3d014cc72ef954a49db85f8c04ab2a2a", game_type: "Slot Game", game_image: "https://i.ibb.co.com/dwsnbx14/ID051-Fortune-Bull.png" },
        { game_name: "Pharaoh Treasures", game_code: "943e0f1c86ebcad476815003a2084147", game_type: "Slot Game", game_image: "https://i.ibb.co.com/vCN9Lk5r/ID052-Pharaoh-Treasures.png" },
        { game_name: "Thanksgiving Blast", game_code: "f10b39257abb364e56df597f9e07a090", game_type: "Slot Game", game_image: "https://i.ibb.co.com/zVfn3cVx/ID053-Thanksgiving-Blast.png" },
        { game_name: "Kokushimusou", game_code: "5cb1f73869693063dc0aa1ec4ab4756e", game_type: "Slot Game", game_image: "https://i.ibb.co.com/JwrRxZDX/ID054-Kokushimusou.png" },
        { game_name: "Buffalo", game_code: "6cdbaee9633f74e049259494e1eb33f2", game_type: "Slot Game", game_image: "https://i.ibb.co.com/B23XtFZS/ID055-Buffalo.png" },
        { game_name: "Tiger Master", game_code: "ac813b4b69128a3732d78fb975752a6a", game_type: "Slot Game", game_image: "https://i.ibb.co.com/YFGLqLtC/ID056-Tiger-Master.png" },
        { game_name: "Xiangqi Warfare", game_code: "5bdacaf675d2f94258102e2cbc8d2254", game_type: "Slot Game", game_image: "https://i.ibb.co.com/p6mbTGZJ/ID057-Xiangqi-Warfare.png" },
        { game_name: "Huangdi Legend", game_code: "d760f79443978cce11af6c13c34d9c29", game_type: "Slot Game", game_image: "https://i.ibb.co.com/yBsSP3HV/ID058-Huangdi-Legend.png" },
        { game_name: "Prosperity 168", game_code: "979c421948f713a2e52dcde7c04bfb4f", game_type: "Slot Game", game_image: "https://i.ibb.co.com/8nNMZXyy/ID059-Prosperity-168.png" },
        { game_name: "King Gummy Bear", game_code: "8abb0acf4faa451ea4b51eb5e18e3d8b", game_type: "Slot Game", game_image: "https://i.ibb.co.com/jv7Hvrtt/ID060-King-Gummy-Bear.png" },
        { game_name: "Mahjong Infinity", game_code: "28a9308652063ba362472e2bd1a1f913", game_type: "Slot Game", game_image: "https://i.ibb.co.com/bgwtNqdh/ID061-Mahjong-Infinity.png" }
    ]
    ,
};

const playtech = {
    platform: "digital",
    provider: "playtech",
    games: [
        { game_name: "1-Of-A-Kind", game_code: "44f6e08965a602e68952f49658b7d3f8", game_type: "Slot Game", game_image: "https://i.ibb.co.com/8DfFFbBf/code-1-1-Of-A-Kind.png" },
        { game_name: "28 Mansions", game_code: "d4a6819ce811b1b97c07a8818a64690d", game_type: "Slot Game", game_image: "https://i.ibb.co.com/hFfPBYwC/code-2-28-Mansions.png" },
        { game_name: "A Night Out", game_code: "394dd26b789d93bd041fca2d86ea8820", game_type: "Slot Game", game_image: "https://i.ibb.co.com/C54KsnYp/code-3-A-Night-Out.png" },
        { game_name: "Absolutely Mammoth", game_code: "93aeecbe8381554300edf97c1e4b855e", game_type: "Slot Game", game_image: "https://i.ibb.co.com/MkxVgfKK/code-4-Absolutely-Mammoth.png" },
        { game_name: "Absolutely Mammoth PowerPlay Jackpot", game_code: "89bafa7a264f7f527c5e1f536a609ca4", game_type: "Slot Game", game_image: "https://i.ibb.co.com/zhywdc6C/code-5-Absolutely-Mammoth-Power-Play-Jackpot.png" },
        { game_name: "Age of Egypt", game_code: "9d8735f9017706dc1d19ac5111606490", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Mk6mCSh4/code-6-Age-of-Egypt.png" },
        { game_name: "Age of the Gods : Epic Troy", game_code: "edd09602fa948f670900b908058c71a3", game_type: "Slot Game", game_image: "https://i.ibb.co.com/nNSbLqLD/code-7-Age-of-the-Gods-Epic-Troy.png" },
        { game_name: "Age of the Gods God of Storms 2", game_code: "aaf255e782ce1fbb275ed5ac0ca0e887", game_type: "Slot Game", game_image: "https://i.ibb.co.com/F4sdW1zM/code-8-Age-of-the-Gods-God-of-Storms-2.png" },
        { game_name: "Age of the Gods God of Storms 3", game_code: "9587e5573b6ddafac4cd0c43ffef437d", game_type: "Slot Game", game_image: "https://i.ibb.co.com/4ZjXxJnb/code-9-Age-of-the-Gods-God-of-Storms-3.png" },
        { game_name: "Age of the Gods Norse: Book of Dwarves", game_code: "6c3fd84bcfa35635ae538fc305b2bc39", game_type: "Slot Game", game_image: "https://i.ibb.co.com/PsfgtRbn/code-12-Age-of-the-Gods-Norse-King-of-Asgard.png" },
        { game_name: "Age of the Gods Norse: Gods and Giants", game_code: "d9d4e07b04a071cd63b602fa9c464041", game_type: "Slot Game", game_image: "https://i.ibb.co.com/zWyxgydP/code-11-Age-of-the-Gods-Norse-Gods-and-Giants.png" },
        { game_name: "Age of the Gods Norse: King of Asgard", game_code: "eae4d44fd7200da9e0d1b91545976515", game_type: "Slot Game", game_image: "https://i.ibb.co.com/PsfgtRbn/code-12-Age-of-the-Gods-Norse-King-of-Asgard.png" },
        { game_name: "Age of the Gods Norse: Norse Legends", game_code: "82b859cec9fc3f510492c2653062eb9c", game_type: "Slot Game", game_image: "https://i.ibb.co.com/pry9YkQX/code-13-Age-of-the-Gods-Norse-Norse-Legends.png" },
        { game_name: "Age of the Gods Norse: Ways of Thunder", game_code: "fd75d31cb3fc132afd3d19bf58a75aeb", game_type: "Slot Game", game_image: "https://i.ibb.co.com/gLhR4y6L/code-14-Age-of-the-Gods-Norse-Ways-of-Thunder.png" },
        { game_name: "Age of the Gods Scratch", game_code: "37a974d2647ac14e5b517736f5e12022", game_type: "Slot Game", game_image: "https://i.ibb.co.com/5X4rwbBh/code-15-Age-of-the-Gods-Scratch.png" },
        { game_name: "Age of the Gods: Age of the Gods", game_code: "842569ffeaf7c8062e5c37ef34a3cbb5", game_type: "Slot Game", game_image: "https://i.ibb.co.com/BH56C1xk/code-16-Age-of-the-Gods-Age-of-the-Gods.png" },
        { game_name: "Age of the Gods: Apollo Power", game_code: "a0067014ed52d964947c03729362f706", game_type: "Slot Game", game_image: "https://i.ibb.co.com/sJmhYPGy/code-17-Age-of-the-Gods-Apollo-Power.png" },
        { game_name: "Age of the Gods: Book of Oracle", game_code: "b48124c128f849cb6af5523d6273fa03", game_type: "Slot Game", game_image: "https://i.ibb.co.com/1YG1CJhH/code-18-Age-of-the-Gods-Book-of-Oracle.png" },
        { game_name: "Age of the Gods: Fate Sisters", game_code: "747974c975cd480f6daf275ee495b3bd", game_type: "Slot Game", game_image: "https://i.ibb.co.com/N0C4LJQ/code-19-Age-of-the-Gods-Fate-Sisters.png" },
        { game_name: "Age of the Gods: Furious Four", game_code: "7c1f9dac0a9b08ba4ef4db64913989e1", game_type: "Slot Game", game_image: "https://i.ibb.co.com/spBfYFR0/code-20-Age-of-the-Gods-Furious-Four.png" },
        { game_name: "Age of the Gods: Glorious Griffin", game_code: "26d05f670d5004297c29bca37c5d2a18", game_type: "Slot Game", game_image: "https://i.ibb.co.com/84LzJRNc/code-21-Age-of-the-Gods-Glorious-Griffin.png" },
        { game_name: "Age of the Gods: God of Storms", game_code: "98a322361ea9fb0a50263e4fcb525c4b", game_type: "Slot Game", game_image: "https://i.ibb.co.com/vCYfxJ6p/code-22-Age-of-the-Gods-God-of-Storms.png" },
        { game_name: "Age of the Gods: Goddess of Wisdom", game_code: "5d1d43200792ac696842baabeedc57ef", game_type: "Slot Game", game_image: "https://i.ibb.co.com/zHbFxP48/code-23-Age-of-the-Gods-Goddess-of-Wisdom.png" },
        { game_name: "Age of the Gods: Helios", game_code: "ddddd3322ef4d339d9d1f07b5db2fa53", game_type: "Slot Game", game_image: "https://i.ibb.co.com/WNPrpTgh/code-24-Age-of-the-Gods-Helios.png" },
        { game_name: "Age of the Gods: King of Olympus", game_code: "b56ffe98a1d3b561b4e50fce74c3db4a", game_type: "Slot Game", game_image: "https://i.ibb.co.com/rfdC7GSd/code-25-Age-of-the-Gods-King-of-Olympus.png" },
        { game_name: "Age of the Gods: King of Olympus Megaways", game_code: "6afaba62b54e68a826ec5250536e0324", game_type: "Slot Game", game_image: "https://i.ibb.co.com/5VfxK99/code-26-Age-of-the-Gods-King-of-Olympus-Megaways.png" },
        { game_name: "Age of the Gods: Maze Keeper", game_code: "d88d866f0f0b56b43a55c840ae735c99", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Fq67kcVK/code-27-Age-of-the-Gods-Maze-Keeper.png" },
        { game_name: "Age of the Gods: Medusa & Monsters", game_code: "bc4140175092f25ce45e69cc46c1d917", game_type: "Slot Game", game_image: "https://i.ibb.co.com/YBD64sHq/code-28-Age-of-the-Gods-Medusa-Monsters.png" },
        { game_name: "Age of the Gods: Mighty Midas", game_code: "b7b7ab09f7413cc43a8e47632875a7a7", game_type: "Slot Game", game_image: "https://i.ibb.co.com/zWhprCdJ/code-29-Age-of-the-Gods-Mighty-Midas.png" },
        { game_name: "Age of the Gods: Prince of Olympus", game_code: "761da27537daa09466a46dd0309305f5", game_type: "Slot Game", game_image: "https://i.ibb.co.com/PsbVz70X/code-30-Age-of-the-Gods-Prince-of-Olympus.png" },
        { game_name: "Age of the Gods: Ruler of the Dead", game_code: "68ed2f1d7e1ee7c4bec470c53c16be67", game_type: "Slot Game", game_image: "https://i.ibb.co.com/jvX2Rgbm/code-31-Age-of-the-Gods-Ruler-of-the-Dead.png" },
        { game_name: "Age of the Gods: Ruler of the Seas", game_code: "125c404f620b166fcafef667d6e3e34c", game_type: "Slot Game", game_image: "https://i.ibb.co.com/C5hkJ2R3/code-32-Age-of-the-Gods-Ruler-of-the-Seas.png" },
        { game_name: "Age of the Gods: Ruler of the Sky", game_code: "f33f8c97901234ef019f637869090e63", game_type: "Slot Game", game_image: "https://i.ibb.co.com/gb3zfRWM/code-33-Age-of-the-Gods-Ruler-of-the-Sky.png" },
        { game_name: "Age of the Gods: Rulers of Olympus", game_code: "251d16f7e6db74914dc68cffbaff76ee", game_type: "Slot Game", game_image: "https://i.ibb.co.com/RGP6TzYX/code-34-Age-of-the-Gods-Rulers-of-Olympus.png" },
        { game_name: "Age of the Gods: Wheels of Olympus", game_code: "728584710964fbb11ecf74162a589f9b", game_type: "Slot Game", game_image: "https://i.ibb.co.com/zVF3Wcxb/code-35-Age-of-the-Gods-Wheels-of-Olympus.png" },
        { game_name: "Age of the Gods: Wonder Warriors", game_code: "83d6b08599236ba5bc2d64d722b2da01", game_type: "Slot Game", game_image: "https://i.ibb.co.com/s9zTyskR/code-36-Age-of-the-Gods-Wonder-Warriors.png" },
        { game_name: "Alohawaii: Cash Collect", game_code: "914ee555a5e788c9e6fe597552fdbbaf", game_type: "Slot Game", game_image: "https://i.ibb.co.com/WvQFJFLb/code-37-Alohawaii-Cash-Collect.png" },
        { game_name: "Anaconda Uncoiled", game_code: "004dc1692ccbb8d46dd44f3480228606", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Kxnwt6fT/code-38-Anaconda-Uncoiled.png" },
        { game_name: "Anaconda Wild", game_code: "2399d4cd23a97be3b0970175593f92b3", game_type: "Slot Game", game_image: "https://i.ibb.co.com/zWpcpt3Z/code-39-Anaconda-Wild.png" },
        { game_name: "Anaconda Wild 2", game_code: "4739dde37c2560bb4f1aa6263bb2b8cb", game_type: "Slot Game", game_image: "https://i.ibb.co.com/HDy9b6K0/code-40-Anaconda-Wild-2.png" },
        { game_name: "Anaconda Wild 2 PowerPlay Jackpot", game_code: "735b5a5886aac3c90d863ddd46751363", game_type: "Slot Game", game_image: "https://i.ibb.co.com/PsJDSbxL/code-41-Anaconda-Wild-2-Power-Play-Jackpot.png" },
        { game_name: "Anaconda Wild Scratch", game_code: "547a08381481e55198a0efffa9819b7e", game_type: "Slot Game", game_image: "https://i.ibb.co.com/6JcNy7CC/code-42-Anaconda-Wild-Scratch.png" },
        { game_name: "Animal Instinct", game_code: "6e159c1f57dc867f9a88030bb928dc5c", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Q7ZM1dj9/code-43-Animal-Instinct.png" },
        { game_name: "Archer", game_code: "19eb221686f726fe8ab00a523f43d0fc", game_type: "Slot Game", game_image: "https://i.ibb.co.com/q3Q02nCL/code-44-Archer.png" },
        { game_name: "Arowana's Luck", game_code: "ff01c1c608d0aa974e9badd014b77374", game_type: "Slot Game", game_image: "https://i.ibb.co.com/PzcYNMsy/code-45-Arowana-s-Luck.jpg" },
        { game_name: "Asian Fantasy", game_code: "c57101e7f9b96f9cdd36f3aee28a6703", game_type: "Slot Game", game_image: "https://i.ibb.co.com/mrz5hmsG/code-46-Asian-Fantasy.png" },
        { game_name: "Atlantis: Cash Collect", game_code: "951e0c7f0a7a8aa92aacfb6dff571a93", game_type: "Slot Game", game_image: "https://i.ibb.co.com/dJBDfBxn/code-47-Atlantis-Cash-Collect.png" },
        { game_name: "Aztec Expedition", game_code: "2b8c4e7c12b095785947cfee9c1ce4a9", game_type: "Slot Game", game_image: "https://i.ibb.co.com/tT76SpzN/code-48-Aztec-Expedition.png" },
        { game_name: "Azteca: Bonus Lines", game_code: "4a4153c592a056728fb27e545abafe98", game_type: "Slot Game", game_image: "https://i.ibb.co.com/wrwN43P5/code-49-Azteca-Bonus-Lines.png" },
        { game_name: "Azteca: Bonus Lines PowerPlay Jackpot", game_code: "1d2f6b8d66fb5ab0382a76216e76d6fa", game_type: "Slot Game", game_image: "https://i.ibb.co.com/6RcRcht6/code-50-Azteca-Bonus-Lines-Power-Play-Jackpot.png" },
        { game_name: "Azteca: Cash Collect", game_code: "e388e3d3028d8743eab4c164075c1822", game_type: "Slot Game", game_image: "https://i.ibb.co.com/MxHnVkr9/code-51-Azteca-Cash-Collect.png" },
        { game_name: "Bai Shi", game_code: "09316ab17daf79adcca3b4d10f93c98b", game_type: "Slot Game", game_image: "https://i.ibb.co.com/mF4xnLc6/code-52-Bai-Shi.png" },
        { game_name: "Beach Life", game_code: "6327914a72dfff84b0b20b21f761398e", game_type: "Slot Game", game_image: "https://i.ibb.co.com/n8YW66YG/code-53-Beach-Life.png" },
        { game_name: "Bee Frenzy", game_code: "24cfafc2cd7e62ac72868a52359a95b7", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Ld01fTmr/code-54-Bee-Frenzy.png" },
        { game_name: "Bermuda Triangle", game_code: "81e1a871550be8048acf0c613c635ef6", game_type: "Slot Game", game_image: "https://i.ibb.co.com/hFzzz1vk/code-55-Bermuda-Triangle.png" },
        { game_name: "Berry Berry Bonanza", game_code: "97446e62c7e272b7517d1646b6bcc2a4", game_type: "Slot Game", game_image: "https://i.ibb.co.com/1G0kG70j/code-56-Berry-Berry-Bonanza.png" },
        { game_name: "Better Wilds", game_code: "7d7fdd3b5f66243fd47f6c5a6005860c", game_type: "Slot Game", game_image: "https://i.ibb.co.com/b5T1nRWB/code-57-Better-Wilds.png" },
        { game_name: "Better Wilds PowerPlay Jackpot", game_code: "badd47fea6f9905ad9d1530488be7652", game_type: "Slot Game", game_image: "https://i.ibb.co.com/0p7cZ3qc/code-58-Better-Wilds-Power-Play-Jackpot.png" },
        { game_name: "Big Shots", game_code: "77001fa326967eebe080cb3a00138641", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Kc4GCpqp/code-59-Big-Shots.png" },
        { game_name: "Blazing Bells", game_code: "40abe020b930dff62e78631dfbe9b804", game_type: "Slot Game", game_image: "https://i.ibb.co.com/fYZPyDfQ/code-60-Blazing-Bells.png" },
        { game_name: "Blazing Bells PowerPlay Jackpot", game_code: "2a1e5cf43bd2e4af720890ab84cb1567", game_type: "Slot Game", game_image: "https://i.ibb.co.com/cXgQHnMy/code-61-Blazing-Bells-Power-Play-Jackpot.png" },
        { game_name: "Blitz Scratch", game_code: "293bce168517eaef129e34b5447dc748", game_type: "Slot Game", game_image: "https://i.ibb.co.com/60mgG1j5/code-62-Blitz-Scratch.png" },
        { game_name: "Bonus Bears", game_code: "fdacfaf60feb36a4486a06acfec403b8", game_type: "Slot Game", game_image: "https://i.ibb.co.com/8gCH4W4T/code-63-Bonus-Bears.png" },
        { game_name: "Bonus Train Bandits", game_code: "58b40612830758e0d935aa71cf413846", game_type: "Slot Game", game_image: "https://i.ibb.co.com/My8Zx651/code-64-Bonus-Train-Bandits.png" },
        { game_name: "Book of Kings", game_code: "1e7cdce727feb9e3aa26bc83975f5b42", game_type: "Slot Game", game_image: "https://i.ibb.co.com/qLb9Tgyj/code-65-Book-of-Kings.png" },
    ],
};

const bti = {
    platform: "sports",
    provider: "bti",
    games: [
        { game_name: "BtiGaming", game_code: "4d31f1186a81e208c003a7e37411ce35", game_type: "Sports Game", game_image: "https://i.ibb.co.com/sd0YMNvJ/BTI-001-Bti-Gaming.png" },

    ],
};
const luckSport = {
    platform: "sports",
    provider: "luckSport",
    games: [
        { game_name: "LuckSportGaming", game_code: "92b24e4c25107367a80e0fe1a97c24e4", game_type: "Sports Game", game_image: "https://i.ibb.co.com/qYqdwf7N/2emg-Emetxa-Ir-So-O5-KETqyte-OHI.webp" },

    ],
};
const SBOVirtualSports = {
    platform: "sports",
    provider: "SBOVirtualSports",
    games: [
        { game_name: "SBO VirtualSports (VS)", game_code: "341827d4370bb198b18364e2d75e6916", game_type: "Sports Game", game_image: "https://i.ibb.co.com/spDVqGxR/S-001-SBO-Virtual-Sports-VS.png" },

    ],
};
const SBOSportsbook = {
    platform: "sports",
    provider: "SBOSportsbook",
    games: [
        { game_name: "SBO Sportsbook", game_code: "07baf9e1388d32cd4cee0c0c91b23020", game_type: "Sports Game", game_image: "https://i.ibb.co.com/7tyQd43v/S-002-SBO-Sportsbook.png" },

    ],
};
const winSportsbook = {
    platform: "sports",
    provider: "568winSportsbook",
    games: [
        { game_name: "SBO Sportsbook", game_code: "171ffc7c5df076a4a4aedf892cd43212", game_type: "Sports Game", game_image: "https://i.ibb.co.com/7JzZBmcW/S-003-568win-Sportsbook.png" },

    ],
};
const unitedGaming = {
    platform: "sports",
    provider: "UnitedGaming",
    games: [
        { game_name: "United Gaming", game_code: "c4b2813f6bbc5abf502ddfb857e604eb", game_type: "Sports Game", game_image: "https://i.ibb.co.com/gMf5yfDb/UG-001-United-Gaming.jpg" },

    ],
};
const SABASports = {
    platform: "sports",
    provider: "SABASports",
    games: [
        { game_name: "SABA Sports", game_code: "08ced9dd788aed11ff3c7f387ae0f063", game_type: "Sports Game", game_image: "https://i.ibb.co.com/ym3yjKBg/SABA-001-SABA-Sports.png" },

    ],
};
const SABASportsPHP = {
    platform: "sports",
    provider: "SABASportsPHP",
    games: [
        { game_name: "SABA Sports PHP", game_code: "bef536c0ee1fd3d0bd327fba605c70cc", game_type: "Sports Game", game_image: "https://i.ibb.co.com/prbbY6z4/saba-sports-php.webp" },

    ],
};
const TFGaming = {
    platform: "sports",
    provider: "TFGaming",
    games: [
        { game_name: "TF Gaming", game_code: "4ee8e0051a035b463b47c3c473ce317d", game_type: "Sports Game", game_image: "https://i.ibb.co.com/pvHSmtqv/TFG-001-TFGaming-1.png" },

    ],
};
const CMD = {
    platform: "sports",
    provider: "CMD",
    games: [
        { game_name: "CMD Sports", game_code: "1f7fbf84bf1bcc08c3a7ea27db75f366", game_type: "Sports Game", game_image: "https://i.ibb.co.com/NdpWnL68/C-001-CMD.png" },

    ],
};
const Betby = {
    platform: "sports",
    provider: "Betby",
    games: [
        { game_name: "Betby Sports", game_code: "8a704858d5deb4af1ddc722092ac7614", game_type: "Sports Game", game_image: "https://i.ibb.co.com/qqBkBhX/betby-elantil-logos-partnership.png" },

    ],
};
const kygaming = {
    platform: "digital",
    provider: "kygaming",
    games: [
        { game_name: "Tombola Bingo", game_code: "286eb47a1b213dc71e7723bba7d3f1b7", game_type: "Lottery Game", game_image: "https://i.ibb.co.com/SXmznb7S/KY-001-Tombola-Bingo.png" },
        { game_name: "Football Legend", game_code: "67693d017d28e1ac8b9d14038a87b888", game_type: "Table Game", game_image: "https://i.ibb.co.com/yLw9NYV/KY-002-Football-Legend.png" },

        { game_name: "Dice", game_code: "de17737b935dd7a77885d45a6dfb164e", game_type: "Table Game", game_image: "https://i.ibb.co.com/cn6N3rZ/KY-003-Dice.png" },
        { game_name: "Bombing Fortune", game_code: "fb3334b89b498706938d6bb2857adae5", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/DNNkXbF/KY-004-Bombing-Fortune.png" },
        { game_name: "Fruit Bombs", game_code: "320f3853ab8f0266f8731a69035326ac", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/8Dxd9rhY/KY-005-Fruit-Bombs.png" },
        { game_name: "Gladiator", game_code: "b7efe84654be7e64cb2031cecf185e41", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/jdsybBX/KY-006-Gladiator.png" },
        { game_name: "Looking For Gophers", game_code: "3a3df38a88a964504e4b0d9fe79e669f", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/S4h80yDW/KY-007-Looking-For-Gophers.png" },
        { game_name: "King Of The Hammer", game_code: "34d8fe6f50f63e3e08909b4cffb9c96c", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/8Lkh2jYB/KY-008-King-Of-The-Hammer.png" },
        { game_name: "Mines", game_code: "2cd2df27a9a6164308a0b13d04bb58b3", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/n8B85Sb8/KY-009-Mines.png" },
        { game_name: "Mines2", game_code: "d701f5a04f96cde58b684105d06b0fb5", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/k2rZSTpj/KY-010-Mines2.png" },
        { game_name: "Secret Tetris", game_code: "f1f4fd2ae86664a0eca72c18a16f88ea", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/h1nD4bZZ/KY-011-Secret-Tetris.png" },
        { game_name: "Survivor", game_code: "cc2dd6301b649aa597c172132ddc486c", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/R4DtBjH7/KY-012-Survivor.png" },
        { game_name: "Lucky Wheel", game_code: "4b6d8a3f28ea08e921543d556b043475", game_type: "Table Game", game_image: "https://i.ibb.co.com/wFKq0rrj/KY-013-Lucky-Wheel.png" },
        { game_name: "Poking Fortune", game_code: "a2c1ede663a14ce53102893000016027", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/XrJ8MVFY/KY-014-Poking-Fortune.png" },

        { game_name: "Happy Encounter", game_code: "bfd417aef228670d3285c02093a4ffc6", game_type: "Lottery Game", game_image: "https://i.ibb.co.com/x8Mzy0m5/KY-015-Happy-Encounter.png" },
        { game_name: "The God Of Wealth Has Arrived", game_code: "797435cc84db3ccc29e7bc1c8fb3644f", game_type: "Lottery Game", game_image: "https://i.ibb.co.com/zW3yXK9v/KY-016-The-God-Of-Wealth-Has-Arrived.png" },
        { game_name: "Houyi Shot The Suns", game_code: "bb4cc22adbcc8a44a01483d0225d8c58", game_type: "Lottery Game", game_image: "https://i.ibb.co.com/HpkJybr4/KY-017-Houyi-Shot-The-Suns.png" },
        { game_name: "Mahjong God", game_code: "610d7e3f3f3f825cc22d36c00a88ccc6", game_type: "Lottery Game", game_image: "https://i.ibb.co.com/NndHvxvD/KY-018-Mahjong-God.png" },
        { game_name: "Tigerlions Lead To Auspicious", game_code: "eb5a73350de857befecb7b5aeca51f33", game_type: "Lottery Game", game_image: "https://i.ibb.co.com/xtVg1Dd0/KY-019-Tigerlions-Lead-To-Auspicious.png" },
        { game_name: "Great Luck In The Year Of The Dragon", game_code: "4ebd94eafac4533e251e372cd2a0d13f", game_type: "Lottery Game", game_image: "https://i.ibb.co.com/qLdwLSrZ/KY-020-Great-Luck-In-The-Year-Of-The-Dragon.png" },

        { game_name: "Battle Royale", game_code: "6af81100fde4aa5f884a63ed6881322e", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Y4q2XDX5/KY-021-Battle-Royale.png" },
        { game_name: "Candle In The Tomb", game_code: "042fb3347ab19a3fda2d83768df20b20", game_type: "Slot Game", game_image: "https://i.ibb.co.com/mr6Ds3MM/KY-022-Candle-In-The-Tomb.png" },
        { game_name: "Fortune Fafafa", game_code: "33bfdcfc4dff3c81faf1b534d2acba21", game_type: "Slot Game", game_image: "https://i.ibb.co.com/tTq24BgY/KY-023-Fortune-Fafafa.png" },
        { game_name: "Gold Digger", game_code: "05f4c53f5dc0a6e13551c3b98cad0125", game_type: "Slot Game", game_image: "https://i.ibb.co.com/vKVsxkN/KY-024-Gold-Digger.png" },
        { game_name: "Golden Tiger", game_code: "8b5d6fbb00064bf0dda1ef5148f606ad", game_type: "Slot Game", game_image: "https://i.ibb.co.com/8nJy00RL/KY-025-Golden-Tiger.png" },
        { game_name: "King Of Glory", game_code: "e08ab293b15f5510738c9c27450fd29c", game_type: "Slot Game", game_image: "https://i.ibb.co.com/tMqMYsLv/KY-026-King-Of-Glory.png" },
        { game_name: "Lucky Panda", game_code: "b923f3f7990c7b308adaf8bc02f79074", game_type: "Slot Game", game_image: "https://i.ibb.co.com/tMw3n0GF/KY-027-Lucky-Panda.png" },
        { game_name: "Monkey King Black Wukong", game_code: "e9781000b1ef56b1676948d95d1ffd7b", game_type: "Slot Game", game_image: "https://i.ibb.co.com/MDj8CnYh/KY-028-Monkey-King-Black-Wukong.png" },
        { game_name: "Three Kingdoms", game_code: "6544c12c5213dcf4ba132a70d42de52e", game_type: "Slot Game", game_image: "https://i.ibb.co.com/99Zv1nXz/KY-029-Three-Kingdoms.png" },

        { game_name: "MORRA", game_code: "2a70c5aa6d6216d1b0173cc3a66cdd0d", game_type: "Table Game", game_image: "https://i.ibb.co.com/mrJ1Dmy9/KY-030-MORRA.png" },
        { game_name: "NEZHA: FIRE WHEELS", game_code: "275e61dd4913c1b6f22b81913fc52ccc", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/qMvp9V11/KY-031-NEZHA-FIRE-WHEELS.png" },
        { game_name: "HIDE AND SEEK", game_code: "9a114ae6e3ac7432c98aa179b268726d", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/Mx22nbH5/KY-032-HIDE-AND-SEEK.png" },



        { game_name: "Hong Kong Stud", game_code: "570faf73e44ce8317c519d1392123a72", game_type: "Poker Game", game_image: "https://i.ibb.co.com/TMw8b8Pt/KY-035-Hong-Kong-Stud.png" },
        { game_name: "Karmic SicBo", game_code: "24290a4b194b7a87b89748d3dbe7ecc9", game_type: "Table Game", game_image: "https://i.ibb.co.com/PvQkDZt4/KY-036-Karmic-Sic-Bo.png" },
        { game_name: "1v1 BullBull", game_code: "e85da661176abbd77f4173fcdbb5603b", game_type: "Poker Game", game_image: "https://i.ibb.co.com/23rSTTzf/KY-037-1v1-Bull-Bull.png" },
        { game_name: "Bet 3 Players BullBull", game_code: "1b91bfd77a884d3151595fe4871df21c", game_type: "Poker Game", game_image: "https://i.ibb.co.com/HLgWXHp4/KY-038-Bet-3-Players-Bull-Bull.png" },
        { game_name: "Casino Poker", game_code: "50ed8806c7c00b4e4395b291349d6e60", game_type: "Poker Game", game_image: "https://i.ibb.co.com/Cp5hCWTg/KY-039-Casino-Poker.png" },
        { game_name: "Golden Bull", game_code: "1b249b62b02b70b7f9fb1e4857ec732a", game_type: "Poker Game", game_image: "https://i.ibb.co.com/jPhwyQr5/KY-040-Golden-Bull.png" }
    ]
};
const habanero = {
    platform: "digital",
    provider: "Habanero",
    games: [
        { game_name: "Treasure Tomb", game_code: "7f54212ad836d61d03f49f4c774b537e", game_type: "Slot Game", game_image: "https://i.ibb.co.com/6c3t2k5M/code-H169-Treasure-Tomb.png" },
        { game_name: "Viking's Plunder", game_code: "7a63c3646216f255413c9c72a81c815e", game_type: "Slot Game", game_image: "https://i.ibb.co.com/whcfhMqc/code-H170-Viking-s-Plunder.png" },
        { game_name: "Weird Science", game_code: "27345e828221561ac6f23036d2b58aee", game_type: "Slot Game", game_image: "https://i.ibb.co.com/7NJLLtdZ/code-H171-Weird-Science.png" },
        { game_name: "Zeus", game_code: "f853e6f24232be760a997db4dca13424", game_type: "Slot Game", game_image: "https://i.ibb.co.com/TM2Ckkv5/code-H172-Zeus.png" },
        { game_name: "Zeus 2", game_code: "0d7248228639d8579efe6eb71c010b89", game_type: "Slot Game", game_image: "https://i.ibb.co.com/KzQXp3mL/code-H173-Zeus-2.png" },

        { game_name: "Caribbean Hold'Em", game_code: "d060803d3810d6c4643923bb5360541e", game_type: "Table Game", game_image: "https://i.ibb.co.com/p6qfx2Kh/code-H174-Caribbean-Hold-Em.png" },
        { game_name: "Caribbean Stud", game_code: "f4edf57a20355ab5126075c76b53be7d", game_type: "Table Game", game_image: "https://i.ibb.co.com/r2M4m7Q1/code-H175-Caribbean-Stud.png" },
        { game_name: "Blackjack 3 Hand", game_code: "bb244b9b1bbbd44bf48880d8e4ee8de2", game_type: "Table Game", game_image: "https://i.ibb.co.com/Y7LMBmCy/code-H176-Blackjack-3-Hand.png" },
        { game_name: "Blackjack Double Exposure 3 Hand", game_code: "185855cfc86f9c8c815e872bb97e7488", game_type: "Table Game", game_image: "https://i.ibb.co.com/CpNsfWnP/code-H177-Blackjack-Double-Exposure-3-Hand.png" },
        { game_name: "American Blackjack", game_code: "d80d37ac665c1bcdb00b529d7b82e0aa", game_type: "Table Game", game_image: "https://i.ibb.co.com/0RGjyrKr/code-H178-American-Blackjack.png" },
        { game_name: "European Roulette", game_code: "84a29dcba174dac10e21cfbbed5e4f4d", game_type: "Table Game", game_image: "https://i.ibb.co.com/Q33M8HJD/code-H179-European-Roulette.png" },
        { game_name: "American Baccarat", game_code: "3531899b7d259dd0cfdec83717e1654c", game_type: "Table Game", game_image: "https://i.ibb.co.com/xS22YTzh/code-H180-American-Baccarat.png" },
        { game_name: "American Baccarat Zero Commission", game_code: "8b575c340acda75dd07931254a0d29cc", game_type: "Table Game", game_image: "https://i.ibb.co.com/FQjKjHJ/code-H181-American-Baccarat-Zero-Commission.png" },
        { game_name: "Sicbo", game_code: "272b9a332c4b8fa4593b55b76a98b674", game_type: "Table Game", game_image: "https://i.ibb.co.com/TBVNfgX6/code-H182-Sicbo.png" },
        { game_name: "Three Card Poker", game_code: "5765cb8ee010ad47d6470cf396a145b5", game_type: "Table Game", game_image: "https://i.ibb.co.com/kVr5kY7s/code-H183-Three-Card-Poker.png" },
        { game_name: "Three Card Poker Deluxe", game_code: "4da272f6cd8a825a3ea69f89813ada90", game_type: "Table Game", game_image: "https://i.ibb.co.com/0py0RBCL/code-H184-Three-Card-Poker-Deluxe.png" },
        { game_name: "War", game_code: "e08d5aca44ddc54419ad60ded84cfaa5", game_type: "Table Game", game_image: "https://i.ibb.co.com/4ZjmdWqJ/code-H185-War.png" },
        { game_name: "Dragon Tiger", game_code: "2e84b25633e4e881a2886adbdb58ade4", game_type: "Table Game", game_image: "https://i.ibb.co.com/rR24Yw7r/code-H186-Dragon-Tiger.png" },


    ],
};
const amigo = {
    platform: "digital",
    provider: "amigo",
    games: [

        { game_name: "WarAge Online", game_code: "2732f87bc0eff51e3115eeedc5d090f3", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Cp5wfBk9/A-133-War-Age-Online.png" },
        { game_name: "88 Hot Pot", game_code: "47c8d7e9286b7153cf8b5aeba81b17f5", game_type: "Slot Game", game_image: "https://i.ibb.co.com/SwPbMjmL/A-135-88-Hot-Pot.png" },

        { game_name: "Hammer Crusher", game_code: "0a6219861815751f5705a8c3c2d41ba7", game_type: "Crash Game", game_image: "https://i.ibb.co.com/Kx3ZcF0r/A-134-Hammer-Crusher.png" },

        { game_name: "Coinboy", game_code: "e9baad4bc75d466f9d2b2b540cd2c32f", game_type: "Slot Game", game_image: "https://i.ibb.co.com/TMpnRvJd/A-104-Coinboy-Riches.png" },
        { game_name: "Football Hits", game_code: "976f89e156e6be57f956b489966a1af8", game_type: "Slot Game", game_image: "https://i.ibb.co.com/kgf6HhSD/A-136-Football-Hits.png" },
        { game_name: "3 Lucky Idols", game_code: "2b1de999fc861b74ce1c9d573f40461c", game_type: "Slot Game", game_image: "https://i.ibb.co.com/chkkPN4f/A-137-3-Lucky-Idols.png" },

        // Fortune Dice could reasonably be categorized as Dice Game
        { game_name: "Fortune Dice", game_code: "75e0c21739d52000cf3046d4e9f2d335", game_type: "Dice Game", game_image: "https://i.ibb.co.com/PG3RGKj0/A-138-Fortune-Dice.png" }
    ]
};
const sevenfivenine = {
    platform: "digital",
    provider: "sevenfivenine",
    games: [
        { game_name: "Wrath Of Olympus III", game_code: "5a60c0a1611bfdc9584d37298d91a47e", game_type: "Slot Game", game_image: "https://i.ibb.co.com/bjBmsnMr/code-759-001-Wrath-Of-Olympus-III.jpg" },
        { game_name: "Fortune Sheep", game_code: "d0b9825e88c779a1e978471fb4a1e1d9", game_type: "Slot Game", game_image: "https://i.ibb.co.com/XrLCqWbn/code-759-002-Fortune-Sheep.jpg" },
        { game_name: "Captain's Treasure", game_code: "0360afcf6b9eaef7cba1d4fbcc936904", game_type: "Slot Game", game_image: "https://i.ibb.co.com/TMpXt1K3/code-759-003-Captain-s-Treasure.jpg" },
        { game_name: "Genie's 3 Fortune", game_code: "030b296ab685051961278c8a70bbc75d", game_type: "Slot Game", game_image: "https://i.ibb.co.com/BVRvzmBj/code-759-004-Genie-s-3-Fortune.jpg" },
        { game_name: "Huge Dollar", game_code: "87bbc562a26bf058901b1f5193d2cb78", game_type: "Slot Game", game_image: "https://i.ibb.co.com/0p355RZy/code-759-005-Huge-Dollar.jpg" },
        { game_name: "JOGO DO BICHO", game_code: "608826a029df0ee0cbe03da385bcc3ca", game_type: "Slot Game", game_image: "https://i.ibb.co.com/SDqxZHJW/code-759-006-JOGO-DO-BICHO.jpg" },
        { game_name: "Glory of Rome", game_code: "db3b9d31eba5370e4545372b29ff3f35", game_type: "Slot Game", game_image: "https://i.ibb.co.com/dJ64DKCJ/code-759-007-Glory-of-Rome.jpg" },
        { game_name: "Sabor Mexicano", game_code: "24aec86c4e766a285491fc628ec8fc1b", game_type: "Slot Game", game_image: "https://i.ibb.co.com/G4PpPBBC/code-759-008-Sabor-Mexicano.jpg" },
        { game_name: "Fortuna Arara", game_code: "35d03a958e3d751d3fc179294f36ad02", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Kjb1k1NG/code-759-009-Fortuna-Arara.jpg" },
        { game_name: "Dragon's Grace", game_code: "6c53d889d73d4ced0fec7d014c3a63bf", game_type: "Slot Game", game_image: "https://i.ibb.co.com/bgtqymY9/code-759-010-Dragon-s-Grace.jpg" },
        { game_name: "Hoard of Aztec gold", game_code: "391442ac1479cbd33c7a32c5f6cdbe7f", game_type: "Slot Game", game_image: "https://i.ibb.co.com/R4vJJCDk/code-759-011-Hoard-of-Aztec-gold.jpg" },
        { game_name: "Rabbit's Grace", game_code: "d3fcf0625b1ebee9346e9d97a5f09c3d", game_type: "Slot Game", game_image: "https://i.ibb.co.com/NnHKM74H/code-759-012-Rabbit-s-Grace.jpg" },
        { game_name: "Tiger's Grace", game_code: "d1bc00db2587ea43b117eb1a87e77443", game_type: "Slot Game", game_image: "https://i.ibb.co.com/B5x791N0/code-759-013-Tiger-s-Grace.jpg" },
        { game_name: "Joker Ace", game_code: "20f1b92486c422ec1544e0008fee7048", game_type: "Slot Game", game_image: "https://i.ibb.co.com/8FzkjR7/code-759-014-Joker-Ace.jpg" },
        { game_name: "Zombie Hunter", game_code: "b57756244e3938bdf3c0c2907ad4ea84", game_type: "Slot Game", game_image: "https://i.ibb.co.com/TDTs66RW/code-759-015-Zombie-Hunter.jpg" },
        { game_name: "Hot & Wild Beach", game_code: "79e217483ea3d5c48f3a8dbc7b13aa4b", game_type: "Slot Game", game_image: "https://i.ibb.co.com/fV3DXsQ3/code-759-016-Hot-Wild-Beach.jpg" },

        // Mini Games
        { game_name: "Chicken Dash", game_code: "9ebfa4a7fbd1198eab671a40ffdbc4e6", game_type: "Mini Game", game_image: "https://i.ibb.co.com/Kc6X08BK/code-759-017-Chicken-Dash.jpg" },

        // Slot Games
        { game_name: "Monkey's Grace", game_code: "7ae2aee5fc1a25d93df371f37cfac843", game_type: "Slot Game", game_image: "https://i.ibb.co.com/xtbN4XGt/code-759-018-Monkey-s-Grace.jpg" },
        { game_name: "Phoenix Legend", game_code: "d953c057cd7086acd609c04dc47c1ae3", game_type: "Slot Game", game_image: "https://i.ibb.co.com/wNnxNfYT/code-759-019-Phoenix-Legend.jpg" },
        { game_name: "Empire of Gold", game_code: "1a7d3dae8d898019a55c6cdda1a47d51", game_type: "Slot Game", game_image: "https://i.ibb.co.com/fVn3G9FM/code-759-020-Empire-of-Gold.jpg" }
    ],
};
const rectangle = {
    platform: "digital",
    provider: "rectangle",
    games: [


        { game_name: "Firecrackers Fortune", game_code: "2786874b1841a6fc7c9c187b1185801e", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Mwz8scq/RC-001-Firecrackers-Fortune.jpg" },

        { game_name: "Lucky Caramelo", game_code: "7bb35ecaa9902b60d6886cc04e2da31f", game_type: "Slot Game", game_image: "https://i.ibb.co.com/spC03QL6/RC-009-Lucky-Caramelo.png" },
        { game_name: "Fortune Pig", game_code: "0d502ece011130826391437281771a9e", game_type: "Slot Game", game_image: "https://i.ibb.co.com/TMpYGRgF/RC-010-Fortune-Pig.png" },

        { game_name: "Chicken Uncrossable", game_code: "acfde5823c10506b0605513b9cc8bc16", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/nqCdH0vg/RC-048-Chicken-Uncrossable.png" },
        { game_name: "Prosperity Clash", game_code: "3c41f17afd46ccb49660126e516f64f1", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/39Z14jfb/RC-047-Prosperity-Clash.png" },

        { game_name: "Dice", game_code: "d0d534aa1c63187d95b90c20a4ba36c5", game_type: "Table Game", game_image: "https://i.ibb.co.com/BVRSgC3W/RC-060-Dice.png" },
        { game_name: "Plinko", game_code: "fdd8d1d7f13b194223b06994f17182d6", game_type: "Plinko Game", game_image: "https://i.ibb.co.com/1YVSy8zQ/RC-061-Plinko.png" },
        { game_name: "Crash", game_code: "4498e715a1c6e8004d192ed27e38c022", game_type: "Crash Game", game_image: "https://i.ibb.co.com/F4gFS54Y/RC-062-Crash.png" },
        { game_name: "Keno", game_code: "291bb69cff04bde39972df169dbda157", game_type: "Lottery Game", game_image: "https://i.ibb.co.com/j9r7R4WS/RC-063-Keno.png" },
        { game_name: "Balonismo", game_code: "5816f8416ae01165cec3b196a7dcb6fa", game_type: "Crash Game", game_image: "https://i.ibb.co.com/VYGv7S3r/RC-064-Balonismo.png" },
        { game_name: "Limbo", game_code: "7cda3464f837e187913e873ff748aad4", game_type: "Table Game", game_image: "https://i.ibb.co.com/5xMWm5Sb/RC-065-Limbo.png" },
        { game_name: "Mines", game_code: "a0bc68cb397926bea94937694b1deeac", game_type: "Mine Game", game_image: "https://i.ibb.co.com/N6KdwcDH/RC-053-Mines.png" },
        { game_name: "Wheel", game_code: "d4fac7bbca9a6b6a19fe03e07a09b0ca", game_type: "Wheel Game", game_image: "https://i.ibb.co.com/dsgFbVtS/RC-054-Wheel.png" },
        { game_name: "Black Jack", game_code: "4d2a9cbbf2206d45c3b12a9356858aea", game_type: "Table Game", game_image: "https://i.ibb.co.com/tpYK6rc0/RC-055-Black-Jack.png" },
        { game_name: "One Wrong Step", game_code: "e9f2f08fb78f15c86bc718408e68dfbc", game_type: "Lottery ", game_image: "https://i.ibb.co.com/RGJtZfb7/RC-056-One-Wrong-Step.png" },
        { game_name: "Coin Race", game_code: "09c689020e0678ff71bcaaae4649a7f4", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/DDb89vWq/RC-057-Coin-Race.png" },
        { game_name: "Coin Flip", game_code: "2a8216c65d2900b3d1fc61d7aed1978c", game_type: "Table Game", game_image: "https://i.ibb.co.com/B26fKhrn/RC-058-Coin-Flip.png" },
        { game_name: "Roulette", game_code: "33c4959d2ff6de04c44dda97e85f98c1", game_type: "Table Game", game_image: "https://i.ibb.co.com/zTMQnpT6/RC-059-Roulette.png" },

        { game_name: "Dragon Crash", game_code: "76a532ef0ebb488d7ac380aa71c10f0b", game_type: "Crash Game", game_image: "https://i.ibb.co.com/fwm9cfm/RC-049-Dragon-Crash.png" },

        { game_name: "Diamonds", game_code: "b3d84e67e3287b1c15ea485329bc694c", game_type: "Lottery", game_image: "https://i.ibb.co.com/4gJ3PB2V/RC-067-Diamonds.png" },
        { game_name: "Hilo", game_code: "08be49c38c00d4036f54e6c6dae83388", game_type: "Table Game", game_image: "https://i.ibb.co.com/VWZx235T/RC-068-Hilo.png" },
        { game_name: "Train", game_code: "abe8b67032b06a6bf72579738e4b67f6", game_type: "Crash Game", game_image: "https://i.ibb.co.com/RT54d4jH/RC-071-Train.png" },

    ]
};
const DreamGaming = {
    platform: "digital",
    provider: "DreamGaming",
    games: [
        { game_name: "DreamGaming", game_code: "8737e1ef982bd7ba41ec02c1823626f9", game_type: "CasinoLive", game_image: "https://i.ibb.co.com/LdNRMfBt/DG-001-Dream-Gaming.png" },

    ],
};



const hp = {
    platform: "digital",
    provider: "hp",
    games: [
        // Crash Games
        { game_name: "Air Jet", game_code: "1eb74f99e1ec8b92de107ec15a2fbab0", game_type: "Crash Game", game_image: "https://i.ibb.co.com/2YsXnDBF/HP-001-Air-Jet.png" },
        { game_name: "StarX", game_code: "ecb85ab8f21b8ba38b5a02c75439f986", game_type: "Crash Game", game_image: "https://i.ibb.co.com/gL8DYFTg/HP-002-Star-X.png" },
        { game_name: "Fortune Crash", game_code: "57d3e23fd19fcaf39e3f21296abda937", game_type: "Crash Game", game_image: "https://i.ibb.co.com/xKTSqm5c/HP-003-Fortune-Crash.png" },
        { game_name: "Meta Crash", game_code: "869a80ef07b52fd28ecbd9635f975f86", game_type: "Crash Game", game_image: "https://i.ibb.co.com/mVY7CJ8q/HP-004-Meta-Crash.png" },
        { game_name: "Tropicana", game_code: "c2d868c5e3e0c38c124bb92542d799a2", game_type: "Crash Game", game_image: "https://i.ibb.co.com/hJ9cQY3j/HP-005-Tropicana.png" },
        { game_name: "Crime Empire", game_code: "3fb8f8cc20d38890a9aa683795e04b8a", game_type: "Crash Game", game_image: "https://i.ibb.co.com/Wp33YrzR/HP-006-Crime-Empire.png" },
        { game_name: "Astronaut Rivals", game_code: "36af87938c05968e09f3138431c96955", game_type: "Crash Game", game_image: "https://i.ibb.co.com/yTGJnn1/HP-023-Astronaut-Rivals.png" },

        // Table Games
        { game_name: "Dice", game_code: "5bc5edc9da839e0aecd29a8e14aad65d", game_type: "Table Game", game_image: "https://i.ibb.co.com/nqHXG4rG/HP-008-Dice.png" },
        { game_name: "Hilo", game_code: "8b8d096e7f9f8bd9b0a1166ac483b8c0", game_type: "Table Game", game_image: "https://i.ibb.co.com/6ccydg3F/HP-010-Hilo.png" },
        { game_name: "Coin Flip", game_code: "c5d165f1d582fc51d50f00d9292b3c97", game_type: "Table Game", game_image: "https://i.ibb.co.com/Tq4BT4F9/HP-012-Coin-Flip.png" },
        { game_name: "Blackjack", game_code: "1ad2a0d2c8f78836f5d9747b6fb915ac", game_type: "Table Game", game_image: "https://i.ibb.co.com/Y4QkLFJZ/HP-014-Blackjack.png" },
        { game_name: "Poker", game_code: "3e18331df2f26579367af0e9b8f8993b", game_type: "Table Game", game_image: "https://i.ibb.co.com/Hf6m2HXc/HP-015-Poker.png" },

        // Lottery Games
        { game_name: "Keno", game_code: "8956f9db526abbc3db296c6319645f83", game_type: "Lottery Game", game_image: "https://i.ibb.co.com/84rqDfxy/HP-011-Keno.png" },

        // Plinko Games
        { game_name: "Plinko", game_code: "eefd53e6076e4083b732ac50e0191a92", game_type: "Plinko Game", game_image: "https://i.ibb.co.com/d4Fs74t4/HP-009-Plinko.png" },
        { game_name: "Gods of Plinko", game_code: "66455b80ed9d5fb710f6762cc791c76c", game_type: "Plinko Game", game_image: "https://i.ibb.co.com/bjNngjHp/HP-022-Gods-of-Plinko.png" },

        // Instant Games
        { game_name: "Mines", game_code: "f7c684ecf897372050523782c8a024bb", game_type: "Mine Game", game_image: "https://i.ibb.co.com/9H8fM4jY/HP-007-Mines.png" },
        { game_name: "Penalty", game_code: "118559f0194423e0144186351e978c9b", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/TBkqtp2v/HP-013-Penalty.png" },
        { game_name: "Astronaut", game_code: "0f257734e9e190f27e2530daad00c730", game_type: "Crash Game", game_image: "https://i.ibb.co.com/qLMYfbf4/HP-016-Astronaut.png" },
        { game_name: "Crash", game_code: "3c67d0096c90b842bb293a5d8a37b06c", game_type: "Crash Game", game_image: "https://i.ibb.co.com/DH0qyZVq/HP-017-Crash.png" },
        { game_name: "Double", game_code: "ab7798205d55ea1d7bf9476651b76abe", game_type: "Lottery Game", game_image: "https://i.ibb.co.com/9mW4nBkR/HP-018-Double.png" },
        { game_name: "Chicken Pirate", game_code: "fce08e0b1c1bd905d4b5d8f3505e458e", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/5hTCPGjx/HP-019-Chicken-Pirate.png" },
        { game_name: "Pump It", game_code: "aa684aa0f9576d9186efab0d809a560f", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/QFkzq5JS/HP-020-Pump-It.png" },
        { game_name: "Tappy Bird", game_code: "87fcb877aec6e7497817f1489ded66ac", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/hJjMpCCG/HP-028-Tappy-Bird.png" },
        { game_name: "Chicken Wars", game_code: "1e0a327a7d22e8d4fe59cd45069c2b46", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/8gcHH7zH/HP-029-Chicken-Wars.png" },
        { game_name: "Only Match", game_code: "74258446b41e4cc315f4a7e2e26a4ba8", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/B5005Cbd/HP-031-Only-Match.png" },
        { game_name: "Punch It", game_code: "e7d1edab1d3854752efb388d1ba2b812", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/7dJbDL2y/HP-032-Punch-It.png" },

        // Arcade Games
        { game_name: "Chicken Train", game_code: "b8701e12058ea73bc6d04ed585fc97ac", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/p6PnvGYb/HP-021-Chicken-Train.png" },
        { game_name: "Chicken Subway", game_code: "c9c6f6cda34c8d07b00e8717720f3e37", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/wFHf3nDy/HP-025-Chicken-Subway.png" },
        { game_name: "Chicken Heart", game_code: "22d7881cb4807c69e6838e685232ef71", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/Wp4MXbDc/HP-026-Chicken-Heart.png" },
        { game_name: "Chicken Tour", game_code: "3dcb3aee1642c745f9ef8766f5f3eecd", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/ZpLDLx3D/HP-027-Chicken-Tour.png" },

        // Slot Games
        { game_name: "SpinRa", game_code: "8793b85873fbf2c4a5094537722e290b", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Hpttt45K/HP-024-Spin-Ra.png" },
        { game_name: "Chicken Champions", game_code: "8e785446f7c141de4cb17b25522e40a8", game_type: "Slot Game", game_image: "https://i.ibb.co.com/fVqvMbbJ/HP-030-Chicken-Champions.png" }
    ],
};

const pix = {
    platform: "digital",
    provider: "pix",
    games: [
        // Instant / Lottery / Table / Arcade Games
        { game_name: "Pirate dice", game_code: "3a6ea138a8a5bf43167014d5aca7e0ae", game_type: "Table Game", game_image: "https://i.ibb.co.com/8nBjKtTD/PIX-001-Pirate-dice.png" },
        { game_name: "Storm riders", game_code: "a2641f734c657aa2d887292083c3fc98", game_type: "Crash Game", game_image: "https://i.ibb.co.com/jv5kckGf/PIX-002-Storm-riders.png" },
        { game_name: "Piggy Bar", game_code: "1fd072f0b3577300db8562faf52f1ef4", game_type: "Lottery Game", game_image: "https://i.ibb.co.com/yc1xkR75/PIX-003-Piggy-Bar.png" },
        { game_name: "I'm A Cat", game_code: "903673bbffff599fccd76aa21d83543d", game_type: "Lottery Game", game_image: "https://i.ibb.co.com/jvrX48ms/PIX-004-I-m-A-Cat.png" },
        { game_name: "Captain Dodger", game_code: "5d172ef0a4988ba5a98332ff20f03fe8", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/8Z25hZ1/PIX-005-Captain-Dodger.png" },
        { game_name: "Rock Scissors Paper", game_code: "9ac0aaf24d6b95bb40b46e2ad689bc54", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/ZRGwq3fK/PIX-006-Rock-Scissors-Paper.png" },
        { game_name: "Chickeno", game_code: "eb0ef68759ebea80946931f46f4038fd", game_type: "Crash Game", game_image: "https://i.ibb.co.com/XfnDH6X4/PIX-007-Chickeno.png" },
        { game_name: "Call Of The Jungle", game_code: "ec65256962d3104084bfdec811f8df42", game_type: "Lottery Game", game_image: "https://i.ibb.co.com/xtN455j2/PIX-008-Call-Of-The-Jungle.png" },
        { game_name: "Wish Of Fortune", game_code: "cd9af8a7cedf860327241308493c1931", game_type: "Lottery Game", game_image: "https://i.ibb.co.com/RTq6jQGC/PIX-009-Wish-Of-Fortune.png" },
        { game_name: "Monk Frogs", game_code: "d097ef7b443820f30d47867673afdf61", game_type: "Lottery Game", game_image: "https://i.ibb.co.com/6cVByGMt/PIX-010-Monk-Frogs.png" },
        { game_name: "Santa's Little Helper", game_code: "dd507585055131d8264ab1c734130ea8", game_type: "Lottery Game", game_image: "https://i.ibb.co.com/vv3mJ5sn/PIX-011-Santa-s-Little-Helper.png" },
        { game_name: "King Thimbles", game_code: "09907ece09d7b397b8b709b8b5de5838", game_type: "Table Game", game_image: "https://i.ibb.co.com/V0cHVL9j/PIX-012-King-Thimbles.png" },
        { game_name: "Castle Smashers", game_code: "0fccbf41e367266af068ce729cfd0552", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/8DjFVbSd/PIX-013-Castle-Smashers.png" },
        { game_name: "Grave Hilo", game_code: "96942fef553bcbf416cc25ef36be02de", game_type: "Table Game", game_image: "https://i.ibb.co.com/rGQ0Kvvb/PIX-014-Grave-Hilo.png" },
        { game_name: "Fox Job", game_code: "6c929de53f497aa3e20b1189a22dafb6", game_type: "Lottery Game", game_image: "https://i.ibb.co.com/6cwfpMwv/PIX-015-Fox-Job.jpg" },
        { game_name: "Swoop", game_code: "b1830cf87c08a524c4ca7981ffc4e499", game_type: "Crash Game", game_image: "https://i.ibb.co.com/Q3KbQG25/PIX-016-Swoop.png" },
        { game_name: "Sheriff's Coins", game_code: "5513b58ec997ad6716309d440673bfc7", game_type: "Table Game", game_image: "https://i.ibb.co.com/QvLT4dXP/PIX-020-Sheriff-s-Coins.png" },
        { game_name: "Ha-Ha-Hamster", game_code: "ac3450b1ac5292751f55ff447ee3e028", game_type: "Lottery Game", game_image: "https://i.ibb.co.com/FkqyJbyN/PIX-030-Ha-Ha-Hamster.png" },

        // Slot Games

        { game_name: "La Mafia", game_code: "45c12728f3f2842b1608f14f5a3d1be3", game_type: "Slot Game", game_image: "https://i.ibb.co.com/6QQsjtz/PIX-019-La-Mafia.png" },
        { game_name: "Fruit Luck", game_code: "5b5814ee82460b9027e0d6d694bba704", game_type: "Slot Game", game_image: "https://i.ibb.co.com/QFQRqgp9/PIX-021-Fruit-Luck.png" },

        { game_name: "Hit & Fly", game_code: "f43e380f81cc8bb175b6a0a1ba8215e2", game_type: "Slot Game", game_image: "https://i.ibb.co.com/N6mjrJfH/PIX-051-Hit-Fly.jpg" },
        { game_name: "Saloon Lucky Horse", game_code: "da7b8a3e7364ecc5d5e242481703cf43", game_type: "Slot Game", game_image: "https://i.ibb.co.com/C5D0XMtr/PIX-052-Saloon-Lucky-Horse.jpg" },


        // Crash Games
        { game_name: "Cash Farming", game_code: "3f9c378c8410c77d0184a3a3694d7776", game_type: "Crash Game", game_image: "https://i.ibb.co.com/zVrKHbjj/PIX-053-Cash-Farming.jpg" }
    ],
};

const koolbet = {
    platform: "digital",
    provider: "koolbet",
    games: [
        { game_name: "andarbahar", game_code: "a6d2432bbe2378c7be0837f2f2b1555e", game_type: "Andar Bahar Game", game_image: "https://i.ibb.co.com/WNygGktJ/KB-01-andarbahar.png" },

        { game_name: "aviator pro", game_code: "e9e541542944be871504d9a3e03fa9b2", game_type: "Crash Game", game_image: "https://i.ibb.co.com/MkffQhBW/KB-02-aviator-pro.png" },

        { game_name: "sevenupsevendown", game_code: "209392817b4b9d4c532fba545852f478", game_type: "Table Game", game_image: "https://i.ibb.co.com/qLSypSqN/KB-03-sevenupsevendown.png" },

        { game_name: "teenpatti", game_code: "9163f0170e926a380d11e2f7972c42cf", game_type: "Poker Game", game_image: "https://i.ibb.co.com/wZ6DbLRp/KB-04-teenpatti.png" },

        { game_name: "threepatti", game_code: "a963f17fca9e0b9304a7c951ca897555", game_type: "Poker Game", game_image: "https://i.ibb.co.com/qYSg3P4v/KB-05-threepatti.png" },

        { game_name: "dragonvstiger", game_code: "2393d84446bc1f7cbadc0d50268aca7d", game_type: "Dragon Tiger Game", game_image: "https://i.ibb.co.com/VfQcvrc/KB-06-dragonvstiger.png" },

        { game_name: "RummyDeals", game_code: "84a81aad7c51a4c1ce33da10996971a0", game_type: "Rummy Game", game_image: "https://i.ibb.co.com/LhkBx3mb/KB-07-Rummy-Deals.png" },

        { game_name: "RummyPoints", game_code: "f9612cd1e3baa179c20a7686970e7447", game_type: "Rummy Game", game_image: "https://i.ibb.co.com/LD6F0b95/KB-08-Rummy-Points.png" },

        { game_name: "money coming", game_code: "18c31772de61a747a93bc5246b9e9287", game_type: "Slot Game", game_image: "https://i.ibb.co.com/rgpWBJC/KB-09-money-coming.png" },

        { game_name: "Dragon VS Tiger 2", game_code: "9b5491560344c0bacc269c039771c56a", game_type: "Dragon Tiger Game", game_image: "https://i.ibb.co.com/sdCfxrxp/KB-10-Dragon-VS-Tiger-2.png" },

        { game_name: "Chicken road2", game_code: "ba215a050fd21b467b75a2d77f8626e7", game_type: "Crash Game", game_image: "https://i.ibb.co.com/tTC2phzS/KB-11-Chicken-road2.png" },

        { game_name: "Squid game", game_code: "ba67d3117063f1d0376e98eb6807771b", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/wNDZXZnj/KB-12-Squid-game.png" }
    ]
};
const smartsoft = {
    platform: "digital",
    provider: "smartsoft",
    games: [
        { game_name: "JetX", game_code: "2e815f80a5a87b0255c130c00d95a71e", game_type: "Crash Game", game_image: "https://i.ibb.co.com/DD4MSHyb/SS-01-Jet-X.jpg" },
        { game_name: "Balloon", game_code: "b869a83fc241533c5422dad27340a0ea", game_type: "Crash Game", game_image: "https://i.ibb.co.com/v6kYbdLT/SS-02-Balloon.png" },
        { game_name: "FootballX", game_code: "0487c9d22cea1278b01503a7d15ba699", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/782zrb6/SS-03-Football-X.jpg" },
        { game_name: "PlinkoX", game_code: "e38dd01866d8e669cd032f00b8b2df8a", game_type: "Plinko Game", game_image: "https://i.ibb.co.com/spg3rYjr/SS-04-Plinko-X.jpg" },
        { game_name: "MineIsland", game_code: "00c415d15a4cdbbca0e22f0140fb0322", game_type: "Mine Game", game_image: "https://i.ibb.co.com/fzT3L7Bs/SS-05-Mine-Island.jpg" },
        { game_name: "RollX", game_code: "1dde1cc0e2f8c1c7af6f2cef698e00a6", game_type: "Dice Game", game_image: "https://i.ibb.co.com/pj2jxVm2/SS-06-Roll-X.jpg" },
        { game_name: "Smash X", game_code: "d2907544c24c61c35313dd1a7498a6eb", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/pjd3j37v/SS-07-Smash-X.png" },
        { game_name: "Cappadocia", game_code: "139dda09dae30b1c8cd91bc3014c0e45", game_type: "Crash Game", game_image: "https://i.ibb.co.com/4gmX6q8s/SS-08-Cappadocia.jpg" },
        { game_name: "HunterX", game_code: "6bf7173090f852c2eb4757d73cfd69f6", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/nNFdcw0W/SS-09-Hunter-X.jpg" },
        { game_name: "HelicopterX", game_code: "6030d4bfb5fa164ab1b5e10aa4a27435", game_type: "Crash Game", game_image: "https://i.ibb.co.com/8LFTXTKh/SS-10-Helicopter-X.jpg" },
        { game_name: "CricketX", game_code: "188e43c0545c6690800d12de5018b17f", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/s9Bj0k22/SS-11-Cricket-X.jpg" },
        { game_name: "Crazy HuntX", game_code: "5b31f83e338a50d2187eba7ffd6362a2", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/rGf77G57/SS-12-Crazy-Hunt-X.jpg" },
        { game_name: "SpinX", game_code: "8295d7fbf93e4f182f4b056b2c95f856", game_type: "Wheel Game", game_image: "https://i.ibb.co.com/HTNP52fY/SS-13-Spin-X.jpg" },
        { game_name: "JetX3", game_code: "0bf2d88c9f5811d9c514bd9a6756d7f8", game_type: "Crash Game", game_image: "https://i.ibb.co.com/39bpqdJ5/SS-14-Jet-X3.png" },
        { game_name: "DoubleX", game_code: "0e42e68470278b87181c16850924d438", game_type: "Coin Flip Game", game_image: "https://i.ibb.co.com/KpS9pFgb/SS-15-Double-X.jpg" },
        { game_name: "TowerX", game_code: "5fa811450c40fda4caba581f6f10f2aa", game_type: "Tower Game", game_image: "https://i.ibb.co.com/s95gGMcx/SS-16-Tower-X.jpg" },
        { game_name: "Crash Duel X", game_code: "d901f78f875b497e577785c7e20ff99f", game_type: "Crash Game", game_image: "https://i.ibb.co.com/xtNcY12F/SS-18-Crash-Duel-X.jpg" },
        { game_name: "Classic Keno", game_code: "d2ff19da63c7fa51b9ef41fda3ef32da", game_type: "Keno Game", game_image: "https://i.ibb.co.com/HLn8Z1Kz/SS-44-Classic-Keno.jpg" },
        { game_name: "Russian Keno", game_code: "c3aea2ca240d56ae656fb4cdf008763c", game_type: "Keno Game", game_image: "https://i.ibb.co.com/jkJzS2Wd/SS-45-Russian-Keno.jpg" },
        { game_name: "Cheesy Road", game_code: "010deb3eed02422b65987a405b1b6272", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/bMR43fpQ/SS-46-Cheesy-Road.jpg" },

        { game_name: "Virtual Roulette", game_code: "5c4b343e08b7d06d26abce35e7ae6cfe", game_type: "Casino Game", game_image: "https://i.ibb.co.com/pt5Dr82/SS-41-Virtual-Roulette.jpg" },
        { game_name: "Virtual Burning Roulette", game_code: "eff39248befc98e40125b171db58d2e0", game_type: "Casino Game", game_image: "https://i.ibb.co.com/m5s8Tg61/SS-42-Virtual-Burning-Roulette.jpg" },
        { game_name: "Virtual Classic Roulette", game_code: "bd7fd3e58b5f7b8aab5145275d79a2ef", game_type: "Casino Game", game_image: "https://i.ibb.co.com/RTDVhbpZ/SS-43-Virtual-Classic-Roulette.jpg" },

        { game_name: "MultiHot5", game_code: "d14c7bee006243f2c871f948567cd6de", game_type: "Slot Game", game_image: "https://i.ibb.co.com/tP3KJyGK/SS-21-Multi-Hot5.jpg" },
        { game_name: "Multi Hot Ways", game_code: "d1b3c0d5a9244f091326d5b67326be29", game_type: "Slot Game", game_image: "https://i.ibb.co.com/WNf0FLmj/SS-22-Multi-Hot-Ways.jpg" },
        { game_name: "Burning Ice", game_code: "80d9739d8f8c28efed374f92004aeff9", game_type: "Slot Game", game_image: "https://i.ibb.co.com/N6WtcZS1/SS-23-Burning-Ice.jpg" },
        { game_name: "Wild & Gods", game_code: "0c6784230fa2e9a1025b94e5f922db20", game_type: "Slot Game", game_image: "https://i.ibb.co.com/nMPH5tdm/SS-26-Wild-Gods.jpg" },
        { game_name: "Book of Futuria", game_code: "70aa2b994c771293caf6e293ad558184", game_type: "Slot Game", game_image: "https://i.ibb.co.com/NnQ24JSy/SS-27-Book-of-Futuria.jpg" }
    ]
};

const galaxsys = {
    platform: "digital",
    provider: "galaxsys",
    games: [
        { game_name: "Cash Show", game_code: "cfe88c2cd101a134c8d9c00d5e916a60", game_type: "Crash Game", game_image: "https://i.ibb.co.com/C5yjBdy2/G-001-Cash-Show.png" },
        { game_name: "Crash", game_code: "677eceb1fc0278ea6f57e53f3141f562", game_type: "Crash Game", game_image: "https://i.ibb.co.com/jP3Kyf28/G-002-Crash.png" },
        { game_name: "Rocketon", game_code: "0b880e4904c700af5fdd4eb7dc388e80", game_type: "Crash Game", game_image: "https://i.ibb.co.com/qY1MZfRV/G-003-Rocketon.png" },

        { game_name: "Keno 10 (1 Minute)", game_code: "5dbad5d6886163b0e8b1e7b3d2857019", game_type: "Keno Game", game_image: "https://i.ibb.co.com/LdP0B9RK/G-004-Keno-10-1-Minute.png" },
        { game_name: "Keno 10 (2 Minute)", game_code: "3f10050e070b97a74ff3571dc823a79b", game_type: "Keno Game", game_image: "https://i.ibb.co.com/LdP0B9RK/G-004-Keno-10-1-Minute.png" },
        { game_name: "Keno 8 (1 Minute)", game_code: "9a2a5ad7ebf1660a23b2b3c0a6ccf729", game_type: "Keno Game", game_image: "https://i.ibb.co.com/pjY7KFpX/G-006-Keno-8-1-Minute.png" },
        { game_name: "Keno 8 (2 Minute)", game_code: "32eea3e1a28377585dd6ba3e275a1c13", game_type: "Keno Game", game_image: "https://i.ibb.co.com/pjY7KFpX/G-006-Keno-8-1-Minute.png" },
        { game_name: "Keno Express", game_code: "3afe06de0dbaa6ef8d406d846f099b4e", game_type: "Keno Game", game_image: "https://i.ibb.co.com/TDyTDktm/G-008-Keno-Express.png" },

        { game_name: "Penalty", game_code: "2631ce8fa647ee05bee93e9d63e137b7", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/8L65MZ8m/G-009-Penalty.png" },
        { game_name: "SicBo", game_code: "801d4f535e7ec55160543ec83f5ac2c5", game_type: "Dice Game", game_image: "https://i.ibb.co.com/B5f3QJF2/G-010-Sic-Bo.png" },
        { game_name: "Hilo", game_code: "b594799de8f02ddf27f0e04f1654e298", game_type: "HiLo Game", game_image: "https://i.ibb.co.com/WvnHnLwn/G-011-Hilo.png" },

        { game_name: "BlackJack", game_code: "f5bb302b5f5772556db4ba37188e1e3f", game_type: "Blackjack Game", game_image: "https://i.ibb.co.com/7xHxs2cL/G-012-Black-Jack.png" },
        { game_name: "GoldenRA", game_code: "568b72d78f61ad38f317f183ba1efa2b", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/d035FBN3/G-013-Golden-RA.png" },
        { game_name: "Mr.Thimble", game_code: "2779858f78ce08209c4fcf6198f32ac7", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/9mxt5KZw/G-014-Mr-Thimble.png" },

        { game_name: "Crasher", game_code: "51c48ce8916dcb04fc92d84f7178db29", game_type: "Crash Game", game_image: "https://i.ibb.co.com/rftMHX2w/G-015-Crasher.png" },
        { game_name: "NinjaCrash", game_code: "f885b2373b51f7d1853a2c2d6ef9a75e", game_type: "Crash Game", game_image: "https://i.ibb.co.com/QvfSXCBn/G-016-Ninja-Crash.png" },
        { game_name: "Plinkoman", game_code: "cae12a5fada53095e321f4d7111b144a", game_type: "Plinko Game", game_image: "https://i.ibb.co.com/jZTLXrpr/G-017-Plinkoman.png" },
        { game_name: "Jungle Wheel", game_code: "68c23eef4327e0328981e66420f33ae2", game_type: "Wheel Game", game_image: "https://i.ibb.co.com/wrKfMn3d/G-018-Jungle-Wheel.png" },
        { game_name: "Roulette X", game_code: "5329394bbfe1a06066eda99351a2942b", game_type: "Roulette Game", game_image: "https://i.ibb.co.com/s9DpDZY1/G-019-Roulette-X.png" },
        { game_name: "Coin Flip", game_code: "6b6612717230df83c3bff6fd07fdd928", game_type: "Coin Flip Game", game_image: "https://i.ibb.co.com/cKBVfMCh/G-020-Coin-Flip.png" },
        { game_name: "Scratch Map", game_code: "14ca0a134762317e0d539157d0d8dcb9", game_type: "Scratch Game", game_image: "https://i.ibb.co.com/B2PFrFQP/G-021-Scratch-Map.png" },
        { game_name: "Magic Dice", game_code: "23e035c950b266f55fe004fdd78ea6c7", game_type: "Dice Game", game_image: "https://i.ibb.co.com/YFG9KfdD/G-022-Magic-Dice.png" },
        { game_name: "Totem", game_code: "c743bb6a8b56587e24a1d0c17a7fcb7d", game_type: "Tower Game", game_image: "https://i.ibb.co.com/CDhLg6k/G-023-Totem.png" },
        { game_name: "F Mines", game_code: "20220b6e063c9561bbba0214430f57ac", game_type: "Mine Game", game_image: "https://i.ibb.co.com/zhgQyQnv/G-024-F-Mines.png" },
        { game_name: "Turbo Mines", game_code: "f6825b088f5bb4997b4cfcb720437ec9", game_type: "Mine Game", game_image: "https://i.ibb.co.com/Q3cVBx9M/G-025-Turbo-Mines.png" },

        { game_name: "Bingo Star", game_code: "8a0e88484f66d59ad27dcc4cba308929", game_type: "Bingo Game", game_image: "https://i.ibb.co.com/ym1NKn0q/G-026-Bingo-Star.png" },
        { game_name: "Maestro", game_code: "ac3c3d70cf9228f569fba5aafe4e2877", game_type: "Crash Game", game_image: "https://i.ibb.co.com/TBtQMyX7/G-027-Maestro.png" },
        { game_name: "Atlantis", game_code: "d7a953872c69c6dcc1cb2f554fa0b6eb", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/C5BK0JxD/G-028-Atlantis.png" },
        { game_name: "Limbo Crash", game_code: "7f71b053abf46db7c1fedddde946bf47", game_type: "Limbo Game", game_image: "https://i.ibb.co.com/HTJ0wTnJ/G-029-Limbo-Crash.png" },
        { game_name: "Tower Rush", game_code: "9b9cbc6675153399ca566c6ff725c947", game_type: "Tower Game", game_image: "https://i.ibb.co.com/VcVy4X15/G-030-Tower-Rush.png" },
        { game_name: "Hot Gear", game_code: "66cfe9bb2c398a3310aa0de0905e7f29", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/vvmtsq0P/G-031-Hot-Gear.png" },
        { game_name: "Lotto Boom", game_code: "83545fa533169c3d84d0e64af2b42978", game_type: "Lottery Game", game_image: "https://i.ibb.co.com/995xsx9W/G-032-Lotto-Boom.png" },
        { game_name: "Dr. Shocker", game_code: "68ec66f014f1a0ea0d714f04aa40346d", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/hFJGjgfP/G-033-Dr-Shocker.png" },
        { game_name: "Starlight", game_code: "8f4400b8dc4d61952c5fcaad5abe02d1", game_type: "Crash Game", game_image: "https://i.ibb.co.com/Gf0cXRXz/G-034-Starlight.jpg" },
        { game_name: "Cosmo Saga", game_code: "8d759e40f4947406d9e0303730ec22f1", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/x88DQgtd/G-035-Cosmo-Saga.png" },
        { game_name: "Hamster Mania", game_code: "48d203ed88396a23ab3c2a2c0605e392", game_type: "Tower Game", game_image: "https://i.ibb.co.com/vGMrmDm/G-036-Hamster-Mania.png" },
        { game_name: "Slap Shot", game_code: "a31be07a3004b790b43948619511bd96", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/wNPQY2C2/G-037-Slap-Shot.png" },
        { game_name: "NinjaCrash 500", game_code: "48e294a2879efd5a87b8ee98e95a7359", game_type: "Crash Game", game_image: "https://i.ibb.co.com/v6ryY4KN/G-038-Ninja-Crash-500.png" },
        { game_name: "Figoal", game_code: "58f9e1a4da57e364b9df51b4cc9e8dd7", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/CKZRPMMD/G-039-Figoal.png" },
        { game_name: "Play me", game_code: "0e2f98dc5ae9e38abeb9a8cc03380ce5", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/HLb4GZzb/G-040-Play-me.png" },


        { game_name: "Gangsta Piggy Hold&Win", game_code: "e6c3d5aa5a97c761ee550aff5127af8b", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Fcg3T9w/G-053-Gangsta-Piggy-Hold-Win.png" },
        { game_name: "Deep Sea Wild", game_code: "6ffc2c9a2feef0d3e91990a7cbc52027", game_type: "Slot Game", game_image: "https://i.ibb.co.com/nqF5GqfC/G-054-Deep-Sea-Wild.jpg" },

        { game_name: "King of Ocean", game_code: "4f5ad35ad9aa16fb240c1cd5935da02d", game_type: "Fish Game", game_image: "https://i.ibb.co.com/ZRfdwQdS/G-055-king-of-ocean.png" }
    ],
};

const atg = {
    platform: "digital",
    provider: "atg",
    games: [
        { game_name: "DICE", game_code: "a41e23f48f8012b70ac83adaa906b60d", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/twTyHXcL/ATG-01-DICE.png" },
        { game_name: "STORM OF SETH", game_code: "1a356cab17ef296bc011668c08cd4d45", game_type: "Slot Game", game_image: "https://i.ibb.co.com/pjDPwPgb/ATG-02-STORM-OF-SETH.png" },
        { game_name: "Flaming Three Kingdoms", game_code: "99f112e358081bce74fa974e8dd7785f", game_type: "Slot Game", game_image: "https://i.ibb.co.com/Zzr408pV/ATG-03-Flaming-Three-Kingdoms.png" },
        { game_name: "SunWuKong", game_code: "795ed7568da66537acfe41abf5b56354", game_type: "Slot Game", game_image: "https://i.ibb.co.com/vxmbnzCz/ATG-04-Sun-Wu-Kong.jpg" },
        { game_name: "Wu Xia", game_code: "137376d8be0e1398a30d29ae26f104c6", game_type: "Slot Game", game_image: "https://i.ibb.co.com/r2W1VRqc/ATG-05-Wu-Xia.png" },

        { game_name: "STORM OF SETH II", game_code: "b5d02355e09debce2be02c82987fcf3b", game_type: "Slot Game", game_image: "https://i.ibb.co.com/MxSqVhdf/ATG-07-STORM-OF-SETH-II.png" },
        { game_name: "Supper Bubble Gum", game_code: "27269b15f5e44e917a6920a4e75ad92c", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/WpnrdXzf/ATG-08-Supper-Bubble-Gum.png" },
        { game_name: "CRASH", game_code: "6dffa9e2e8e149acab0dd13115932e06", game_type: "Crash Game", game_image: "https://i.ibb.co.com/gbb2zdff/ATG-09-CRASH.png" },
        { game_name: "Coinflip", game_code: "ffb6dfcf1122f3701825fa2878337cd0", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/QvR9SC4C/ATG-10-Coinflip.png" },
        { game_name: "Ring", game_code: "a25e7fdf71b279c97ad5065712ada4dc", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/Kc95b9QD/ATG-11-Ring.png" },
        { game_name: "Plinko", game_code: "2f4e44f48817e52501804c1134d29b7d", game_type: "Arcade Game", game_image: "https://i.ibb.co.com/vCtzsg7Y/ATG-12-Plinko.png" }
    ],
};
const psg = {
    platform: "digital",
    provider: "psg",
    games: [
        { game_name: "Lucky Meow Meow 2", game_code: "446314868c876365a4927fb0bb38ddec", game_type: "Slot Game", game_image: "https://i.ibb.co.com/3YvYCzjR/PSG-001-Lucky-Meow-Meow-2.png" },
        { game_name: "Fortune Ganesha", game_code: "792708a1032b9921ea3c26757b63c0f1", game_type: "Slot Game", game_image: "https://i.ibb.co.com/5HW0P3P/PSG-002-Fortune-Ganesha.webp" },
        { game_name: "Cocktail Lounge", game_code: "0e2290d57e29bf54c851f9b8e7994a3f", game_type: "Slot Game", game_image: "https://i.ibb.co.com/rf74y8Y9/PSG-011-Cocktail-Lounge.png" },
        { game_name: "Fortune Rabbit", game_code: "09d4f29f29a53bd62174603b3da7db13", game_type: "Slot Game", game_image: "https://i.ibb.co.com/R4jyDFwb/PSG-012-Fortune-Rabbit.png" },
        { game_name: "Thai Hi Lo", game_code: "bd9054e4eec8c2ca1627ad8c36f0f81f", game_type: "Casino Game", game_image: "https://i.ibb.co.com/4nxh1jFh/PSG-013-Thai-Hi-Lo.png" },
        { game_name: "Thai Fish Prawn Crab", game_code: "c76f9c110c3f98ebc6bbfff41398b960", game_type: "Casino Game", game_image: "https://i.ibb.co.com/xkdFLHp/PSG-014-Thai-Fish-Prawn-Crab.png" },

        { game_name: "Rocket Pop", game_code: "7bbc94a5685766c99a178963d6861336", game_type: "Crash Game", game_image: "https://i.ibb.co.com/Lh5QSm3z/PSG-025-Rocket-Pop.png" },
        { game_name: "Pretty Baccarat", game_code: "dd11cf7f09329e9dc0e7eb2bdb238e24", game_type: "Casino Game", game_image: "https://i.ibb.co.com/KSLvf14/PSG-026-Pretty-Baccarat.png" },
    ],
};
const gamesoft = {
    platform: "digital",
    provider: "gamesoft",
    games: [
        { game_name: "Baccarat", game_code: "62c191c328df00492a971f4bc2625d7f", game_type: "Table Game", game_image: "https://i.ibb.co.com/CsmBKh0W/GS-LIVE-001-Baccarat.png" },
        { game_name: "Roulette", game_code: "2fcc86a1b079904d2ca86ae3fa9b4840", game_type: "Table Game", game_image: "https://i.ibb.co.com/7N02XNGr/GS-LIVE-002-Roulette.png" },
        { game_name: "Sicbo", game_code: "87afcf4480b748a3e9d0438c36096abd", game_type: "Table Game", game_image: "https://i.ibb.co.com/6JYKQ62p/GS-LIVE-003-Sicbo.png" },
        { game_name: "Craps", game_code: "faab291fdb35ddeeebe5bbb6480ec847", game_type: "Table Game", game_image: "https://i.ibb.co.com/5hJYHHfT/GS-LIVE-004-Craps.png" },
        { game_name: "Speed Frenzy", game_code: "a525ca1b0b00fab6d3df4493c7d20251", game_type: "Table Game", game_image: "https://i.ibb.co.com/r2JR49Jq/GS-LIVE-005-Speed-Frenzy.png" },
        { game_name: "Andar Bahar", game_code: "04c2ca1531514b210210ea5143a7c620", game_type: "Table Game", game_image: "https://i.ibb.co.com/7Jf65MZY/GS-LIVE-006-Andar-Bahar.jpg" },
        { game_name: "Color Game", game_code: "53fe2413b060e5d1fb8d26a978786c6f", game_type: "Table Game", game_image: "https://i.ibb.co.com/DPWnKRMy/GS-LIVE-007-Color-Game.png" },
        { game_name: "Black Jack", game_code: "0f24d77dbfd24f96b1e1cad169a73f43", game_type: "Poker Game", game_image: "https://i.ibb.co.com/whB2B2kC/GS-LIVE-008-Black-Jack.png" }
    ],
};
const creedroomz = {
    platform: "digital",
    provider: "creedroomz",
    games: [

        { game_name: "Swift Roulette 8 IN ONE", game_code: "daa5b3ad44fff5ae5264dd8977a7b525", game_type: "Table Game", game_image: "https://i.ibb.co.com/S7Dr2dxc/code-Creed-001-Swift-Roulette-8-IN-ONE.png" },
        { game_name: "Aurum Auto Roulette", game_code: "3bc54ca275ed0535b7845e7eac446a2a", game_type: "Table Game", game_image: "https://i.ibb.co.com/ym0LdXZM/code-Creed-002-Aurum-Auto-Roulette.png" },
        { game_name: "Auto Roulette", game_code: "196935ee36b9f20b61e55d49d908d0ae", game_type: "Table Game", game_image: "https://i.ibb.co.com/qYJkWLtv/code-Creed-022-Aurum-Auto-Auto-Roulette-B.png" },
        { game_name: "Aurum Immersion Roulette", game_code: "380fafa47742957dbbf046bda4aeb460", game_type: "Table Game", game_image: "https://i.ibb.co.com/p6k10p0h/code-Creed-026-Aurum-Roulette-English-B.png" },
        { game_name: "Aurum Auto Roulette Speed", game_code: "c10b15df3fb20eca940284c15fce75a6", game_type: "Table Game", game_image: "https://i.ibb.co.com/kgtYYcrz/code-Creed-008-Aurum-Auto-Roulette-Speed.png" },
        { game_name: "Auto Roulette Speed", game_code: "b2f920e742638b0c372a904594be41ee", game_type: "Table Game", game_image: "https://i.ibb.co.com/WW36Y15Y/code-Creed-030-Aurum-Auto-Roulette-Luxe.png" },
        { game_name: "Roulette Speed Aurum", game_code: "214456b1fff68e0acadd5faa6c1a8a10", game_type: "Table Game", game_image: "https://i.ibb.co.com/kgtYYcrz/code-Creed-008-Aurum-Auto-Roulette-Speed.png" },
        { game_name: "Roulette Speed", game_code: "215d4a27bfa8f8e590be1f4c7f4d0e73", game_type: "Table Game", game_image: "https://i.ibb.co.com/7DRqvgh/code-Creed-011-Roulette-Speed.png" },

        { game_name: "Roulette A Aurum", game_code: "ca1dac21c248baf377eebf89e93d3850", game_type: "Table Game", game_image: "https://i.ibb.co.com/0R1vkGm3/code-Creed-012-Roulette-A-Aurum.png" },
        { game_name: "Roulette A", game_code: "5f3de8298a6b8095d28608e4486d2439", game_type: "Table Game", game_image: "https://i.ibb.co.com/0R1vkGm3/code-Creed-012-Roulette-A-Aurum.png" },

        { game_name: "Aurum Roulette Arabic", game_code: "d6fbefcb50e92a530d9965d2096e0744", game_type: "Table Game", game_image: "https://i.ibb.co.com/0yFFPgkq/code-Creed-014-Aurum-Roulette-Arabic.png" },
        { game_name: "Roulette Arabic", game_code: "c926199fded355c34b1e82b6c7e249e7", game_type: "Table Game", game_image: "https://i.ibb.co.com/mVKX20NM/code-Creed-017-Roulette-Arabic-B.png" },

        { game_name: "Aurum Roulette Armenian", game_code: "01cd6676a227581afbeff862631231f2", game_type: "Table Game", game_image: "https://i.ibb.co.com/gZ84kyDx/code-Creed-018-Aurum-Roulette-Armenian.png" },
        { game_name: "Roulette Armenian", game_code: "932bba67ad1155537cfebc466d643cf8", game_type: "Table Game", game_image: "https://i.ibb.co.com/gZ84kyDx/code-Creed-018-Aurum-Roulette-Armenian.png" },

        { game_name: "Roulette Aurum", game_code: "fb72517679e96f6034150f4ddf4503fa", game_type: "Table Game", game_image: "https://i.ibb.co.com/s9bsmxWH/code-Creed-020-Roulette-Aurum.png" },
        { game_name: "Roulette", game_code: "897d327d05ab74431091bebbc8664622", game_type: "Table Game", game_image: "https://i.ibb.co.com/TDnMZHWv/code-Creed-025-Brasileira-Roulette.png" },

        { game_name: "Free Bet BlackJack VIP A", game_code: "9d927fb710faf5056799aaee9de94483", game_type: "Table Game", game_image: "https://i.ibb.co.com/tpWHYN7W/code-Creed-050-Free-Bet-Black-Jack-VIP-A.png" },
        { game_name: "Speed Blackjack A", game_code: "b92a17215a0bfae21e5e0fd84b1899c7", game_type: "Table Game", game_image: "https://i.ibb.co.com/TMvTXW27/code-Creed-052-Speed-Blackjack-A.png" },
        { game_name: "Speed Blackjack B", game_code: "196de675fb9512726338848b0e730712", game_type: "Table Game", game_image: "https://i.ibb.co.com/Z6Fydvk1/code-Creed-053-Speed-Blackjack-B.png" },
        { game_name: "Speed Blackjack C", game_code: "67355df9dcf0cd161c99c96dd3191285", game_type: "Table Game", game_image: "https://i.ibb.co.com/sp7N6wYc/code-Creed-055-Speed-Blackjack-C.png" },
        { game_name: "Speed Blackjack D", game_code: "5991cc9199c3dfc63f0dc42d4fda157d", game_type: "Table Game", game_image: "https://i.ibb.co.com/bjfkvXkF/code-Creed-056-Speed-Blackjack-D.png" },
        { game_name: "Cashout BlackJack", game_code: "29a16ec2f702675d12eedb716285fccd", game_type: "Table Game", game_image: "https://i.ibb.co.com/tT0LRvXd/code-Creed-060-Cashout-Black-Jack.png" },

        { game_name: "BlackJack Brazilian C", game_code: "c21c72382c9c6cec4cc8799a7abf4311", game_type: "Table Game", game_image: "https://i.ibb.co.com/QFvmTD42/code-Creed-077-Black-Jack-Brazilian-C.png" },
        { game_name: "BlackJack Creed H", game_code: "d3f4304eaa5641630be65045e73a0d56", game_type: "Table Game", game_image: "https://i.ibb.co.com/qYJMff6p/code-Creed-086-Black-Jack-Creed-H.png" },
        { game_name: "BlackJack Creed I", game_code: "3050f406bd9a81161f5f4f34c67d0e3a", game_type: "Table Game", game_image: "https://i.ibb.co.com/VW1q0RgV/code-Creed-087-Black-Jack-Creed-I.png" },
        { game_name: "BlackJack VIP C", game_code: "44f8b33d27449f4b80bf44da42e162ef", game_type: "Table Game", game_image: "https://i.ibb.co.com/hFttbFzf/code-Creed-109-Black-Jack-VIP-B.png" },

        { game_name: "Russian Poker A", game_code: "6e71b525b181835ac797a66a60d7bee8", game_type: "Table Game", game_image: "https://i.ibb.co.com/Fb6ycpn0/code-Creed-115-Russian-Poker-A.png" },

        { game_name: "Bet On Poker", game_code: "ef721303e68229ba39b90ac2c3f9e561", game_type: "Table Game", game_image: "https://i.ibb.co.com/gZgBy9zP/code-Creed-117-Bet-On-Poker-2.png" },

        { game_name: "Korean Baccarat", game_code: "e84307928bc64917f8bc760255ca4942", game_type: "Table Game", game_image: "https://i.ibb.co.com/mC6PYF8X/code-Creed-118-Korean-Baccarat-1.png" },
        { game_name: "Filipino Baccarat A", game_code: "e77abe5d4d818853ce7ac8f6d73d5b5f", game_type: "Table Game", game_image: "https://i.ibb.co.com/8n1W4mHS/code-Creed-119-Filipino-Baccarat-A.png" },
        { game_name: "Baccarat A", game_code: "4d888c0df6d175f5a2cefbc06db68cf9", game_type: "Table Game", game_image: "https://i.ibb.co.com/8n1W4mHS/code-Creed-119-Filipino-Baccarat-A.png" },
        { game_name: "Filipino Baccarat B", game_code: "381287fd26c3c0488652497a4261a69d", game_type: "Table Game", game_image: "https://i.ibb.co.com/YFGbfGwY/code-Creed-121-Filipino-Baccarat-B-1.png" },
        { game_name: "Baccarat B", game_code: "3e97a3b44acb4cdd114fd03df4dc903c", game_type: "Table Game", game_image: "https://i.ibb.co.com/YFGbfGwY/code-Creed-121-Filipino-Baccarat-B-1.png" },


        { game_name: "Speed Baccarat D", game_code: "ddf6208d318e271df26e00a12da4c374", game_type: "Table Game", game_image: "https://i.ibb.co.com/kVGHZKHx/code-Creed-125-Speed-Baccarat-D.png" },
        { game_name: "Speed Baccarat E", game_code: "d07e4ad4dfd33cadb253707cb8468615", game_type: "Table Game", game_image: "https://i.ibb.co.com/Fq6Yzxpm/code-Creed-126-Speed-Baccarat-E.png" },
        { game_name: "Baccarat F", game_code: "be60a419399e8ca01baed479d1c6ec5e", game_type: "Table Game", game_image: "https://i.ibb.co.com/Y7QJSTtJ/code-Creed-127-Baccarat-F.png" },
        { game_name: "Baccarat G", game_code: "dd94e1aff8ac8555e6a1cac342d0a706", game_type: "Table Game", game_image: "https://i.ibb.co.com/G4WyW170/code-Creed-128-Baccarat-G.png" },
        { game_name: "Baccarat H", game_code: "82faf8eb4acd67eb8884facb74446ebd", game_type: "Table Game", game_image: "https://i.ibb.co.com/PzGHzxPx/code-Creed-129-Baccarat-H-1.png" },

        { game_name: "Dragon Tiger", game_code: "b6eb1769e7c69ded319dd77690c1a205", game_type: "Table Game", game_image: "https://i.ibb.co.com/204Z08Yz/code-Creed-132-Dragon-Tiger.png" }
    ],
};
const veliplay = {
    platform: "digital",
    provider: "veliplay",
    games: [
        {
            game_name: "ChickNRoll",
            game_code: "135e4f1032eae33954c8fe7d8d95e847",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/dsg2sWqc/VP-001-Chick-NRoll.png"
        },
        {
            game_name: "DroneX",
            game_code: "ffe900e717840fea46cdc2e98d44b51c",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/Cp2kqZLv/VP-002-Drone-X.png"
        },
        {
            game_name: "Holy Moly",
            game_code: "dd26a95551755e76db8ec3db15037f96",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/Jj7PJvDv/VP-003-Holy-Moly.png"
        },
        {
            game_name: "Sky Diver",
            game_code: "93265f1320a6f42962e7ddfb1913cac5",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/HTGY40CW/VP-004-Sky-Diver.png"
        },
        {
            game_name: "Crash For Six",
            game_code: "ef63852cb697ecd12b0ae16f44d4058f",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/vCXdrZyd/VP-005-Crash-For-Six.png"
        },
        {
            game_name: "Space Plinko",
            game_code: "fac31d72a78a1aca9273cac30d94db30",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/bjfzBpYN/VP-006-Space-Plinko.png"
        },
        {
            game_name: "LaunchX",
            game_code: "581ae78deb51539ce39460a4754db3b5",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/gLn6Jdyq/VP-007-Launch-X.png"
        },
        {
            game_name: "Night Heist",
            game_code: "a480479055bac01520025b0d0a8ac6a6",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/Ndh11XpD/VP-008-Night-Heist.png"
        },
        {
            game_name: "Hungry Frog",
            game_code: "8f47db8c18e3f0c00a67e3ef7fdadf20",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/sdndLRJ5/VP-009-Hungry-Frog.png"
        },
        {
            game_name: "Fury Balloon",
            game_code: "c62ac85fb5e72980d6e6a1745feb623a",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/YBbX53Lp/VP-010-Fury-Balloon.png"
        },
        {
            game_name: "Jingle Jump",
            game_code: "7860292c9d9a8f916458a88a71c67fb5",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/qMq1p1nb/VP-011-Jingle-Jump.png"
        },
        {
            game_name: "Deep Dive",
            game_code: "24684813369cb4210f8c5c98cbe4e8ff",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/Wp438qS8/VP-012-Deep-Dive.png"
        },
        {
            game_name: "X Match",
            game_code: "28631ca6ce178649f63aaeb842b27aa6",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/qFhxmGWV/VP-013-X-Match.png"
        },
        {
            game_name: "Trouble Jet",
            game_code: "182bf1e92487920ea40c9829435ba017",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/Dfy6kYJf/VP-014-Trouble-Jet.png"
        }
    ],
};
const spadegaming = {
    platform: "digital",
    provider: "spadegaming",
    games: [

        {
            game_name: "Fishing God",
            game_code: "edb98312aaed3c315714a046199bbe97",
            game_type: "Fish Game",
            game_image: "https://i.ibb.co.com/BKrv21yK/SG-008-Fishing-God.jpg"
        },
        {
            game_name: "Zombie Party",
            game_code: "3c6487b67edf790ff5b5242d782a5761",
            game_type: "Fish Game",
            game_image: "https://i.ibb.co.com/tPQ9ShLt/SG-011-Zombie-Party.jpg"
        },
        {
            game_name: "Fishing War",
            game_code: "d820acc993eaba8ea18f05c9b022183c",
            game_type: "Fish Game",
            game_image: "https://i.ibb.co.com/yGQPw1N/SG-012-Fishing-War.png"
        },
        {
            game_name: "Fishing Legend",
            game_code: "9b456597b8fa838c4889e8a93ac7ac19",
            game_type: "Fish Game",
            game_image: "https://i.ibb.co.com/qwVNF1N/SG-030-Fishing-Legend.jpg"
        },
        {
            game_name: "Alien Hunter",
            game_code: "0666ff561c6e7beb19e0b331135e5e84",
            game_type: "Fish Game",
            game_image: "https://i.ibb.co.com/ZzYLs9F4/SG-052-Alien-Hunter.jpg"
        },
        {
            game_name: "Space Crasher",
            game_code: "afe32ded263da4ca1b4471d909a98767",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/yBmJZYHp/SG-118-Space-Crasher.jpg"
        },
        {
            game_name: "Lucky Horse",
            game_code: "b9bd402b5136d57562af9766e37d9c17",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/QFbxdNpH/SG-001-Lucky-Horse.png"
        },
        {
            game_name: "Legacy Of Kong Maxways",
            game_code: "d79a132b7af37a124d1ad80512bb9135",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/xt1mbLQN/SG-002-Legacy-Of-Kong-Maxways.jpg"
        },
        {
            game_name: "Royale House",
            game_code: "65fa260366c0674f9fda2eeccab601ea",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/1GywBgzr/SG-003-Royale-House.jpg"
        },
        {
            game_name: "Fiery Sevens Exclusive",
            game_code: "2e09639dcf725ff8fd26d5cce70ce02e",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/0jRQyW7J/SG-004-Fiery-Sevens-Exclusive.jpg"
        },
        {
            game_name: "888",
            game_code: "f55f1b545ba5fd54c44da72e0155e93e",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/B2nTLNxy/SG-005-888.jpg"
        },
        {
            game_name: "Dragon Wish",
            game_code: "9802353030136844743841b1233511a5",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/xtcPrf0m/SG-013-Dragon-Wish.jpg"
        },
        {
            game_name: "Gold Panther Maxways",
            game_code: "6594eda02696cec46d577b1c35b10856",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/sz71vsT/SG-014-Gold-Panther-Maxways.jpg"
        },
        {
            game_name: "Golden Pixiu",
            game_code: "563c995d6b092daa6414b1c5fe0f0eb7",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/MDSfCfyz/SG-017-Golden-Pixiu.jpg"
        },
        {
            game_name: "Caishen",
            game_code: "2e87a2fbb215f11247fcd2eff85aa305",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/1xbBvKt/SG-018-Caishen.jpg"
        },
        {
            game_name: "Happy Neko",
            game_code: "93071c483020dfaaa7eebfd2cb385b41",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/0R4nbR7J/SG-021-Happy-Neko.png"
        },
        {
            game_name: "Poker Ways",
            game_code: "2f782441ab79ed9bcbad524332f2f55c",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/BHZSsH47/SG-024-Poker-Ways.jpg"
        },
        {
            game_name: "Gold Rush Cowboys",
            game_code: "4b92e619bbe1d4492d8e180c98981fa2",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/KpwgqKvy/SG-029-Gold-Rush-Cowboys.jpg"
        },
        {
            game_name: "Royal Paws Maxway",
            game_code: "037865fc0982e7c39a590a9fa716210b",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/yBYb0cm0/SG-119-Royal-Paws-Maxwa.png"
        }
    ],
};
const funkygames = {
    platform: "digital",
    provider: "funkygames",
    games: [
        {
            game_name: "Chicken Love",
            game_code: "b5e693cdae7f862e5d0198550db0a413",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/Xrb1tBMD/FG-001-Chicken-Love.png"
        },
        {
            game_name: "Cash or Crash 2",
            game_code: "107ebf7cafc1163dfbfa032cb998eae5",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/J02d2cY/FG-002-Cash-or-Crash-2.png"
        },
        {
            game_name: "Cash or Crash",
            game_code: "cfe258ae87e4ea3a8e9b47f9f5a83c5b",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/mC4hctCM/FG-003-Cash-or-Crash.png"
        },
        {
            game_name: "Mines",
            game_code: "fe0b1f71df49368883a9fed0962e34c3",
            game_type: "Crash Game  ",
            game_image: "https://i.ibb.co.com/KzGCFYNn/FG-004-Mines.png"
        },
        {
            game_name: "Aztec Plinko",
            game_code: "78a2b27e6182e1d5223b159dcf3e9da6",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/KC5NdQM/FG-005-Aztec-Plinko.png"
        },
        {
            game_name: "Plinko Mega Win",
            game_code: "070d065e5b8c9ee86aed35e4588d1702",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/01843tB/FG-006-Plinko-Mega-Win.png"
        },
        {
            game_name: "Limbo Football",
            game_code: "35daeead97cc3237883d05faf585bd1c",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/YBPGCXHX/FG-007-Limbo-Football.png"
        },
        {
            game_name: "Football Mines",
            game_code: "81136e302ad53318e8f757522ff3673c",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/XxsvrwLH/FG-008-Football-Mines.png"
        },
        {
            game_name: "Meow HiLo",
            game_code: "37d29f8a2b96346721be663bc0d49c24",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/My1Z91LR/FG-009-Meow-Hi-Lo.png"
        },
        {
            game_name: "Plinko UFO",
            game_code: "eb85326dcfc9ebeeacbaa1657684fce4",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/Mx8xcqJP/FG-010-Plinko-UFO.png"
        },
        {
            game_name: "PlinkoS",
            game_code: "711d5f629f5687de94e2dad8506a8a5e",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/YmPKsmD/FG-011-Plinko-S.png"
        },
        {
            game_name: "Odds Hi Lo",
            game_code: "c06a8b62be4c594295f9a78c744d373f",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/HDCWjHdj/FG-012-Odds-Hi-Lo.png"
        },
        {
            game_name: "Big Bang Boxing",
            game_code: "4f5a81d90eaf13c6d13763f728d160a1",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/xKJZqG0p/FG-013-Big-Bang-Boxing.png"
        },
        {
            game_name: "Midnight Robbery",
            game_code: "219a3774625f24da279cb931145ea88d",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/JWJddbzS/FG-014-Midnight-Robbery.png"
        },
        {
            game_name: "Easter Run",
            game_code: "c765db10a6d9ba47ed6e4432205252ae",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/G3kf1CyS/FG-015-Easter-Run.png"
        },
        {
            game_name: "Mines or Cash",
            game_code: "35b7cb7510f0a07bdfbc56017d01565b",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/PvBh6hgG/FG-016-Mines-or-Cash.png"
        },
        {
            game_name: "Mines or Gifts",
            game_code: "7d61062514c5b3c5efd2e807dd3660c8",
            game_type: "Crash",
            game_image: "https://i.ibb.co.com/jkGmv5P1/FG-017-Mines-or-Gifts.png"
        },
        {
            game_name: "Mines or Treat",
            game_code: "538375dee4c547e2279f899f3e2d11d6",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/qqSQC4c/FG-018-Mines-or-Treat.png"
        },

        {
            game_name: "Landing Chicken",
            game_code: "988ae2a2b6d65addb66c0007aca84094",
            game_type: "Table Game",
            game_image: "https://i.ibb.co.com/tpswzJpm/FG-019-Landing-Chicken.png"
        },
        {
            game_name: "Jogo Do Bicho",
            game_code: "8e003deec0c8afffcb10596349006d06",
            game_type: "Table Game",
            game_image: "https://i.ibb.co.com/FkRpGTzB/FG-020-Jogo-Do-Bicho.png"
        },
        {
            game_name: "7 Up Down",
            game_code: "72e7038a6a6b7666d4fa5bf8469cda77",
            game_type: "Table Game",
            game_image: "https://i.ibb.co.com/4wQQ6jp1/FG-021-7-Up-Down.png"
        },
        {
            game_name: "Football Strike",
            game_code: "1bd34ea7d93a17081f37074e7a702341",
            game_type: "Table Game",
            game_image: "https://i.ibb.co.com/jsZJfVn/FG-022-Football-Strike.jpg"
        },
        {
            game_name: "Happy Hour Fruit Slot",
            game_code: "742ddce477025d4a8d92b7290736ca5f",
            game_type: "Table Game",
            game_image: "https://i.ibb.co.com/MkBHJmG1/FG-023-Happy-Hour-Fruit-Slot.png"
        },
        {
            game_name: "Virtual DominoQQ",
            game_code: "b636ef5ad60fe6a318ba68cd0d623cc1",
            game_type: "Table Game",
            game_image: "https://i.ibb.co.com/h1T0C5g7/FG-024-Virtual-Domino-QQ.png"
        },
        {
            game_name: "Basketball Strike",
            game_code: "a39aa0532da39586916aac8e458d0bf7",
            game_type: "Table Game",
            game_image: "https://i.ibb.co.com/21V0wHbc/FG-025-Basketball-Strike.png"
        },
        {
            game_name: "Speed Lotto",
            game_code: "6137e5d8d76a4de23c5b43a8db5ddb79",
            game_type: "Table Game",
            game_image: "https://i.ibb.co.com/hxkfrdfr/FG-026-Speed-Lotto.png"
        },
        {
            game_name: "Rizmu Boys",
            game_code: "0204dd799819347b6603f800290d959e",
            game_type: "Table Game",
            game_image: "https://i.ibb.co.com/N6mQPkxQ/FG-074-Rizmu-Boys.png"
        },

        {
            game_name: "Roulette VVIP",
            game_code: "7f4cd4a92f8ea9dae1b7a378a084d2b8",
            game_type: "Casino",
            game_image: "https://i.ibb.co.com/C3X8TpyC/FG-027-Roulette-VVIP.png"
        },
        {
            game_name: "Baccarat VVIP",
            game_code: "7214b2a3e6f71374fef54b09ef5d1e8a",
            game_type: "Casino",
            game_image: "https://i.ibb.co.com/tMH0XY8w/FG-028-Baccarat-VVIP.png"
        },
        {
            game_name: "Speed Blackjack",
            game_code: "9ff97ca991b97e177ce9fc146c8944a7",
            game_type: "Casino",
            game_image: "https://i.ibb.co.com/20Lryf6M/FG-029-Speed-Blackjack.png"
        },
        {
            game_name: "Virtual Tiger Baccarat",
            game_code: "eea4393f2c182190221c4eec38b56fa3",
            game_type: "Casino",
            game_image: "https://i.ibb.co.com/zWhQVJ2N/FG-030-Virtual-Tiger-Baccarat.png"
        },
        {
            game_name: "Virtual Baccarat",
            game_code: "f00e8fdc3f489c83ad03ed3f08862da5",
            game_type: "Casino",
            game_image: "https://i.ibb.co.com/Gv1yYLLk/FG-031-Virtual-Baccarat.png"
        },
        {
            game_name: "Virtual Roulette",
            game_code: "aa9356b4b518621e305bde440f190f16",
            game_type: "Casino",
            game_image: "https://i.ibb.co.com/qF3M8q3P/FG-032-Virtual-Roulette.png"
        },
        {
            game_name: "Baccarat Babes",
            game_code: "f50c8c631a5ba9d89ad3bcd57ee9f1aa",
            game_type: "Casino",
            game_image: "https://i.ibb.co.com/vCc2KGdB/FG-033-Baccarat-Babes.png"
        },
        {
            game_name: "Lucky Wheel",
            game_code: "21f85e72319a4de706daf166130118c2",
            game_type: "Casino",
            game_image: "https://i.ibb.co.com/j9ctyFvx/FG-034-Lucky-Wheel.png"
        },
        {
            game_name: "Bau Cua",
            game_code: "fa4fe2081cea835ef080b8398fe340d9",
            game_type: "Casino",
            game_image: "https://i.ibb.co.com/s90FGg8j/FG-035-Bau-Cua.png"
        },
        {
            game_name: "Thunder Blackjack",
            game_code: "d3834b9d5582dfc18127b5344a90f9b8",
            game_type: "Casino",
            game_image: "https://i.ibb.co.com/zhvvS0hJ/FG-036-Thunder-Blackjack.png"
        },

        {
            game_name: "Roma Reborn",
            game_code: "bf424fc0a1791f2cc3d7bb907195681a",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/cSs9sxzb/FG-051-Roma-Reborn.png"
        },
        {
            game_name: "Gems of Zeus",
            game_code: "3182e85a3cf4fe7e768cb5a499fe591d",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/mVcHrrBS/FG-052-Gems-of-Zeus.png"
        },
        {
            game_name: "777 Blazing Classic",
            game_code: "b460a8fc3356472212f8e837d8af7b19",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/WWQZdP0F/FG-061-777-Blazing-Classic.png"
        },
        {
            game_name: "777 Blazing Hold and Win",
            game_code: "195bb2be3f429f64910102d22f5113bf",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/M5R0g044/FG-070-777-Blazing-Hold-and-Win.png"
        },
        {
            game_name: "Aloha Fruit Punch",
            game_code: "93a0382123556ccac94f3c3d524b9609",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/Q7XpwZht/FG-072-Aloha-Fruityways-Megaways.png"
        }
    ],
};
const cockfight = {
    platform: "sports",
    provider: "cockfight",
    games: [
        { game_name: "cockfight", game_code: "3b2189b432d604b4375108fcb4f3a020", game_type: "Sports Game", game_image: "https://i.ibb.co.com/gLnGZ491/035-Cock-Fighting.png" },

    ],
};
const auragaming = {
    platform: "digital",
    provider: "auragaming",
    games: [


        {
            game_name: "Blastoff",
            game_code: "6e82ceaf26530d35f033825acff40835",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/8yygVGk/code-AG-001-Blastoff.webp"
        },
        {
            game_name: "Aviator",
            game_code: "0954ca5c3eb69163dc79e889b09ad69a",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/sJgy2Dnp/code-AG-002-Aviator.webp"
        },
        {
            game_name: "Spin Wheel",
            game_code: "c7baf203c859f1ecceb06bc25cf27e01",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/Mk2pVgV6/code-AG-003-Spin-Wheel.webp"
        },
        {
            game_name: "Coin Toss",
            game_code: "dfcea866db2646c5aba0b474231892f4",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/bjPG2TRh/code-AG-004-Coin-Toss.webp"
        },
        {
            game_name: "Limbo",
            game_code: "0bc4618af6711b0252c6c6118b52634b",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/pBwYH70F/code-AG-005-Limbo.webp"
        },
        {
            game_name: "Slot Game",
            game_code: "13b02c4c5261631d094dd9af0b4ae1a3",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/fd0CCZHm/code-AG-006-Slot-Game.webp"
        },
        {
            game_name: "Rock Paper Scissors",
            game_code: "9e192953774a259261a5039a34a73d1f",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/Xxkr4ZqH/code-AG-007-Rock-Paper-Scissors.webp"
        },
        {
            game_name: "Double",
            game_code: "d773aaca0e40f36ae48d302aedeed3b3",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/W4Ggm4BR/code-AG-008-Double.webp"
        },
        {
            game_name: "Cricket",
            game_code: "da1af74a3628fe31ab77bea49c7a885b",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/JwSQkzrD/code-AG-009-Cricket.webp"
        },
        {
            game_name: "Classic Dice",
            game_code: "03d6add481aa146d07e0fc20cdc70325",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/6Rsbhw3h/code-AG-010-Classic-Dice.webp"
        },
        {
            game_name: "Crash",
            game_code: "dfa76b2af67e68e64a769d2b249393b3",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/0VGpk0Yg/code-AG-011-Crash.webp"
        },
        {
            game_name: "Mines",
            game_code: "b3d92fb446a2829a06f828ec83f432f4",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/KxP4G0XS/code-AG-012-Mines.webp"
        },
        {
            game_name: "Tower Legends",
            game_code: "7edcb68c9c313c870e2e2722e0667c56",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/SX6C6DHR/code-AG-013-Tower-Legends.webp"
        },
        {
            game_name: "Sugar Ride",
            game_code: "55b4abd7ea22e78069c5a85b42da59b6",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/ZpQj3STr/code-AG-014-Sugar-Ride.webp"
        },
        {
            game_name: "Button Burst",
            game_code: "ec6cf01ec2f8833ad1d0f550fa0c7056",
            game_type: "Crash",
            game_image: "https://i.ibb.co.com/JwD0Cjt5/code-AG-015-Button-Burst.webp"
        },

        {
            game_name: "Teenpatti T20 Fast",
            game_code: "130b42b7fb15bea0b436914037396df4",
            game_type: "Casino",
            game_image: "https://i.ibb.co.com/Jw70Bmjf/code-AG-016-Teenpatti-T20-Fast.webp"
        },
        {
            game_name: "7 Up Down Fast",
            game_code: "1a08ba740a47e476b6dd33cb6058f725",
            game_type: "Casino",
            game_image: "https://i.ibb.co.com/s9n7DptB/code-AG-017-7-Up-Down-Fast.webp"
        },
        {
            game_name: "2 card Teenpatti Fast",
            game_code: "6b11c0e9d6e7839039269a701178c0bb",
            game_type: "Casino",
            game_image: "https://i.ibb.co.com/SwJ9PmtP/code-AG-018-2-card-Teenpatti-Fast.webp"
        },
        {
            game_name: "Dragon Tiger Fast",
            game_code: "a2e86c94ed72725b045969a9020c98f9",
            game_type: "Casino",
            game_image: "https://i.ibb.co.com/qKB3Dnf/code-AG-019-Dragon-Tiger-Fast.webp"
        },
        {
            game_name: "Teenpatti T20",
            game_code: "0f4e83f5b602951af56003254d3dc592",
            game_type: "Casino",
            game_image: "https://i.ibb.co.com/ccNxNC7w/code-AG-045-Teenpatti-T20.webp"
        },
        {
            game_name: "Teenpatti 1 Day",
            game_code: "e7f361d615a5a0b71b7bbc5f7b7952d6",
            game_type: "Casino",
            game_image: "https://i.ibb.co.com/C3gRPKmm/code-AG-046-Teenpatti-1-Day.webp"
        },
        {
            game_name: "Dragon Tiger",
            game_code: "11029ba3e2c08ed76478518b6a04753d",
            game_type: "Casino",
            game_image: "https://i.ibb.co.com/wF05B3Br/code-AG-048-Dragon-Tiger.webp"
        }
    ],
};
const mini = {
    platform: "digital",
    provider: "mini",
    games: [
        {
            game_name: "go-for-gold",
            game_code: "2020e1f416f44a4920b3a2b244e9fc97",
            game_type: "Lottery",
            game_image: "https://i.ibb.co.com/pBdXftzn/M043-go-for-gold.jpg"
        },
        {
            game_name: "super-double",
            game_code: "3940c014a492bced4c322de1238dd27c",
            game_type: "Lottery",
            game_image: "https://i.ibb.co.com/rfwsgLBd/M044-super-double.jpg"
        },
        {
            game_name: "go-bananas",
            game_code: "114091a9c1bf4af78d830a53c51ca5b3",
            game_type: "Lottery",
            game_image: "https://i.ibb.co.com/YBVnf7t9/M045-go-bananas.jpg"
        },
        {
            game_name: "lucky-football",
            game_code: "78d476a502c5f5232974bcb66b2ea9e2",
            game_type: "Lottery",
            game_image: "https://i.ibb.co.com/2YfsnHMq/M046-lucky-football.jpg"
        },
        {
            game_name: "ScratchMap",
            game_code: "08b30c8b511005b4d591b602e1fcf301",
            game_type: "Lottery",
            game_image: "https://i.ibb.co.com/GQ8nSjGy/M062-Scratch-Map.jpg"
        },

        {
            game_name: "SlapShot",
            game_code: "c98b8a60baef298d5e33c34be8e6eb8d",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/Mky7qMj7/M047-Slap-Shot.jpg"
        },
        {
            game_name: "BlackJack",
            game_code: "f23786ff750e1a8fb67e2a74246c02ba",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/GXTdZ4D/M013-Blackjack.jpg"
        },
        {
            game_name: "DrShocker",
            game_code: "3393f57cf4d84a6bacc535afc5b28bfb",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/HLkhsmpW/M049-Dr-Shocker.jpg"
        },
        {
            game_name: "TowerRush",
            game_code: "5e1d3c647f9015a0cb8347d20d11068b",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/bRd4nKJ6/M050-Tower-Rush.jpg"
        },
        {
            game_name: "TurboMines",
            game_code: "7de21f7616ddb4f9486641d2d99dcaf5",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/8L4RFqBq/M051-Turbo-Mines.jpg"
        },
        {
            game_name: "Plinkoman",
            game_code: "988a40d3fdea68e6764a4250f430e8a8",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/YF8TSBPt/M052-Plinkoman.jpg"
        },
        {
            game_name: "HamsterMania",
            game_code: "223b8d6d039d68f661e305bb2d646e4e",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/V0qJcKXY/M053-Hamster-Mania.jpg"
        },
        {
            game_name: "CosmoSaga",
            game_code: "e4441f18ea7133e5b341e5f516bef35c",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/nsZ2Hmfv/M054-Cosmo-Saga.jpg"
        },
        {
            game_name: "Atlantis",
            game_code: "838a1f101ba94a4a1611c419a6e8ca33",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/ZphyCrVD/M055-Atlantis.jpg"
        },
        {
            game_name: "HotGear",
            game_code: "f99a723c1fb1083fc226ca98dffee15d",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/XZMXs1Ss/M056-Hot-Gear.jpg"
        },
        {
            game_name: "Totem",
            game_code: "fc246b7b9e396a4471a35c8a1fbc1d26",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/0VJfknFw/M057-Totem.jpg"
        },
        {
            game_name: "Roulette",
            game_code: "a45abfe967f4aa60c47fa8cacf4f8b56",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/HfqkG3R6/M058-Roulette.jpg"
        },
        {
            game_name: "LimboCrash",
            game_code: "d27a8c6ec6aefa6bbaa9ebdaf8e4ddb9",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/DPXdbSdp/M059-Limbo-Crash.jpg"
        },
        {
            game_name: "CoinFlip",
            game_code: "534ff8786c847789c054fd7447e5c1b1",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/1Y8Sdb1Z/M060-Coin-Flip.jpg"
        },
        {
            game_name: "Thimble",
            game_code: "7b7dff4328b11a95174600c395665f89",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/C3DG9C7n/M061-Thimble.jpg"
        },
        {
            game_name: "PlayMe",
            game_code: "739af76b486105ca8dc6b49447bd9706",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/LGGGbZK/M063-Play-Me.jpg"
        },
        {
            game_name: "AviatorJerry",
            game_code: "a7f65a7e2bac849aa21ed92d70589fc0",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/8gj9PDhz/M064-Aviator-Jerry.jpg"
        },
        {
            game_name: "LoveGift",
            game_code: "b8530fdbbfa8fd0fe48c87b2c2536d2c",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/fVfn2rFh/M065-Love-Gift.jpg"
        },

        {
            game_name: "PowerBall",
            game_code: "1b5bb74c93b1d8e026dc4828ebce0238",
            game_type: "Lottery",
            game_image: "https://i.ibb.co.com/qYdmb4zF/M066-Power-Ball.jpg"
        },
        {
            game_name: "BingoMega",
            game_code: "44943fcb2b973e8fbd346934570e25fc",
            game_type: "Lottery",
            game_image: "https://i.ibb.co.com/VrzvNYf/M067-Bingo-Mega.jpg"
        },
        {
            game_name: "BingoRush",
            game_code: "bf7e52d75550723d05ad0401302f6dff",
            game_type: "Lottery",
            game_image: "https://i.ibb.co.com/mVb3DZ1k/M068-Bingo-Rush.jpg"
        },
        {
            game_name: "BingoBoom",
            game_code: "ac3b55fd9339d0bcc5dda839f10ed322",
            game_type: "Lottery",
            game_image: "https://i.ibb.co.com/jvCFMtgh/M069-Bingo-Boom.jpg"
        },
        {
            game_name: "MTD",
            game_code: "135103c66220afbd9a20ee1eac21ca89",
            game_type: "Lottery",
            game_image: "https://i.ibb.co.com/prnf5fjv/M070-MTD.jpg"
        }
    ],
};
const twoj = {
    platform: "digital",
    provider: "twoj",
    games: [
        {
            game_name: "777 FRUIT",
            game_code: "e91bc7072343ee4b6c57ee357758f317",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/nM73qcL3/1007-777-FRUIT.png"
        },
        {
            game_name: "DRAGON TIGER",
            game_code: "d906e75652c87c414aeba526cca7030e",
            game_type: "Multiplayer",
            game_image: "https://i.ibb.co.com/RpQmpxPJ/2000-DRAGON-TIGER.png"
        },
        {
            game_name: "RED VS BLACK",
            game_code: "6d47a04fcf8502d4e0b6967d5c3c6145",
            game_type: "Multiplayer",
            game_image: "https://i.ibb.co.com/fGrNt7mX/2001-RED-VS-BLACK.png"
        },
        {
            game_name: "7 UP DOWN",
            game_code: "eb1521520dbb0e583a717e1c4a5286eb",
            game_type: "Multiplayer",
            game_image: "https://i.ibb.co.com/cXKWYMB3/2003-7-UP-DOWN.png"
        },
        {
            game_name: "BEST OF FIVE",
            game_code: "8fb18cef8da9875dd09d6ea54c58d448",
            game_type: "Multiplayer",
            game_image: "https://i.ibb.co.com/mCHQhmqB/2005-BEST-OF-FIVE.png"
        },


        {
            game_name: "ANDAR BAHAR",
            game_code: "b184fae0c98f47fd6d79babc747044a9",
            game_type: "Multiplayer",
            game_image: "https://i.ibb.co.com/9B458yj/2008-ANDAR-BAHAR.png"
        },
        {
            game_name: "JHANDI MUNDA",
            game_code: "e1d8a53d15772a9f5876789b89ce0645",
            game_type: "Multiplayer",
            game_image: "https://i.ibb.co.com/PGNRfcTZ/2009-JHANDI-MUNDA.png"
        },
        {
            game_name: "ROULETTE",
            game_code: "377989413fba1a506b32cf9f1417c3ff",
            game_type: "Multiplayer",
            game_image: "https://i.ibb.co.com/PG79Sr01/2011-ROULETTE.png"
        },
        {
            game_name: "SIC BO",
            game_code: "d5c46e03fbfc66a865ff2b5968c21bd9",
            game_type: "Multiplayer",
            game_image: "https://i.ibb.co.com/DgGmpVtz/2014-SIC-BO.png"
        },

        {
            game_name: "LUCKY LOTTERY",
            game_code: "948170ec4a41e05216572f5996f85b32",
            game_type: "Multiplayer",
            game_image: "https://i.ibb.co.com/4wyF0MnB/2018-LUCKY-LOTTERY.png"
        },

        {
            game_name: "BACCARAT",
            game_code: "db0e4e50d14e311210bdb8e9dd6685e2",
            game_type: "Multiplayer",
            game_image: "https://i.ibb.co.com/1f6m75GX/2022-BACCARAT.png"
        },
        {
            game_name: "TH SICBO",
            game_code: "85574d3c98b87d296ee8b13211620431",
            game_type: "Multiplayer",
            game_image: "https://i.ibb.co.com/XkW0RFQK/2023-TH-SICBO.png"
        },

        {
            game_name: "CAR ROULETTE",
            game_code: "995e93b889a5e60305bd5077ba1da4ff",
            game_type: "Multiplayer",
            game_image: "https://i.ibb.co.com/bMYLy3zM/2025-CAR-ROULETTE.png"
        },
        {
            game_name: "COLOR GAME",
            game_code: "2a9411e004eef01835c39f21ef99c730",
            game_type: "Multiplayer",
            game_image: "https://i.ibb.co.com/zhpRqjHt/2028-COLOR-GAME.png"
        },
        {
            game_name: "TOSS A COIN",
            game_code: "e2a0044b1300a8b4ddb72726d9481648",
            game_type: "Multiplayer",
            game_image: "https://i.ibb.co.com/zWn2vK6k/2029-TOSS-A-COIN.png"
        },
        {
            game_name: "MYTHICAL ANIMALS",
            game_code: "c37c62d3533cb871c70f9a28cb8b387f",
            game_type: "Multiplayer",
            game_image: "https://i.ibb.co.com/C3nskdnS/2030-MYTHICAL-ANIMALS.png"
        },
        {
            game_name: "ZOO ROULETTE",
            game_code: "cc0380582166e82db7d46cab37cad74d",
            game_type: "Multiplayer",
            game_image: "https://i.ibb.co.com/fdKKyP91/2031-ZOO-ROULETTE.png"
        },
        {
            game_name: "DIRECTION BOUNTY",
            game_code: "ab8d335957492c65519ccb98f3ad1b32",
            game_type: "Multiplayer",
            game_image: "https://i.ibb.co.com/zW9sRXjQ/2032-DIRCETION-BOUNTY.png"
        },
        {
            game_name: "CRAZY WIN",
            game_code: "88aa862f08c2cf0536bdd2aa419a4518",
            game_type: "Multiplayer",
            game_image: "https://i.ibb.co.com/Kp37YBwW/2033-CRAZY-WIN.png"
        },
        {
            game_name: "CRASH",
            game_code: "dace13a026dd29e7db7e1c6ab0ab175c",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/kn5Y8ZC/2004-CRASH.png"
        },
        {
            game_name: "CRASH II",
            game_code: "b5df52ae1883b1f0613f62a28533b998",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/b5pBxzPq/2026-CRASH-II.png"
        },
        {
            game_name: "PLINKO",
            game_code: "6d4e3081a3d2c7872b03fb3c8ffdbbbf",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/BHCggmxT/6000-PLINKO.png"
        },
        {
            game_name: "MINES",
            game_code: "420eae065802704e3b324b276b5df495",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/934Lr45N/6001-MINES.png"
        },
        {
            game_name: "LIMBO",
            game_code: "31ac22dabebb08f9cdf4d398998754ac",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/CKx1p9yy/6006-LIMBO.png"
        },
        {
            game_name: "DICE",
            game_code: "76a55cc0e0fd8d6103b8b65b88c3691d",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/gbtFs6h4/6008-DICE.png"
        },
        {
            game_name: "MINES II",
            game_code: "80ae37b2cd19da63154566b35f192e49",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/2TVDnJz/6011-MINES-PLUS.png"
        },
        {
            game_name: "HILO",
            game_code: "6201463025847d26067853ad0dac1f8c",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/BKfQxSjk/6013-HILO.png"
        },
        {
            game_name: "SNAKES AND LADDERS",
            game_code: "3b6753d5a3342fa14c90bd480e47b5a9",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/q3FgYBct/6014-SNAKES-AND-LADDRES.png"
        },
        {
            game_name: "POINT RUMMY",
            game_code: "80ecd2441d840f74cbb0fb33056c1aaa",
            game_type: "Table Game",
            game_image: "https://i.ibb.co.com/8LRgGvsH/3000-POINT-RUMMY.png"
        },
        {
            game_name: "TEEN PATTI",
            game_code: "b2209f84d2e5d835744b7cc5a4dfc5f6",
            game_type: "Table Game",
            game_image: "https://i.ibb.co.com/WN4rVjjN/3001-TEEN-PATTI.png"
        },
        {
            game_name: "TRUCO",
            game_code: "772dc94ab1f913afa1218de98107d765",
            game_type: "TableGame",
            game_image: "https://i.ibb.co.com/qLXpLntN/3002-TRUCO-PAULISTA.png"
        },
        {
            game_name: "CALL BREAK",
            game_code: "09bb57ef1cbdaa36dc575c66b4a545be",
            game_type: "Table Game",
            game_image: "https://i.ibb.co.com/gZ8DPdxt/3005-CALL-BREAK.png"
        },
        {
            game_name: "BLACK JACK",
            game_code: "973fc94de61caf9779afd25dcd115b17",
            game_type: "Table Game",
            game_image: "https://i.ibb.co.com/TB9rqKpb/3007-BLACK-JACK.png"
        },
        {
            game_name: "DOMINO GAPLE",
            game_code: "0b709ff139f6546374cba14f51345140",
            game_type: "Table Game",
            game_image: "https://i.ibb.co.com/Z67mHqGR/3008-DOMINO-GAPLE.png"
        },
        {
            game_name: "POOL RUMMY",
            game_code: "08ebf8001ca546ce8d8772244cb2f7b9",
            game_type: "Table Game",
            game_image: "https://i.ibb.co.com/GvnyngdD/3009-POOL-RUMMY.png"
        },
        {
            game_name: "DOMINO QIUQIU",
            game_code: "c3d158a3865618cf69fc6fae77e426f5",
            game_type: "Table Game",
            game_image: "https://i.ibb.co.com/4ZShs0sJ/3010-DOMINO-QIUQIU.png"
        },
        {
            game_name: "QUICK LUDO",
            game_code: "98bcfab0b0808eb3063b559049afd0e9",
            game_type: "Table Game",
            game_image: "https://i.ibb.co.com/gMq0GcvF/3011-QUICK-LUDO.png"
        },
        {
            game_name: "REMI",
            game_code: "5c1fcf0a4576a49df3b9965dca658706",
            game_type: "Table Game",
            game_image: "https://i.ibb.co.com/vxRn5zzS/3013-REMI.png"
        },
        {
            game_name: "TEXAS HOLD'EM",
            game_code: "09f1b05cbce637f9838b5173f18f041e",
            game_type: "Table Game",
            game_image: "https://i.ibb.co.com/tpzgmt2t/3015-TEXAS-HOLD-EM.png"
        },
        {
            game_name: "BIG TWO",
            game_code: "f6415181962eb72097931ee1cbf74ffc",
            game_type: "Table Game",
            game_image: "https://i.ibb.co.com/VcG3hN9s/3016-BIG-TWO.png"
        },
        {
            game_name: "MẬU BINH",
            game_code: "c0713007ffa41a0d1f9003bef075bdd9",
            game_type: "Table Game",
            game_image: "https://i.ibb.co.com/Q72mhNn6/3018-MAUBINH.png"
        },
        {
            game_name: "TONGITS",
            game_code: "374897fbbf20f4638d091ce7c4a8f099",
            game_type: "Table Game",
            game_image: "https://i.ibb.co.com/L7TmjH6/3021-TONGITS.png"
        },
        {
            game_name: "POKDENG",
            game_code: "3eb453fb1a45ca19f40a776053613497",
            game_type: "Table Game",
            game_image: "https://i.ibb.co.com/xt9VjKm1/3022-POKDENG.png"
        },
        {
            game_name: "DUMMY",
            game_code: "dae71f173c0d28cc56ba5689128bcf6d",
            game_type: "Table Game",
            game_image: "https://i.ibb.co.com/VWPQPMnD/3025-Dummy.png"
        },
        {
            game_name: "CRAZY LUDO",
            game_code: "19ab4d3d2e9e493ae07f500cdb988850",
            game_type: "Table Game",
            game_image: "https://i.ibb.co.com/23kG4KWj/3030-CRAZY-LUDO.png"
        },
        {
            game_name: "ALL-IN POKER",
            game_code: "e6564f3ca52702489344eb7402a6cc25",
            game_type: "Table Game",
            game_image: "https://i.ibb.co.com/3mQ5cSKb/3031-ALLIN-POKER.png"
        },
        {
            game_name: "ANDAR BAHAR-BATTLE",
            game_code: "8b21a3f048813bcea049fd11529373ea",
            game_type: "Table Game",
            game_image: "https://i.ibb.co.com/CpncKXgv/3032-ANDAR-VS-BAHAR.png"
        },
        {
            game_name: "Fishing",
            game_code: "3c9c7fcda7e8fad01594de887e2981f1",
            game_type: "Fish",
            game_image: "https://i.ibb.co.com/R4gdPTNH/4000-FISHING.png"
        },
        {
            game_name: "Fishdom",
            game_code: "c471ce60d3478e3a9f0bdded30d9eba2",
            game_type: "Fish",
            game_image: "https://i.ibb.co.com/qf15r6C/4001-FISHDOM.png"
        },
        {
            game_name: "MAGIC DROP",
            game_code: "dc3ec0356de0eb58f0151371451b25f9",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/s9vFj8LN/1073-MAGIC-DROP.png"
        },
        {
            game_name: "POWER OF KRAKEN",
            game_code: "469ea4e18d6993d9980342df466db37b",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/HfBX8b1z/1071-POWER-OF-KRAKEN.png"
        },
        {
            game_name: "GOLDEN RICHES",
            game_code: "c331188092434b9d175350d4f31fc12d",
            game_type: "Slot ",
            game_image: "https://i.ibb.co.com/mF5dmVX4/1076-GOLDEN-RICHES.png"
        },
        {
            game_name: "CASHPOWER MANIA",
            game_code: "369cba4fb2fe02b4e6bf33e4d03f911e",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/N6bd0g9Y/1070-CASHPOWER-MANIA.png"
        },
        {
            game_name: "KING KONG",
            game_code: "6b381a3e92475a87a28830e8e69b4cfc",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/ym4XLsbK/1072-KING-KONG.png"
        }
    ],
};
const turbogames = {
    platform: "digital",
    provider: "turbogames",
    games: [
        { game_name: "CrashX", game_code: "f023cea0ab3e0c35ecbd607876b6000c", game_type: "Crash Game", game_image: "https://i.ibb.co.com/Hj3yvz6/code-360001-Crash-X.png" },
        { game_name: "Dice Twice", game_code: "15a182dfecfd4fcad6076a810a2ea31f", game_type: "Dice", game_image: "https://i.ibb.co.com/Fkqjwrhk/code-360004-Dice-Twice.jpg" },
        { game_name: "Mines", game_code: "e609e40e82f5414e31dd67878cc67fcc", game_type: "Arcade", game_image: "https://i.ibb.co.com/rKW1FGVW/code-360002-Mines.jpg" },
        { game_name: "Neko", game_code: "24a70d1ea310959780b546ede864d970", game_type: "Arcade", game_image: "https://i.ibb.co.com/NdPwzfPK/code-360015-Neko.jpg" },
        { game_name: "Towers", game_code: "0ad7c4c8f9a1fe4ebec150c5b6606f54", game_type: "Arcade", game_image: "https://i.ibb.co.com/Xr7DMps4/code-360024-Towers.jpg" },
        { game_name: "Hamsta", game_code: "58303b4c3986d22d8d25f109e5f52e1d", game_type: "Arcade", game_image: "https://i.ibb.co.com/yJ3J86y/code-360007-Hamsta.jpg" },
        { game_name: "Fury Stairs", game_code: "f24656f8ab73a646a9ce20d6a4aa83db", game_type: "Arcade", game_image: "https://i.ibb.co.com/gZT7LxkK/code-360008-Fury-Stairs.png" },
        { game_name: "Ball&Ball", game_code: "91525c2e2b91e7d2ec0140dc5ca2923b", game_type: "Slot", game_image: "https://i.ibb.co.com/bjsTJZbV/code-360010-Ball-Ball.png" },
        { game_name: "Limbo Rider", game_code: "7216e174571092316e4d071399cc0fc0", game_type: "Crash Game", game_image: "https://i.ibb.co.com/Cp6q76h0/code-360009-Limbo-Rider.jpg" },
        { game_name: "Bayraktar", game_code: "cbaf3d860d7dda47f3c8681f8557ad65", game_type: "Arcade", game_image: "https://i.ibb.co.com/MxZwMjNn/code-360003-Bayraktar.jpg" },
        { game_name: "CrashX Football Edition", game_code: "a628c38d18b9816a2e1c5627e064d7e9", game_type: "Crash Game", game_image: "https://i.ibb.co.com/277gjmfN/code-360005-Crash-X-Football-Edition.png" },
        { game_name: "JavelinX", game_code: "8ad110623a6f025ed5ca7a23490b995c", game_type: "Arcade", game_image: "https://i.ibb.co.com/9kZsHmYT/code-360006-Javelin-X.jpg" },
        { game_name: "Save the Princess", game_code: "400e3bac945b77ae44c307092ad1369f", game_type: "Arcade", game_image: "https://i.ibb.co.com/7Vc3Fj7/code-360013-Save-the-Princess.jpg" },
        { game_name: "Turbo Plinko", game_code: "58780cb27054158845312d5bda968574", game_type: "Arcade", game_image: "https://i.ibb.co.com/fVHQrgPm/code-360011-Turbo-Plinko.png" },
        { game_name: "Turbo Mines", game_code: "2b84d70f6b637dabfc527515273fdd0f", game_type: "Arcade", game_image: "https://i.ibb.co.com/7t7SWX13/code-360014-Turbo-Mines.png" },
        { game_name: "Magic Keno", game_code: "b123ec9dcff2fe81f32f44eec684e273", game_type: "Arcade", game_image: "https://i.ibb.co.com/SDMYCLNF/code-360012-Magic-Keno.jpg" },
        { game_name: "Dogs' Street", game_code: "54653fa713ac2c7ce02813058551cb7a", game_type: "Arcade", game_image: "https://i.ibb.co.com/WvV4BdGb/code-360016-Dogs-Street.png" },
        { game_name: "Double Roll", game_code: "c9bee4edd1e99c57738083325d59c8a8", game_type: "Arcade", game_image: "https://i.ibb.co.com/B5y9TFT0/code-360018-Double-Roll.png" },
        { game_name: "Fruit Towers", game_code: "b7f5746e5ee7d5ea7f13e6db3e2dcb5c", game_type: "Arcade", game_image: "https://i.ibb.co.com/DfrhBytf/code-360017-Fruit-Towers.png" },
        { game_name: "HiLo", game_code: "21c310588382e86af1dc3d66ea3b387b", game_type: "Arcade", game_image: "https://i.ibb.co.com/xK9gyFdQ/code-360019-Hi-Lo.png" },
        { game_name: "Spin Strike", game_code: "3c2bb46d3c11eb812ad5343014cbcef6", game_type: "Arcade", game_image: "https://i.ibb.co.com/M5tzxTT7/code-360020-Spin-Strike.png" },
        { game_name: "Wicket Blast", game_code: "d9ee1a2608a8a09604bdaf37b14916f9", game_type: "Arcade", game_image: "https://i.ibb.co.com/m5vnvsLb/code-360021-Wicket-Blast.png" },
        { game_name: "Fast Fielder", game_code: "97e89c1e17b0969f1257c147f36da0ff", game_type: "Dice", game_image: "https://i.ibb.co.com/wbGjY6v/code-TBA23-Fast-Fielder.png" },
        { game_name: "Take My Plinko", game_code: "631fc0a0157698cee9900a9c2a086d13", game_type: "Arcade", game_image: "https://i.ibb.co.com/L7d9tCh/code-360023-Take-My-Plinko.png" },
        { game_name: "Bubbles", game_code: "da56a87d4cf3e0ced7b7ce72aaf2d437", game_type: "Arcade", game_image: "https://i.ibb.co.com/ZRkjC5Ck/code-360025-Bubbles.png" },
        { game_name: "Aero", game_code: "cccdf7fc199f5c5b917a741c828398bd", game_type: "Crash Game", game_image: "https://i.ibb.co.com/H093sgb/code-360026-Aero.png" },
        { game_name: "Vortex", game_code: "dd3a07869b4a50330f2d691196297004", game_type: "Slot", game_image: "https://i.ibb.co.com/GQD2y54Z/code-360027-Vortex.png" },
        { game_name: "Trading Dice", game_code: "9c96e2b627c62dd28a4c4d36b12768da", game_type: "Dice", game_image: "https://i.ibb.co.com/XrsC5ZPt/code-360028-Trading-Dice.png" },
        { game_name: "1Tap Mines", game_code: "dad62a94d4cefc185418f04816daca15", game_type: "Arcade", game_image: "https://i.ibb.co.com/tpn6TjYC/code-TBA29-1-Tap-Mines.png" },
        { game_name: "Book of Mines", game_code: "038d26e4c9dfff266f45382d6b1f824a", game_type: "Arcade", game_image: "https://i.ibb.co.com/0jcySGj2/code-TBA30-Book-of-Mines.png" },
        { game_name: "Multiplayer Mines", game_code: "4710bed1eda91d7e3e8e58ef8421b74e", game_type: "Arcade", game_image: "https://i.ibb.co.com/35WTNBnf/code-TBA31-Multiplayer-Mines.png" },
        { game_name: "Crystal Poker", game_code: "6d6c6938817d634ffff567743e578b0e", game_type: "Slot", game_image: "https://i.ibb.co.com/N6FqFdgX/code-TBA32-Crystal-Poker.png" },
        { game_name: "Donny King", game_code: "bf05b2f77235bceaf492b14045a3d7fe", game_type: "Arcade", game_image: "https://i.ibb.co.com/8LmRZt8j/code-TBA33-Donny-King.png" },
        { game_name: "Pumped X", game_code: "33d2cbfc69e725c5d771d31f11242b5f", game_type: "Crash Game", game_image: "https://i.ibb.co.com/NnQjP767/code-TBA34-Pumped-X.png" },
        { game_name: "Dice Thrice", game_code: "82899829859738c4a5d5f89ce4bd2881", game_type: "Dice", game_image: "https://i.ibb.co.com/Xfv7kSwb/code-TBA35-Dice-Thrice.png" },
        { game_name: "Jewel Clicker", game_code: "4473958b2669ad2b74163a7f76f40a37", game_type: "Crash Game", game_image: "https://i.ibb.co.com/Qvz6kW85/code-TBA36-Jewel-Clicker.png" },
        { game_name: "Catanza", game_code: "431e70145fb4054d772e6589d8ab7dad", game_type: "Slot", game_image: "https://i.ibb.co.com/5xzYX5WQ/code-TBA37-Catanza.png" },
        { game_name: "Cricket Boom", game_code: "3af74cc02faf7045b3a1af17a9c5991f", game_type: "Crash Game", game_image: "https://i.ibb.co.com/jPbjSQ9j/code-TBA38-Cricket-Boom.png" },
        { game_name: "Rings of Olympus", game_code: "969183d01c2ed74b183757ed2667847b", game_type: "Slot", game_image: "https://i.ibb.co.com/nsYP6D5W/code-TBA39-Rings-of-Olympus.png" },
        { game_name: "Panda Bao", game_code: "6cb18a8a982c91de51e5513a1edadb7a", game_type: "Slot", game_image: "https://i.ibb.co.com/Ngp061nC/code-TBA40-Panda-Bao.png" },
        { game_name: "Mysteco", game_code: "d23b4424ca2b737a8abe94a4b0127ce4", game_type: "Arcade", game_image: "https://i.ibb.co.com/LzThBvHW/code-TBA41-Mysteco.png" },
        { game_name: "Chicken Route", game_code: "d5b66df095c326398b3639f691d7df65", game_type: "Crash Game", game_image: "https://i.ibb.co.com/6JZ5V4Rh/code-TBA43-Chicken-Route.png" },
        { game_name: "Balloon Doggo", game_code: "aee20eb53e911933570a851e5a80df99", game_type: "Crash Game", game_image: "https://i.ibb.co.com/84rBR0cX/code-TBA44-Balloon-Doggo.png" },
        { game_name: "Tapinata", game_code: "90845f8e578062ad637637233255397d", game_type: "Lottery", game_image: "https://i.ibb.co.com/zVfZfV6t/code-TBA42-Tapinata.png" },
        { game_name: "Vortex Safari", game_code: "fe6524ef5d36869e5f42d0d120920ace", game_type: "Slot", game_image: "https://i.ibb.co.com/GQD2y54Z/code-360027-Vortex.png" },
        { game_name: "Vortex PowerPlay", game_code: "a07033bfe471f603fbbdbc6b660db565", game_type: "Slot", game_image: "https://i.ibb.co.com/XZQVrH9F/code-TBA46-Vortex-Power-Play.png" },
        { game_name: "Vortex 2", game_code: "17b2f1e9f197a039fb40e3f620757c3a", game_type: "Slot", game_image: "https://i.ibb.co.com/HRvL2FT/code-TBA47-Vortex-2.png" },
        { game_name: "Vortex Aero", game_code: "329326a63623ac9063b643b2252fa7d6", game_type: "Crash Game", game_image: "https://i.ibb.co.com/JjcsjLwb/code-TBA49-Vortex-Aero.png" },
        { game_name: "Chicken Route: Ro-co-co", game_code: "dc755a9c94ab9044d780f4586ea9854e", game_type: "Crash Game", game_image: "https://i.ibb.co.com/hx3pbzTZ/code-TBA48-Chicken-Route-Ro-co-co.png" },
        { game_name: "Chicken Pirate Route", game_code: "1ea0731d3f18bf312286fa308d02fc73", game_type: "Crash Game", game_image: "https://i.ibb.co.com/yFHk4C9F/code-TBA51-Chicken-Pirate-Route.png" },
        { game_name: "Chicken GOAL", game_code: "702f067fdbd1112d2d1b0848ef5fafbe", game_type: "Crash Game", game_image: "https://i.ibb.co.com/GvXsys4C/code-TBA50-Chicken-Goal.png" }
    ],
};
const PenguinKing = {
    platform: "digital",
    provider: "PenguinKing",
    games: [
        { game_name: "God Smash: Eternal Chaos", game_code: "52c09d921a9c426f39005f9714d3b4b8", game_type: "Arcade", game_image: "https://i.ibb.co.com/v6ZXLFRx/PK-057-God-Smash-Eternal-Chaos.jpg" },
        { game_name: "Buffalo Smash: Supercharged", game_code: "9e4e055e37ac55774009625538bb5761", game_type: "Arcade", game_image: "https://i.ibb.co.com/9mp4TrNN/PK-028-Buffalo-Smash-Supercharged.jpg" },

        { game_name: "12 Treasures: Aztec Riches", game_code: "192ef90f52c626f1c89a2586ff886ed2", game_type: "Slot", game_image: "https://i.ibb.co.com/1Ys0pr5s/PK-058-12-Treasures-Aztec-Riches.jpg" },
        { game_name: "Buffalo Blaze: Wild Wealth", game_code: "7d5dabf9d46510c92a50363240aa09e8", game_type: "Slot", game_image: "https://i.ibb.co.com/Wp5VKZtJ/PK-059-Buffalo-Blaze-Wild-Wealth.jpg" },
        { game_name: "Sugar Splash", game_code: "ec6d70ae4c797b8fb03c4d53ea7c43dd", game_type: "Slot", game_image: "https://i.ibb.co.com/wh2msDJz/PK-060-Sugar-Splash.jpg" },
        { game_name: "Wish for a Cash Star", game_code: "55345c72dd38138eddf0ea3c93f5d9fb", game_type: "Slot", game_image: "https://i.ibb.co.com/Hp9TMfVr/PK-061-Wish-for-a-Cash-Star.jpg" },
        { game_name: "5 Star Coins Hold & Win", game_code: "8722948ea4c0abc8b42b3f99e041d98e", game_type: "Slot", game_image: "https://i.ibb.co.com/HMNvyJs/PK-062-5-Star-Coins-Hold-Win.jpg" },
        { game_name: "Kawaii Princess", game_code: "aa675a542e84c96bec1009511fa90b89", game_type: "Slot", game_image: "https://i.ibb.co.com/Y70mTz3T/PK-063-Kawaii-Princess.jpg" },
        { game_name: "Blazing Inferno Chaos Reels", game_code: "987935a6900b117d33432fa96feaf959", game_type: "Slot", game_image: "https://i.ibb.co.com/tp8z5d2f/PK-064-Blazing-Inferno-Chaos-Reels.jpg" },
        { game_name: "Thunder Hog Chaos Reels", game_code: "5f922a3e3204e9503a1631f2c45ce3ee", game_type: "Slot", game_image: "https://i.ibb.co.com/kVRRN4Pm/PK-065-Thunder-Hog-Chaos-Reels.jpg" },
        { game_name: "Joker Jackpots: Prize Mania", game_code: "8ac4f1adaadcced2b53987e3b45db992", game_type: "Slot", game_image: "https://i.ibb.co.com/My8Kdm5J/PK-066-Joker-Jackpots-Prize-Mania.jpg" },
        { game_name: "Grand Link Express: Hold & Win", game_code: "0cf14cda753c5ee5b19adbdfc3095ee3", game_type: "Slot", game_image: "https://i.ibb.co.com/ks4mpHz5/PK-027-Super-Grand-Link-Express-Hold-Win.jpg" },
        { game_name: "5 Rings of Darkness", game_code: "2aca8fb13b23712e50a5681048bd243b", game_type: "Slot", game_image: "https://i.ibb.co.com/mC2WSG5k/PK-068-5-Rings-of-Darkness.jpg" },
        { game_name: "Legends Battle for Earth", game_code: "86dcc6d29c616180c96fa8cd7df5c52b", game_type: "Slot", game_image: "https://i.ibb.co.com/rK3pnww3/PK-069-Legends-Battle-for-Earth.jpg" },
        { game_name: "Doom's Digging Machine", game_code: "e9c8dfed446aa266ce4bdcb768da35f9", game_type: "Slot", game_image: "https://i.ibb.co.com/LDz78v6N/PK-070-Doom-s-Digging-Machine.jpg" },
        { game_name: "Golden Suns Chain Collect", game_code: "9fed81accbaf790d211ff6f5ffabf1ed", game_type: "Slot", game_image: "https://i.ibb.co.com/d1r0k4H/PK-071-Golden-Suns-Chain-Collect.jpg" },
        { game_name: "Crop Of The Dead", game_code: "54e18a6d400082ae88b0f981eb74d8f6", game_type: "Slot", game_image: "https://i.ibb.co.com/VpL08xvt/PK-072-Crop-Of-The-Dead.jpg" },
        { game_name: "Mad Melons Chaos Reels", game_code: "931853997aed841ea41ed559af338cdf", game_type: "Slot", game_image: "https://i.ibb.co.com/3yHrGTnL/PK-073-Mad-Melons-Chaos-Reels.jpg" },
        { game_name: "777 Hot Reels", game_code: "4f6088d84900a22a1a802d03075954dd", game_type: "Slot", game_image: "https://i.ibb.co.com/HLz1bwF2/PK-074-777-Hot-Reels.jpg" },
        { game_name: "Jackpot Heist Daylight Robbery", game_code: "b7f9c228b76b02b341f0cc4e8887361d", game_type: "Slot", game_image: "https://i.ibb.co.com/KxH4hQQ6/PK-075-Jackpot-Heist-Daylight-Robbery.jpg" },
        { game_name: "Dystopia Rebel Road", game_code: "a92f1493f47a21b6ba544b3cb8ad0e49", game_type: "Slot", game_image: "https://i.ibb.co.com/7dfvX1t4/PK-076-Dystopia-Rebel-Road.jpg" },
        { game_name: "Barhalla", game_code: "f2994cdb708537bb837a5c03b08a923d", game_type: "Slot", game_image: "https://i.ibb.co.com/ZRXbsTsv/PK-077-Barhalla.jpg" },
        { game_name: "Midas Moolah: Random Reels", game_code: "de847e96dc85f72b21b05490232a4152", game_type: "Slot", game_image: "https://i.ibb.co.com/G4zfmR2q/PK-078-Midas-Moolah-Random-Reels.jpg" },
        { game_name: "Vault Blast Hold & Win", game_code: "268acef5afb3cbbdc5310a1952eb0b99", game_type: "Slot", game_image: "https://i.ibb.co.com/gZNRD9NB/PK-079-Vault-Blast-Hold-Win.jpg" },
        { game_name: "Cash Inferno Sizzling Scatters", game_code: "739b4983847b57f6227e36ae0f784ca4", game_type: "Slot", game_image: "https://i.ibb.co.com/6V3vq12/PK-080-Cash-Inferno-Sizzling-Scatters.jpg" },
        { game_name: "Doge Life", game_code: "277abd29347e73693dd23843ea514199", game_type: "Slot", game_image: "https://i.ibb.co.com/0RCknBL6/PK-081-Doge-Life.jpg" },
        { game_name: "Eternal Clash Reloaded", game_code: "dfee47e1a1b2f40d6d30f702776e1a0a", game_type: "Slot", game_image: "https://i.ibb.co.com/tp9czyQF/PK-082-Eternal-Clash-Reloaded.jpg" },
        { game_name: "Shaolin Panda Chaos Reels", game_code: "e018787f751135f220cc56c2122dfdda", game_type: "Slot", game_image: "https://i.ibb.co.com/fz3BRXH4/PK-083-Shaolin-Panda-Chaos-Reels.jpg" },
        { game_name: "Lord of the Dunes", game_code: "b91c9082f7309d3b0d2cffce5a074dab", game_type: "Slot", game_image: "https://i.ibb.co.com/0pSjc0sk/PK-084-Lord-of-the-Dunes.jpg" },

        { game_name: "Gold Smash", game_code: "6c660cdda3f2255b14ea7cd73242a840", game_type: "Arcade", game_image: "https://i.ibb.co.com/j9HcSJ0d/PK-085-Gold-Smash.jpg" },
        { game_name: "Hell Of A Spin", game_code: "f2de634fc33104bd10780d50d3eaa0b2", game_type: "Slot", game_image: "https://i.ibb.co.com/dwrn8Pkr/PK-086-Hell-Of-A-Spin.jpg" },
        { game_name: "Sphere Smash", game_code: "2d92c60859de65361d9c7e00657e896c", game_type: "Arcade", game_image: "https://i.ibb.co.com/mVxQmv6Y/PK-087-Sphere-Smash.jpg" },
        { game_name: "Eternal Clash", game_code: "34b2e45357ee26686fa7f96b5d8f7a6a", game_type: "Slot", game_image: "https://i.ibb.co.com/3Yf0bMWw/PK-088-Eternal-Clash.jpg" },
        { game_name: "Teddy's Quest", game_code: "6034acd15268048c2f71d8742e7e01ef", game_type: "Slot", game_image: "https://i.ibb.co.com/qYXySx4K/PK-089-Teddy-s-Quest.jpg" },
        { game_name: "Buffalo Smash", game_code: "74c2d71979677c83058479f1f2b8dcdd", game_type: "Arcade", game_image: "https://i.ibb.co.com/RTqdw1BL/PK-090-Buffalo-Smash.jpg" },
        { game_name: "Wilfred's Wheel", game_code: "7f90c24f4e5c6e8327123300e9851a04", game_type: "Slot", game_image: "https://i.ibb.co.com/JwJDygF2/PK-091-Wilfred-s-Wheel.jpg" },
        { game_name: "Royal Ribbit", game_code: "3364dcd31c8fed15b1d12099e00e7064", game_type: "Slot", game_image: "https://i.ibb.co.com/MDdD31P4/PK-092-Royal-Ribbit.jpg" },
        { game_name: "Santa Smash", game_code: "fedec2e75b9b43d3328d570784aa647b", game_type: "Arcade", game_image: "https://i.ibb.co.com/27QwGSH1/PK-093-Santa-Smash.jpg" },
        { game_name: "Christmas Crumble", game_code: "dce4345d758d23b5f60b746a5e2d756e", game_type: "Slot", game_image: "https://i.ibb.co.com/pBwwqk4Q/PK-094-Christmas-Crumble.jpg" },
        { game_name: "Eggsponential", game_code: "9281bd7bb93b8568906b536ff5f2af90", game_type: "Slot", game_image: "https://i.ibb.co.com/yC7NMS5/PK-095-Eggsponential.jpg" },
        { game_name: "Caishen Smash", game_code: "397faa09bcfa7762363ec9eab5b1a5a8", game_type: "Arcade", game_image: "https://i.ibb.co.com/hFJDLcxt/PK-096-Caishen-Smash.jpg" },
        { game_name: "Bounty Smash", game_code: "16c1a6077f9f573fbf6c5bec3d413a2e", game_type: "Arcade", game_image: "https://i.ibb.co.com/TqD0GLnf/PK-097-Bounty-Smash.jpg" },
        { game_name: "Bass Smash", game_code: "bddc576172ea2a9cc27678dd97341344", game_type: "Arcade", game_image: "https://i.ibb.co.com/CKFyVbNw/PK-098-Bass-Smash.jpg" }
    ],
};
const Topbet = {
    platform: "digital",
    provider: "Topbet",
    games: [
        { game_name: "Mines", game_code: "67ef278b80259a3545f84321bb59e2b7", game_type: "Crash Game", game_image: "https://i.ibb.co.com/cXgw032X/100-Mines.jpg" },
        { game_name: "Hilo", game_code: "d538ec191dcd1fde89a32deb0e39282a", game_type: "Crash Game", game_image: "https://i.ibb.co.com/1f2TD23d/101-Hilo.jpg" },
        { game_name: "Dice", game_code: "505332ebc5bfbdeedb0954bde9b6effd", game_type: "Crash Game", game_image: "https://i.ibb.co.com/4R79ZcJs/102-Dice.jpg" },
        { game_name: "Plinko", game_code: "055d2f9d4bb9ad311780acf22ca6f347", game_type: "Crash Game", game_image: "https://i.ibb.co.com/BVbPJJrQ/103-Plinko.jpg" },
        { game_name: "Mini Roulette", game_code: "233e0ef523c95831647c5dde8e2246e1", game_type: "Crash Game", game_image: "https://i.ibb.co.com/PsyFHnG6/104-Mini-Roulette.jpg" },
        { game_name: "Goal", game_code: "e02d54b06338e10e67e07e8ee7866a7e", game_type: "Crash Game", game_image: "https://i.ibb.co.com/9kDjF2p3/105-Goal.jpg" },
        { game_name: "Keno", game_code: "5e3c31c8bfd7a48f1f254732e0444a87", game_type: "Crash Game", game_image: "https://i.ibb.co.com/DgLbj0v1/106-Keno.jpg" },
        { game_name: "Hotline", game_code: "226b048d0f0b12d5f422c8d7c7a58c5f", game_type: "Crash Game", game_image: "https://i.ibb.co.com/qLHhFd5q/107-Hotline.jpg" },
        { game_name: "Space Dice", game_code: "f039064c5c501e22b3c024ba83097cff", game_type: "Crash Game", game_image: "https://i.ibb.co.com/Q39HgzPj/108-Space-Dice.jpg" },
        { game_name: "Coinflip", game_code: "71e01b4be07d5dbfd9eea350383d41fa", game_type: "Crash Game", game_image: "https://i.ibb.co.com/TBYzsC1t/109-Coinflip.jpg" },
        { game_name: "Limbo", game_code: "9a50e895bd7dff9e981f02560ddc6ee8", game_type: "Crash Game", game_image: "https://i.ibb.co.com/bR7WBJ5h/110-Limbo.jpg" },
        { game_name: "Cryptos", game_code: "d19228d324d17c2c5523f7d4a2b1fae7", game_type: "Crash Game", game_image: "https://i.ibb.co.com/G3457WKS/111-Cryptos.jpg" },
        { game_name: "Triple", game_code: "da36bba55592e7d055fd3639f2e207f0", game_type: "Crash Game", game_image: "https://i.ibb.co.com/9kv2d6Lb/112-Triple.jpg" },
        { game_name: "Pharaoh", game_code: "2d292def6b0a85141f94ce2f937e2e6f", game_type: "Crash Game", game_image: "https://i.ibb.co.com/JwJ8zs5J/113-Pharaoh.jpg" },
        { game_name: "Horse Racing", game_code: "5d71418e91e96c628ad9aef0b52e2b4b", game_type: "Crash Game", game_image: "https://i.ibb.co.com/ZzBL77zb/114-Horse-Racing.jpg" },

        { game_name: "King And Pauper", game_code: "e1e801891948fd17e6cff53aaf1894c8", game_type: "Crash Game", game_image: "https://i.ibb.co.com/1YqxCfrc/116-King-And-Pauper.jpg" },
        { game_name: "Draw Poker", game_code: "01d8315adc67ea077ffcd2caff6240a7", game_type: "Crash Game", game_image: "https://i.ibb.co.com/k6snJPRk/118-Draw-Poker.jpg" },
        { game_name: "Treasure", game_code: "02a8831f992afa249cecf9e9745f6364", game_type: "Crash Game", game_image: "https://i.ibb.co.com/s9DMPf2g/119-Treasure.jpg" },
        { game_name: "Snakes", game_code: "ee6ebe30d23bd530157cded302561946", game_type: "Crash Game", game_image: "https://i.ibb.co.com/F4vBc4y6/120-Snakes.jpg" },
        { game_name: "Chicken Road 2", game_code: "e84bc6d1145290e1fd482246f804ed9a", game_type: "Crash Game", game_image: "https://i.ibb.co.com/dJBbyBJs/121-Chicken-Road-2.jpg" },
        { game_name: "Penalty", game_code: "a4e9c1ab6e3eb569319480b49ac9a05f", game_type: "Crash Game", game_image: "https://i.ibb.co.com/xKz3tp9X/122-Penalty.jpg" },
        { game_name: "Chicken Road", game_code: "3cf5c335ae7016cb6c09e1de0a3762e8", game_type: "Crash Game", game_image: "https://i.ibb.co.com/vx8prB0C/123-Chicken-Road.jpg" },
        { game_name: "Vortex", game_code: "c59825f35cf308ba3fb678ea42909fad", game_type: "Crash Game", game_image: "https://i.ibb.co.com/CK7fJDh1/124-Vortex.jpg" },
        { game_name: "Avia Masters", game_code: "5c4a673937bf361186af811ed1cdb753", game_type: "Crash Game", game_image: "https://i.ibb.co.com/8D18WmC3/125-Avia-Masters.jpg" },
        { game_name: "Bomb Wave", game_code: "7d184ea8e7f777549b7237b0102480f5", game_type: "Crash Game", game_image: "https://i.ibb.co.com/fV6Vcs0r/500-Bomb-Wave.jpg" },
        { game_name: "Treasure Wave", game_code: "ea35772b01f545317af1195aaca5fe07", game_type: "Crash Game", game_image: "https://i.ibb.co.com/ds6BKzbc/501-Treasure-Wave.jpg" },
        { game_name: "Goal Wave", game_code: "696146d24a09f064b2057a8b5d504287", game_type: "Crash Game", game_image: "https://i.ibb.co.com/hFXT7wQ4/502-Goal-Wave.jpg" },
        { game_name: "Coin Wave", game_code: "3fcb224334d59a510e6a2bf0990c96a7", game_type: "Crash Game", game_image: "https://i.ibb.co.com/DDnsq5BH/503-Coin-Wave.jpg" },
        { game_name: "Hilo Wave", game_code: "20b22d500081b8acd106ab440062c82d", game_type: "Crash Game", game_image: "https://i.ibb.co.com/rNq6Pq2/504-Hilo-Wave.jpg" },
        { game_name: "Clash Of Hands", game_code: "11d0207e289ef0ae9f599040f52747e9", game_type: "Crash Game", game_image: "https://i.ibb.co.com/ZRbtGf9X/505-Clash-Of-Hands.jpg" },
        { game_name: "Aviator", game_code: "9d77a4ed5a2ba192d63c543f08609395", game_type: "Crash Game", game_image: "https://i.ibb.co.com/kszRM6DD/800-Aviator.jpg" },
        { game_name: "Spribe Aviator", game_code: "c8db07594c7a54891531a4a09e0a956b", game_type: "Crash Game", game_image: "https://i.ibb.co.com/vCgC9pQm/804-Spribe-Aviator.jpg" },
        { game_name: "Cricket", game_code: "452857a6315d9ec264549263842dc6c1", game_type: "Crash Game", game_image: "https://i.ibb.co.com/7dbg1QRJ/810-Cricket.jpg" },
        { game_name: "Air Combet", game_code: "1709828ba5450f77cfb28944f00c0ee0", game_type: "Crash Game", game_image: "https://i.ibb.co.com/60qWkv2p/820-Air-Combet.jpg" },
        { game_name: "Mines Pro", game_code: "240df7e120983c52275a51fe13b48b35", game_type: "Crash Game", game_image: "https://i.ibb.co.com/zhd8xyPS/811-Mines-Pro.jpg" },
        { game_name: "Javelin", game_code: "59a22cbd11761e1304b24e2297be78d3", game_type: "Crash Game", game_image: "https://i.ibb.co.com/0R6wSK7c/812-Javelin.jpg" },
        { game_name: "Rocket", game_code: "4d8235d4deba724fec689b24f6746393", game_type: "Crash Game", game_image: "https://i.ibb.co.com/1JjNb37w/813-Rocket.jpg" },
        { game_name: "Andar Bahar", game_code: "65474408f9d02f66e6e30bf6a1436b07", game_type: "Crash Game", game_image: "https://i.ibb.co.com/TM9yLBHR/814-Andar-Bahar.jpg" },
        { game_name: "Keno80", game_code: "714d37cd2f99fc30faf6e94f326cb69a", game_type: "Crash Game", game_image: "https://i.ibb.co.com/B29kNNx9/900-Keno80.jpg" },
        { game_name: "WinGo", game_code: "ab5c6163df8f8ae68c65af84f1b7a9b3", game_type: "Crash Game", game_image: "https://i.ibb.co.com/3mW4jSkt/902-Win-Go.jpg" },
        { game_name: "Dragon Tiger", game_code: "61ac0787e133434e961796f7ee2a000a", game_type: "Crash Game", game_image: "https://i.ibb.co.com/C5gdtXWV/903-Dragon-Tiger.jpg" },

        { game_name: "Pawsome Plinko", game_code: "af5d256cb36621d3d75c182a27410953", game_type: "Slot Game", game_image: "https://i.ibb.co.com/q3XT26ZR/126-Pawsome-Plinko.jpg" },
        { game_name: "7Up 7Down", game_code: "4f4fd8599b2a53ed48dd052539c8ffdd", game_type: "Slot Game", game_image: "https://i.ibb.co.com/nqbQYDGY/908-7-Up-7-Down.jpg" }
    ]
};
const Hacksaw = {
    platform: "digital",
    provider: "Hacksaw",
    games: [

        { game_name: "Mines", game_code: "bcd3e1c0b01622a9dfce7e1b2964363c", game_type: "Arcade", game_image: "https://i.ibb.co.com/mV9JyWz0/code-HA80-Mines.png" },
        { game_name: "Coins", game_code: "6e70796ab6df875b9ced09b209714de9", game_type: "Arcade", game_image: "https://i.ibb.co.com/hJXQ65Ks/code-HA81-Coins.png" },
        { game_name: "Boxes", game_code: "5c18dc44c4fc7f1c5ab30be9a57cd926", game_type: "Arcade", game_image: "https://i.ibb.co.com/MyY79JD6/code-HA82-Boxes.png" },
        { game_name: "Plinko", game_code: "1cc8cf1decceb41b613932f040e18473", game_type: "Arcade", game_image: "https://i.ibb.co.com/PzzSz5j6/code-HA83-Plinko.png" },
        { game_name: "Hi-Lo", game_code: "8b07bed7c32dd2c0dcc2065c05b78761", game_type: "Arcade", game_image: "https://i.ibb.co.com/gZ447H79/code-HA84-Hi-Lo.png" },
        { game_name: "Lines", game_code: "ded2acdff772ca868500312b0f25ca0f", game_type: "Arcade", game_image: "https://i.ibb.co.com/4nXq10S2/code-HA85-Lines.png" },
        { game_name: "Wheel", game_code: "f382731c2739cfd4d366301ea91b95f2", game_type: "Arcade", game_image: "https://i.ibb.co.com/0pfd1n2w/code-HA86-Wheel.png" },
        { game_name: "Blocks", game_code: "8e947d9bf6321621ff5d862cfe53425c", game_type: "Arcade", game_image: "https://i.ibb.co.com/LDwcrf63/code-HA87-Blocks.png" },
        { game_name: "Colors", game_code: "8c42dd2978bf7cc002ffb68f2b6cfa94", game_type: "Arcade", game_image: "https://i.ibb.co.com/j9Pkg4Cj/code-HA88-Colors.png" },
        { game_name: "Twenty-one", game_code: "e769181d161924bbd2b4f704b12b6e61", game_type: "Arcade", game_image: "https://i.ibb.co.com/5WqFG2ch/code-HA89-Twenty-one.png" },
        { game_name: "Dice", game_code: "13feee2ab04a460ca0689ad33a8c1457", game_type: "Arcade", game_image: "https://i.ibb.co.com/9mNyjvTR/code-HA95-Dice.png" },
        { game_name: "Limbo", game_code: "b45eae26b2a5be37dd42ccf22c95db8b", game_type: "Arcade", game_image: "https://i.ibb.co.com/N6V1ctz6/code-HA96-Limbo.png" },
        { game_name: "Speed Crash", game_code: "4642a9ce257c3d2b109121b5f41cd834", game_type: "Arcade", game_image: "https://i.ibb.co.com/YHKMhTV/code-HA100-Speed-Crash.png" },

        { game_name: "Stick'em", game_code: "8accf7ef4f488751745d14be53371ddb", game_type: "Slot", game_image: "https://i.ibb.co.com/YF1CdbHT/code-HA01-Stick-em.png" },
        { game_name: "OmNom", game_code: "4b3b9e5e036a3403c505a38bffd08858", game_type: "Slot", game_image: "https://i.ibb.co.com/YFHZ7KqH/code-HA02-Om-Nom.png" },
        { game_name: "Miami Multiplier", game_code: "e2c75c3b978962180596eda691f26a67", game_type: "Slot", game_image: "https://i.ibb.co.com/kgHkPwwd/code-HA03-Miami-Multiplier.png" },
        { game_name: "Cubes", game_code: "7f9ffa3fb7ad02b246e19a77f6dddea5", game_type: "Slot", game_image: "https://i.ibb.co.com/CszWr12W/code-HA04-Cubes.png" },
        { game_name: "Cash Compass", game_code: "1f25f2b8ef8369dc6abf3b9b6aec4cf7", game_type: "Slot", game_image: "https://i.ibb.co.com/m55YDLtF/code-HA05-Cash-Compass.png" },
        { game_name: "The Respinners", game_code: "f973ac628b500901913732958a3f1e53", game_type: "Slot", game_image: "https://i.ibb.co.com/DDJkRwyG/code-HA06-The-Respinners.png" },
        { game_name: "Chaos Crew", game_code: "af44f3f064dd5c85ff0517f31afba159", game_type: "Slot", game_image: "https://i.ibb.co.com/fYr4MXjr/code-HA07-Chaos-Crew.png" },
        { game_name: "Mystery Motel", game_code: "d2443b00d1cc8db31e8835b265133a70", game_type: "Slot", game_image: "https://i.ibb.co.com/V0m7hKwD/code-HA08-Mystery-Motel.png" },
        { game_name: "Let It Snow", game_code: "a4e10a351829cbb7b45807eddbd48a1c", game_type: "Slot", game_image: "https://i.ibb.co.com/VYycrs1G/code-HA09-Let-It-Snow.png" },
        { game_name: "Cubes 2", game_code: "1f179fe0dad3f8960ef3fa7f5a9dd98e", game_type: "Slot", game_image: "https://i.ibb.co.com/ksR0CXkm/code-HA10-Cubes-2.png" },
        { game_name: "Aztec Twist", game_code: "766aa9c6d27d8a62d2a0c8e6cc29e636", game_type: "Slot", game_image: "https://i.ibb.co.com/cctQNgGS/code-HA11-Aztec-Twist.png" },
        { game_name: "Frutz", game_code: "60be8265cbe7eca6e8e06c34fe602c8b", game_type: "Slot", game_image: "https://i.ibb.co.com/vxmgpHZb/code-HA12-Frutz.png" },
        { game_name: "Stack 'Em", game_code: "9852c83e60f33268e63e7b7bff57b05d", game_type: "Slot", game_image: "https://i.ibb.co.com/fzcM6s69/code-HA13-Stack-Em.png" },
        { game_name: "Hop'n'Pop", game_code: "c60027c045f8fb11094d6a8be3a2b26f", game_type: "Slot", game_image: "https://i.ibb.co.com/yBZG7z4C/code-HA14-Hop-n-Pop.png" },
        { game_name: "Xpander", game_code: "fc33f5d1a8b098f911cc879750712e76", game_type: "Slot", game_image: "https://i.ibb.co.com/rKkZKy79/code-HA15-Xpander.png" },
        { game_name: "Toshi Video Club", game_code: "5c57c72765febfd3251170c703169f01", game_type: "Slot", game_image: "https://i.ibb.co.com/pBQ3hTRJ/code-HA16-Toshi-Video-Club.png" },
        { game_name: "Rocket Reels", game_code: "d36d3dfe5647b17a57918cde4dedecc6", game_type: "Slot", game_image: "https://i.ibb.co.com/tTXb6rhH/code-HA17-Rocket-Reels.png" },
        { game_name: "Wanted Dead or a Wild", game_code: "3f07c6a5ca3ee237a6b187749bdcb544", game_type: "Slot", game_image: "https://i.ibb.co.com/q35ds7Lt/code-HA18-Wanted-Dead-or-a-Wild.png" },
        { game_name: "Cash Quest", game_code: "f6f9f2aa20ce74b4834f93031c0ead57", game_type: "Slot", game_image: "https://i.ibb.co.com/3YVkCbGQ/code-HA19-Cash-Quest.png" },
        { game_name: "Tasty Treats", game_code: "c5070a4a66cfae24e63ba0d346e66ddb", game_type: "Slot", game_image: "https://i.ibb.co.com/DfVx80WT/code-HA20-Tasty-Treats.png" },
        { game_name: "Joker Bombs", game_code: "dfc625a3de158a68465acc6057968d2d", game_type: "Slot", game_image: "https://i.ibb.co.com/1fQG0y2r/code-HA21-Joker-Bombs.png" },
        { game_name: "King Carrot", game_code: "ec1d59de2b3669308b5217a74f38b0e1", game_type: "Slot", game_image: "https://i.ibb.co.com/HDWv5Cb4/code-HA22-King-Carrot.png" },
        { game_name: "Harvest Wilds", game_code: "405e180c25c02007a78da00986e2a3be", game_type: "Slot", game_image: "https://i.ibb.co.com/bMwRdGbs/code-HA23-Harvest-Wilds.png" },
        { game_name: "The Bowery Boys", game_code: "4f22d7b0a13eaf6e99ade589f6f8ca55", game_type: "Slot", game_image: "https://i.ibb.co.com/RxyfwZX/code-HA24-The-Bowery-Boys.png" }
    ]

};
const microgaming = {
    platform: "digital",
    provider: "microgaming",
    games: [
        {
            game_name: "Long Long Long",
            game_code: "3edeaef8aeb30ef289e6e54589978bc1",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/gZfjhRq3/code-MG177-Long-Mu-Fortunes.png"
        },

        {
            game_name: "SMG_theIncredibleBalloonMachine",
            game_code: "d7f07998a42f33cdd13a2c3b60a2b7bc",
            game_type: "Arcade",
            game_image: "https://i.ibb.co.com/9XDCnK9/code-MG98-The-Incredible-Balloon-Machine.png"
        },

        {
            game_name: "SMG_monsterBlast",
            game_code: "df8faaa433ce859696ea350aeaad6089",
            game_type: "Arcade",
            game_image: "https://i.ibb.co.com/RMnk6Mq/code-MG152-Monster-Blast.png"
        },
        {
            game_name: "SMG_treasureDash",
            game_code: "f2e93907964f7632245733a5f223c692",
            game_type: "Arcade",
            game_image: "https://i.ibb.co.com/Wvj6dbQn/code-MG88-Treasure-Dash.png"
        },

        {
            game_name: "SMG_incanAdventure",
            game_code: "8af059346463c54641817d7938677e45",
            game_type: "Arcade",
            game_image: "https://i.ibb.co.com/WpxqdJy6/code-MG197-Incan-Adventure.png"
        },
        {
            game_name: "SMG_flyX",
            game_code: "5e52a78a913c4ff0b217802ac5bb18d9",
            game_type: "Arcade",
            game_image: "https://i.ibb.co.com/h17vRxZS/code-MG34-Fly-X.png"
        },
        {
            game_name: "SMG_fruitBlast",
            game_code: "399be438fa9e101b38bba6944859e60a",
            game_type: "Arcade",
            game_image: "https://i.ibb.co.com/gqNy5ms/code-MG216-Fruit-Blast.png"
        },
        {
            game_name: "SMG_cricketStarScratch",
            game_code: "139c8d6fc545358eadf9ab77fcb69bc6",
            game_type: "Arcade",
            game_image: "https://i.ibb.co.com/HL5WcDpR/code-MG249-Cricket-Star.png"
        },
        {
            game_name: "SMG_breakAwayShootout",
            game_code: "bf8d3cd1bd4bf62a3a7ee55a6f166405",
            game_type: "Arcade",
            game_image: "https://i.ibb.co.com/fYSYjm7C/code-MG419-Break-Away-Shootout.png"
        },

    ]
};
const NextSpin = {
    platform: "digital",
    provider: "NextSpin",
    games: [
        {
            game_name: "Long Long Long",
            game_code: "3edeaef8aeb30ef289e6e54589978bc1",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/V0dSywCk/NS-01-Long-Long-Long.png"
        },
        {
            game_name: "Crazy Monkey",
            game_code: "173f041bdc7fb4ece2b557a8aa15ddd7",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/R44przqb/NS-02-Crazy-Monkey.png"
        },
        {
            game_name: "Diamond 7",
            game_code: "28c9922e0ae7c409be4f7959c86c720f",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/kgRW09BB/NS-03-Diamond-7.png"
        },
        {
            game_name: "Highway Bee",
            game_code: "9a8e605c9402776efa48490cde32fc47",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/svrLjNQv/NS-04-Highway-Bee.png"
        },
        {
            game_name: "Classic Fruits 7",
            game_code: "42dcaf155e2d3120ca3597abd6359c0b",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/mCN3XFG4/NS-05-Classic-Fruits-7.png"
        },
        {
            game_name: "Shake Boom Boom",
            game_code: "eec03e29bc96882058e2a904c0419a96",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/Z1xqBmMN/NS-06-Shake-Boom-Boom.png"
        },
        {
            game_name: "Holy Goat",
            game_code: "d5d2e3cce4b1a24a812dc417090100da",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/4RSWqvtv/NS-07-Holy-Goat.png"
        },
        {
            game_name: "Double Monkey",
            game_code: "9b05d15b38cee3d128e429ec2e80a161",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/rKh1nBCQ/NS-08-Double-Monkey.png"
        },
        {
            game_name: "Joker King",
            game_code: "027b7e2b2ba873a1aaf986ff91e299b8",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/mF4qr1vZ/NS-09-Joker-King.png"
        },
        {
            game_name: "Triple Kung Fu Monkey",
            game_code: "5490a8dfcfc009def1a52167cb2480ee",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/7xrtrwTh/NS-10-Triple-Kung-Fu-Monkey.png"
        },
        {
            game_name: "Mr. Hippo",
            game_code: "df337859409d0ff9a44d7f3110f0ad0b",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/jkmYNy3v/NS-11-Mr-Hippo.png"
        },
        {
            game_name: "Maya Quest",
            game_code: "02541a3325a27277dd085d1ba6e3b2f0",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/h1ZxfSbz/NS-12-Maya-Quest.png"
        },
        {
            game_name: "Dragon Blitz",
            game_code: "083139f462e4e6c4c8cd770b708c0273",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/CK3NYgxK/NS-13-Dragon-Blitz.png"
        },
        {
            game_name: "Crazy Monkey Deluxe",
            game_code: "ef7694c4d8db3de6197a51fa46f778a3",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/pjnKHf4n/NS-14-Crazy-Monkey-Deluxe.png"
        },
        {
            game_name: "Lucky Gems",
            game_code: "f3890d863c7fb26946b50c9785f3a3ef",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/xqG9hPpG/NS-15-Lucky-Gems.png"
        },
        {
            game_name: "Monkey Jump",
            game_code: "a7c6b621fb947a0b834843e5e875c2e1",
            game_type: "Arcade",
            game_image: "https://i.ibb.co.com/DDVGWLM2/NS-20-Monkey-Jump.png"
        },
        {
            game_name: "Honey 888",
            game_code: "714cd6cc7c0bdb257abe0748e1f00169",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/8LLhpfBm/NS-22-Honey-888.png"
        },
        {
            game_name: "5 Fortune Stars",
            game_code: "cb6d12dd8739a0009be38eece9c92089",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/qLwsTbP8/NS-23-5-Fortune-Stars.png"
        },
        {
            game_name: "Buffalo King",
            game_code: "83b3c17092f0e4098f6c48ed77758718",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/wNmsrccg/NS-24-Buffalo-King.png"
        },
        {
            game_name: "Lightning Woman",
            game_code: "d66446829704e7e412fe858eccfda3d2",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/TM4SQLNW/NS-25-Lightning-Woman.png"
        },
        {
            game_name: "Hot Smash",
            game_code: "6ec298f9a6d5a39779fe485f3c3c9447",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/GvfMyVTR/NS-26-Hot-Smash.png"
        },
        {
            game_name: "Ocean Chest",
            game_code: "f7f39b74bf706e8421cef8a8adbd6287",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/CpmDjmBW/NS-39-Ocean-Chest.png"
        },
        {
            game_name: "Donki Kong",
            game_code: "119026c9a50a4ab3d2fda75b220f7c50",
            game_type: "Arcade",
            game_image: "https://i.ibb.co.com/RGpgXj96/NS-40-Donki-Kong.png"
        },
        {
            game_name: "Fishing Paradise",
            game_code: "cb835d601b9d081cf5615918aa5332af",
            game_type: "Fish Game",
            game_image: "https://i.ibb.co.com/ym3b7Hq4/NS-44-Fishing-Paradise.png"
        },
        {
            game_name: "Big Cai Shen",
            game_code: "c9b328a82d3d1361f46a15dc0def0129",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/1JXRs2js/NS-45-Big-Cai-Shen.jpg"
        },
        {
            game_name: "Roma II",
            game_code: "6cf76839ab9f3f3b8dcf0d955a258f46",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/6J8xNXHf/NS-46-Roma-II.png"
        },
        {
            game_name: "Lightning Dragon",
            game_code: "2daa3b96257672295d21cd7f6b3ed04d",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/TDZQg9zn/NS-48-Lightning-Dragon.png"
        },
        {
            game_name: "Princess of Ra",
            game_code: "e0f593c2ed58a4b02eb1744263051593",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/yBgRwfNh/NS-50-Princess-of-Ra.png"
        },
        {
            game_name: "Mahjong Dragon",
            game_code: "69c4b9c89194bd57e5c972498028bf2d",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/PZj97DMc/NS-52-Mahjong-Dragon.png"
        },
        {
            game_name: "Zeus Mighty Wealth",
            game_code: "d6eff5847f7d605a7c3ac2ee5172e12d",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/CKxwvg7z/NS-57-Zeus-Mighty-Wealth.jpg"
        }
    ]
};
const FastSpin = {
    platform: "digital",
    provider: "FastSpin",
    games: [
        {
            game_name: "Ocean Carnival",
            game_code: "f1606550cc2110be65e134be6693495f",
            game_type: "FISHING",
            game_image: "https://i.ibb.co.com/xt65n4RJ/F-001-Ocean-Carnival.jpg"
        },
        {
            game_name: "Fishing Treasure",
            game_code: "5fa951b60fd3387d83b2029763193cc2",
            game_type: "FISHING",
            game_image: "https://i.ibb.co.com/4R38QB91/F-002-Fishing-Treasure.png"
        },
        {
            game_name: "Candy Super Tumble",
            game_code: "7670147417f3d4ecf00a3ac180a30efd",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/HDKLrtKL/F-003-Candy-Super-Tumble.jpg"
        },
        {
            game_name: "Jungle Quest",
            game_code: "fe5bb309f6849942cf788d72d9b80bc5",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/C32QYYnW/F-004-Jungle-Quest.jpg"
        },
        {
            game_name: "Blade of Fortune",
            game_code: "94a1353177b3466a67f70021893aca67",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/39KPMMMd/F-005-Blade-of-Fortune.jpg"
        },
        {
            game_name: "Wild Mafia",
            game_code: "6ab9b470b5049025104d710fcc8f4091",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/LzG0GYJm/F-006-Wild-Mafia.jpg"
        },
        {
            game_name: "Alien Smash",
            game_code: "70ff4744e87b0124c1840e09446f9292",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/fZYG9BB/F-007-Alien-Smash.jpg"
        },
        {
            game_name: "Snake Treasure",
            game_code: "02a6445f671a56c435d0a98cfce5f479",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/Ps0Dn9Jb/F-008-Snake-Treasure.jpg"
        },
        {
            game_name: "Guardian of the Museum",
            game_code: "dfcca5c7420280aece1ee28d94c560f8",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/k2JTsGZY/F-009-Guardian-of-the-Museum.jpg"
        },
        {
            game_name: "Beasts of Luck",
            game_code: "bc71e694e3e21cf662c40a95bcb88252",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/CsTnTDCt/F-010-Beasts-of-Luck.jpg"
        },
        {
            game_name: "Pumpkins Go Lucky",
            game_code: "5603ec5b778820ddb69673626402dda3",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/rR8tw4Ck/F-011-Pumpkins-Go-Lucky.jpg"
        },
        {
            game_name: "Apollo Ray of Luck",
            game_code: "95a295cb2fed7dc72bc9552f00c1162d",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/hF40NSVg/F-012-Apollo-Ray-of-Luck.jpg"
        },
        {
            game_name: "Nezha",
            game_code: "287a6d42bff507c831c3ee53c6a519d0",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/h1CwPpf8/F-013-Nezha.jpg"
        },
        {
            game_name: "Pai Gow Ways",
            game_code: "85802d51c1da2e7deb2b821642b8c06b",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/FLBQrgSn/F-014-Pai-Gow-Ways.jpg"
        },
        {
            game_name: "Mahjong Princess",
            game_code: "64588f61b265819f4f37e0ce3d25ef60",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/qF53Pbqq/F-015-Mahjong-Princess.jpg"
        },
        {
            game_name: "Caribbean Riches",
            game_code: "4295951dd153df37ceed88a2c52a7d63",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/zTgj4XZM/F-016-Caribbean-Riches.jpg"
        },
        {
            game_name: "Farm Of Fortune",
            game_code: "41eb48def69db51d75c2ba453912655d",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/KS5Zjk3/F-017-Farm-Of-Fortune.jpg"
        },
        {
            game_name: "Adventure To The West",
            game_code: "013badb5ea523b60f102753ee0f1f150",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/mFDR5mcM/F-018-Adventure-To-The-West.jpg"
        },
        {
            game_name: "Money Dragon",
            game_code: "69ecf345b0ba235319ac9f224ba76236",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/RTZj1DHR/F-019-Money-Dragon.jpg"
        },
        {
            game_name: "Ranger Showdown",
            game_code: "7c6007d9ba2db80a04a1e0a7eb46d8e8",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/LdZfQNzG/F-020-Ranger-Showdown.jpg"
        },
        {
            game_name: "Yeti Boom",
            game_code: "3e64439df128cc1a98dbad4a02c0935f",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/BVdFN6Ky/F-021-Yeti-Boom.jpg"
        },
        {
            game_name: "Money Empire",
            game_code: "5a7ba344416b8911881457b5a71da0ce",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/F4Qq7fJJ/F-022-Money-Empire.jpg"
        },
        {
            game_name: "Leprechaun Bonanza",
            game_code: "a9ba5cde9103cf71fffbd65f2629f9cd",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/3y8cwfQt/F-023-Leprechaun-Bonanza.jpg"
        },
        {
            game_name: "Sweet Frenzy",
            game_code: "6901234b0b8090c609b2f9a68281d34b",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/sp5X9mx3/F-024-Sweet-Frenzy.jpg"
        },
        {
            game_name: "City of Jewels",
            game_code: "cb5daea3e2a2a688e30b01659eea6ed2",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/BHLgknK3/F-025-City-of-Jewels.jpg"
        },
        {
            game_name: "Mushroom Bandit",
            game_code: "cb9aa4e8c9791bacc3605241cd65e4ff",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/PzFZhqk8/F-026-Mushroom-Bandit.jpg"
        },
        {
            game_name: "Mighty Sevens",
            game_code: "3195c50b8dac84360463008a51f4b3d5",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/G448pGmH/F-027-Mighty-Sevens.jpg"
        },
        {
            game_name: "Neko Riches",
            game_code: "81396e48d80069867d916e51bdd4bb26",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/KxsXfvcy/F-028-Neko-Riches.png"
        },
        {
            game_name: "The Great Safari",
            game_code: "0dc1fac12a21b8fd04578dc6f82e0878",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/Y7gQw7sL/F-029-The-Great-Safari.jpg"
        },
        {
            game_name: "Tiki Rush",
            game_code: "283c494f7478794cd3976a57e01902e4",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/zV1rqHcs/F-030-Tiki-Rush.jpg"
        }
    ]
};
const EEAi = {
    platform: "digital",
    provider: "EEAi",
    games: [
        {
            game_name: "Game Lobby",
            game_code: "80855de5f07389129dfd148fad04f335",
            game_type: "Lobby",
            game_image: "https://i.ibb.co.com/Lb4Y5sp/EEAi-01-Game-Lobby.png"
        },
        {
            game_name: "Baccarat",
            game_code: "b37409879a6172c410fe2364c6683f11",
            game_type: "Live",
            game_image: "https://i.ibb.co.com/qYkfYHC3/EEAi-02-Baccarat.png"
        },
        {
            game_name: "Live Baccarat",
            game_code: "24148ae3e93e0082727ebdbb4ec8aaa6",
            game_type: "Live",
            game_image: "https://i.ibb.co.com/bgc5BRcR/EEAi-03-Live-Baccarat.png"
        },
        {
            game_name: "Lightning Baccarat",
            game_code: "f8e2a51bc5ac52d07c1bb169f2827cf9",
            game_type: "Live",
            game_image: "https://i.ibb.co.com/bMkGZW6d/EEAi-04-Lightning-Baccarat.png"
        },
        {
            game_name: "Roulette",
            game_code: "0b8f2bb935ac621bd5ded413eed6fb63",
            game_type: "Roulette",
            game_image: "https://i.ibb.co.com/bjg9dqjH/EEAi-05-Roulette.png"
        },
        {
            game_name: "Dragon Tiger",
            game_code: "1ff5cc4cd598df769856409dffc300c3",
            game_type: "Live",
            game_image: "https://i.ibb.co.com/Hf1V1Sj5/EEAi-06-Dragon-Tiger.png"
        },
        {
            game_name: "Sicbo",
            game_code: "410764b6270feda82756070c2eefa2ba",
            game_type: "Dice",
            game_image: "https://i.ibb.co.com/LDQM2Kdf/EEAi-07-Sicbo.png"
        },
        {
            game_name: "LuckyLace",
            game_code: "c58f339dd5227df613cacc559368cf6f",
            game_type: "Live",
            game_image: "https://i.ibb.co.com/M5sBMb2R/EEAi-08-Lucky-Lace.png"
        },
        {
            game_name: "MatchingLace",
            game_code: "a3a8b2062b58f0136db27e4048f8ffa1",
            game_type: "Live",
            game_image: "https://i.ibb.co.com/DPsFFRwf/EEAi-09-Matching-Lace.png"
        },
        {
            game_name: "Lottery",
            game_code: "1cf32c567adcf9fb8e5766ff83dd0d6f",
            game_type: "Lottery",
            game_image: "https://i.ibb.co.com/spjHhj4S/EEAi-10-Lottery.png"
        },
        {
            game_name: "Mini-Game",
            game_code: "a9d08da2740e33360f939f631761690c",
            game_type: "Mini",
            game_image: "https://i.ibb.co.com/GQ2jbdHQ/EEAi-12-Mini-Game-Mines.png"
        },
        {
            game_name: "Goal",
            game_code: "61db5a80a893a5b6689a45bb2ef178bd",
            game_type: "Live",
            game_image: "https://i.ibb.co.com/hxYNW8zZ/EEAi-13-Goal.png"
        },
        {
            game_name: "Space Crash",
            game_code: "d14eaff74fb6a825406af2f14020ca93",
            game_type: "Mini",
            game_image: "https://i.ibb.co.com/0y7c7XrD/EEAi-11-Mini-Game-Space-crash.png"
        },
        {
            game_name: "Surf Crash",
            game_code: "e2fa3bb166ecce5a1ab376034039f639",
            game_type: "Mini",
            game_image: "https://i.ibb.co.com/F4nSnHLb/EEAi-14-Surf-Crash.png"
        },
        {
            game_name: "Football Goddess",
            game_code: "58893408e0dd7fd7afb08a8ccdd54cc9",
            game_type: "Mini",
            game_image: "https://i.ibb.co.com/4wpcGtS7/EEAi-15-Football-Goddess.png"
        }
    ]
};
const Wicket = {
    platform: "sports",
    provider: "9Wicket",
    games: [
        { game_name: "9Wicket", game_code: "48341a3bf62b6dd0814d7129e7e0834b", game_type: "Sports Game", game_image: "https://i.ibb.co.com/yBnY6NNc/9wickets-logo.png" },

    ],
};
const yellowBat = {
    platform: "digital",
    provider: "yellowBat",
    games: [
        {
            game_name: "TIGER BOOM",
            game_code: "20aa10f2b67c90bb5c88c5b4211d18ac",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/hxyjTnrR/1062-TIGER-BOOM.jpg"
        },
        {
            game_name: "MEGA BANDIT",
            game_code: "525da2aff3f024427cd835dd39f46f54",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/HTgcRvL7/1059-MEGA-BANDIT.jpg"
        },
        {
            game_name: "DRAGON GEMS CLASH",
            game_code: "523b42cba75f4a921f3693599fe19b15",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/JjCmwwSv/1056-DRAGON-GEMS-CLASH.jpg"
        },
        {
            game_name: "SEXY JOKER",
            game_code: "3baaabd7aba57cc624b750963ec57e38",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/d0h384kM/1055-SEXY-JOKER.jpg"
        },
        {
            game_name: "GOLDEN X ACE",
            game_code: "8cf94a7d8ff72bf9bec96181c964841a",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/dsXZSy1M/1054-GOLDEN-X-ACE.jpg"
        },
        {
            game_name: "FORTUNE X ACE",
            game_code: "373d724d07dc77f6a70b9eba9874373d",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/35fnv7KG/1053-FORTUNE-X-ACE.jpg"
        },
        {
            game_name: "DRAGON GEMS SUPER BUY",
            game_code: "dfb3e6b1be062d000dcf921a2d920502",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/9HGB6tHh/1052-DRAGON-GEMS-SUPER-BUY.jpg"
        },
        {
            game_name: "DRAGON GEMS WHEEL",
            game_code: "ce14de9132bb6bb37c3eb023b5d397f8",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/F4K33CDT/1051-DRAGON-GEMS-WHEEL.jpg"
        },
        {
            game_name: "MAGICAL ALCHEMIST",
            game_code: "5d847eb14cbeb4d2b314c18c58ad3b96",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/fVbR22C4/1049-MAGICAL-ALCHEMIST.jpg"
        },
        {
            game_name: "PIRATE LEGENDS",
            game_code: "8792317eb381a2c2af382ff08f502da8",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/5WvFnhdh/1048-PIRATE-LEGENDS.jpg"
        },
        {
            game_name: "LIGHT OF APOLLO",
            game_code: "6ed5b05887d25b2e1c55ec2ed6bf595b",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/0vd90xq/1047-LIGHT-OF-APOLLO.jpg"
        },
        {
            game_name: "DRAGON GEMS",
            game_code: "1ca5757354156d977fbac8faa0448168",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/8Ls3ZrKs/1046-DRAGON-GEMS.jpg"
        },
        {
            game_name: "ZHAO CAI PAO",
            game_code: "cce17f4c76a6c508387ccc76f3dd9e59",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/cSfDgpWG/1043-ZHAO-CAI-PAO.jpg"
        },
        {
            game_name: "ROYAL HUNTER",
            game_code: "c84438e13280fe69ef63a4b31dc9d6e7",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/h12kSRKP/1042-ROYAL-HUNTER.jpg"
        },
        {
            game_name: "CRAZY MONEY",
            game_code: "094371abc62e9eb06a71e7b8eef9302b",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/p6MRqyPn/1041-CRAZY-MONEY.jpg"
        },
        {
            game_name: "LUCKY MEOW",
            game_code: "fe6656613d8448e90289b07494118e07",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/Mym9S7dQ/1040-LUCKY-MEOW.jpg"
        },
        {
            game_name: "SUGAR CRUSH",
            game_code: "e8bbe788dd7c98105c648a4f54c4c8e8",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/MxJC4BR0/1039-SUGAR-CRUSH.jpg"
        },
        {
            game_name: "SUPER EGYPT",
            game_code: "70c0a64d3bbad16b6d9ccb0cc3e0a53d",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/j9Q3NJcP/1038-SUPER-EGYPT.jpg"
        },
        {
            game_name: "GOLDEN AZTEC MEGA",
            game_code: "7c958031c8a2e0f2ae4be75fc03b8e18",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/j9TcMyFF/1037-GOLDEN-AZTEC-MEGA.jpg"
        },
        {
            game_name: "ROYAL ACE",
            game_code: "72fe6190dbe7cb90ef7e3d82a95e235f",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/r2bW0zSj/1032-ROYAL-ACE.jpg"
        },
        {
            game_name: "MERMAID SLINGO",
            game_code: "7c7be1d5c3e97c5a0413535b3bbb90fe",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/gLg4S8Yg/1031-MERMAID-SLINGO.jpg"
        },
        {
            game_name: "GOLDEN AZTEC",
            game_code: "5ed8daae2c7818f8134542890138290f",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/99Sp0ZyL/1026-GOLDEN-AZTEC.jpg"
        },
        {
            game_name: "KING ARTHUR GOLD",
            game_code: "dc13d2ed8c50e4018de643b2d742bd70",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/qYtjzgzx/1025-KING-ARTHUR-GOLD.jpg"
        },
        {
            game_name: "BOOM BOOM MARMOT",
            game_code: "a854747968b9dbbb333496ecc6745400",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/27gxRThy/1024-BOOM-BOOM-MARMOT.jpg"
        },
        {
            game_name: "GLADIATOR JP",
            game_code: "d76fb92e640059bbd46cbfde58904801",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/b5DWMMYk/1011-GLADIATOR.jpg"
        },
        {
            game_name: "MAGIC LAMP JP",
            game_code: "51604f8f90e09276d5117ca8b7242319",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/zTcpN4dX/1010-MAGIC-LAMP.jpg"
        },
        {
            game_name: "FORTUNE CAT",
            game_code: "c2c3a4982d554238013dcaca299fac8d",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/mrhnmWH3/1019-FORTUNE-CAT.jpg"
        },
        {
            game_name: "GOLDEN BUNNY",
            game_code: "4427f5e188ee0a5bbb8b830931a55166",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/5hkNj2Qq/1018-GOLDEN-BUNNY.jpg"
        },
        {
            game_name: "ROLLING FORTUNE",
            game_code: "daec82993bf8bb6fa39588c576a6df4f",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/4nfQ5Dx8/1017-ROLLING-FORTUNE.jpg"
        },
        {
            game_name: "FANCY EGYPT",
            game_code: "be4b102f2a328661d0ca1076aebb2477",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/Y7TBLc8B/1016-FANCY-EGYPT.jpg"
        },
        {
            game_name: "THOR FORTUNE",
            game_code: "ad7559bc9030f4627e28c7dbeb749f06",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/rRTVGNv4/1015-THOR-FORTUNE.jpg"
        },
        {
            game_name: "LUCKY STAR",
            game_code: "64eb359af37621df19d33e328e0d9f15",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/8nqvcMZ0/1014-LUCKY-STAR.jpg"
        },
        {
            game_name: "ROLLING 7",
            game_code: "13aa93bf3492f4bf17c1a55f30fb9848",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/NdpHWCFv/1013-ROLLING-7.jpg"
        },
        {
            game_name: "FAFA DRAGON",
            game_code: "2ee6675ed3d7b68f103deae77176b0e1",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/rK2FnDfx/1012-FAFA-DRAGON.jpg"
        },
        {
            game_name: "GLADIATOR",
            game_code: "30a7426423b8898141d0a4355554cf1e",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/b5DWMMYk/1011-GLADIATOR.jpg"
        },
        {
            game_name: "MAGIC LAMP",
            game_code: "0c3ad795669e55493a30d78eb6577b9e",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/zTcpN4dX/1010-MAGIC-LAMP.jpg"
        },
        {
            game_name: "POWER MASK",
            game_code: "4fd47bb9f46e402071381e0d02a84c12",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/81CJLVg/1009-POWER-MASK.jpg"
        },
        {
            game_name: "POWER LION",
            game_code: "46262622b2271a32caac1b0ceb92d92a",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/bgBYTKWC/1008-POWER-LION.jpg"
        },
        {
            game_name: "CASINO FANTASY",
            game_code: "2eeaeca2b5a3437ee07a96c945989ce8",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/QFKh2vFY/1005-CASINO-FANTASY.jpg"
        },
        {
            game_name: "MONEY HORSE",
            game_code: "4f52de113e58c49536786e706fc50d23",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/bgwFsvfh/1004-MONEY-HORSE.jpg"
        },
        {
            game_name: "FORTUNE TREASURE",
            game_code: "0e1c539d4d10cf152e9340966ab3e1ac",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/WvvGdrfW/1003-FORTUNE-TREASURE.jpg"
        },
        {
            game_name: "POWER FORTUNE",
            game_code: "2df0f54a0620bd62b18580f54e0e8a27",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/Y9dbxwQ/1002-POWER-FORTUNE.jpg"
        },
        {
            game_name: "DRAGONOVA",
            game_code: "ae59cbd0fde24553e77bc0c87ced9c62",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/WvvYJD1T/1001-DRAGONOVA.jpg"
        },
        {
            game_name: "OCEAN PHOENIX",
            game_code: "5e7e8f19c674da22d98eff58086dc21c",
            game_type: "Fishing Game",
            game_image: "https://i.ibb.co.com/kVnbcw1b/2001-OCEAN-PHOENIX.jpg"
        },
        {
            game_name: "SUPER 30 BINGO",
            game_code: "ec37a3c10f988bd752a99093e311257b",
            game_type: "Bingo Game",
            game_image: "https://i.ibb.co.com/d0qTTP50/3012-SUPER-30-BINGO.jpg"
        },
        {
            game_name: "EZ BINGO",
            game_code: "104f2901efcfde1523f4017600312721",
            game_type: "Bingo Game",
            game_image: "https://i.ibb.co.com/hRV57ffz/3011-EZ-BINGO.jpg"
        },
        {
            game_name: "JOY BINGO",
            game_code: "a702e98d0fe26de709a9d31ce32403b5",
            game_type: "Bingo Game",
            game_image: "https://i.ibb.co.com/C3SP5MLs/3010-JOY-BINGO.jpg"
        },
        {
            game_name: "LIGHTNING BINGO",
            game_code: "1bdf50f6c3a5ac00e7982397631b47d5",
            game_type: "Bingo Game",
            game_image: "https://i.ibb.co.com/1trX7Y2C/3009-LIGHTNING-BINGO.jpg"
        },
        {
            game_name: "HEAT BINGO",
            game_code: "9b4d7bdd4e2633f1271ebc4572eeb86f",
            game_type: "Bingo Game",
            game_image: "https://i.ibb.co.com/dJ2L7ZcZ/3008-HEAT-BINGO.jpg"
        },
        {
            game_name: "MONEY BINGO",
            game_code: "d806267fc9bca6c6da3cc0a37b81d773",
            game_type: "Bingo Game",
            game_image: "https://i.ibb.co.com/0p8TYYm3/3007-MONEY-BINGO.jpg"
        },
        {
            game_name: "BEASTY BINGO",
            game_code: "304f900291fe84eb28db24ecd4227524",
            game_type: "Bingo Game",
            game_image: "https://i.ibb.co.com/mVVQ8TFH/3006-BEASTY-BINGO.jpg"
        },
        {
            game_name: "BINGO BONANZA",
            game_code: "beef57ce49e4fa465c9993b299e87b70",
            game_type: "Bingo Game",
            game_image: "https://i.ibb.co.com/svFDyBY6/3005-BINGO-BONANZA.jpg"
        },
        {
            game_name: "ATLANTIS",
            game_code: "09741e6e098722a6b862146705872a5e",
            game_type: "Bingo Game",
            game_image: "https://i.ibb.co.com/bjNbG0pF/3004-ATLANTIS.jpg"
        },
        {
            game_name: "BINGO BINGO",
            game_code: "fe1868c583942b818f3ba860b4ea0bfb",
            game_type: "Bingo Game",
            game_image: "https://i.ibb.co.com/yrw7fCW/3003-BINGO-BINGO.jpg"
        },
        {
            game_name: "OPEN SESAME",
            game_code: "9fe84780ed3cfc2d42dc221bd507e86c",
            game_type: "Bingo Game",
            game_image: "https://i.ibb.co.com/Nc1WYQ5/3002-OPEN-SESAME.jpg"
        },
        {
            game_name: "WIN CAI SHEN",
            game_code: "5ad0b30a79190e0991f6180da7675d11",
            game_type: "Bingo Game",
            game_image: "https://i.ibb.co.com/kVRCXsxf/3001-WIN-CAI-SHEN.jpg"
        },
        {
            game_name: "MONEY BLAST",
            game_code: "1cb688431755787292560caaa7d12677",
            game_type: "Arcade Game",
            game_image: "https://i.ibb.co.com/TBykmgZN/4003-MONEY-BLAST.jpg"
        },
        {
            game_name: "DIAMOND MINES",
            game_code: "9fba26a8c17a3bc4ae86ded2ef9f029f",
            game_type: "Arcade Game",
            game_image: "https://i.ibb.co.com/kVqvYLrf/4002-DIAMOND-MINES.jpg"
        },
        {
            game_name: "CRAZY COLOR",
            game_code: "c3a0e967c5ff6f0d0aa54e2cf847e9a8",
            game_type: "Arcade Game",
            game_image: "https://i.ibb.co.com/B5mvrkqZ/4001-CRAZY-COLOR.jpg"
        },
        {
            game_name: "Sugar Chef",
            game_code: "f1ae125eb40f507d6935bba1dc0a1140",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/JjDSp4Lb/1064-Sugar-Chef.jpg"
        },
        {
            game_name: "GOLDLINER",
            game_code: "b75de6202a62e4b195cf7c99dec0839e",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/275sfRq6/1060-Goldliner.jpg"
        },
        {
            game_name: "Sexy Joker Deluxe",
            game_code: "0ad12b2592d68ed9cf91c3ae247a8619",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/67tx8mxw/1065-Sexy-Joker-Deluxe.png"
        },
        {
            game_name: "Happy Dragon",
            game_code: "7044a7c56d016e801c92c58060285ad0",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/fdxxNMvb/1066-Happy-Dragon.png"
        }
    ]
};
const Rich88 = {
    platform: "digital",
    provider: "Rich88",
    games: [
        {
            game_name: "Big and Small",
            game_code: "8bed425717c4f45a79fe8f3cf77fa8f0",
            game_type: "Arcade Game",
            game_image: "https://i.ibb.co.com/PZHH1dkr/233-EDM-Big-and-Small.png"
        },
        {
            game_name: "Fish Shrimp Crab",
            game_code: "6457aa5bd571649309a867ab09e072d5",
            game_type: "Arcade Game",
            game_image: "https://i.ibb.co.com/nM4sX0Hm/020-Fish-Shrimp-Crab.png"
        },
        {
            game_name: "Ladder Climbing",
            game_code: "21f5bfb78c6559a615c8b04aaede9107",
            game_type: "Arcade Game",
            game_image: "https://i.ibb.co.com/KpWD9jNz/017-Ladder-Climbing.png"
        },
        {
            game_name: "Snail Racing",
            game_code: "e2770d2782b392ec8434fe163453264e",
            game_type: "Arcade Game",
            game_image: "https://i.ibb.co.com/jZLLQSVW/018-Snail-Racing.png"
        },
        {
            game_name: "Color Dish",
            game_code: "ce16fe0ffceb9539a5c57eebb8f7b1ad",
            game_type: "Arcade Game",
            game_image: "https://i.ibb.co.com/G3cP0wPb/022-Color-Dish.png"
        },
        {
            game_name: "Single Black Jack",
            game_code: "a2c83ae6f75f77104869244d6719c827",
            game_type: "Arcade Game",
            game_image: "https://i.ibb.co.com/zTcsCf1Q/023-Single-Black-Jack.png"
        },
        {
            game_name: "GEM Planet",
            game_code: "fd0e5d1ff204b7ca1dbd1547ef4cd000",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/YKhZTjW/005-GEM-Planet.png"
        },
        {
            game_name: "Fast Snail Racing",
            game_code: "3c47e251d48de40c7fc766a1d98e1d4c",
            game_type: "Arcade Game",
            game_image: "https://i.ibb.co.com/wFDPcJYP/018-2-Fast-Snail-Racing.png"
        },
        {
            game_name: "88 Fortunes",
            game_code: "3fc303914554a6ff92fc05c5f3edeeed",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/rfL5LbTJ/009-88-Fortunes.png"
        },
        {
            game_name: "Battle of Five Carp",
            game_code: "61e4ac9f16e735153ee6d8509242de57",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/6RH268d1/010-Battle-of-Five-Carp.png"
        },
        {
            game_name: "The Journey to The West",
            game_code: "2f3d363b74be21ae0d0e8d851565a509",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/dJmXfbTw/011-The-Journey-to-The-West.png"
        },
        {
            game_name: "Football Battle",
            game_code: "1c3ec7033175441c223ccef4781f1638",
            game_type: "Arcade Game",
            game_image: "https://i.ibb.co.com/PsGVJYjG/008-Football-Battle.png"
        },
        {
            game_name: "Vampire Hunter",
            game_code: "29f665f098c8eb2d71f5d754baa964f7",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/VW5kBv2y/033-Vampire-Hunter.png"
        },
        {
            game_name: "Rave Jump",
            game_code: "6693cb07eb4842636fdc46a923da2448",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/dJ29X0dg/012-Rave-Jump.png"
        },
        {
            game_name: "Great Blue",
            game_code: "98185cbcf3c2046691841277ab93fbe4",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/WpYjhQVk/013-Great-Blue.png"
        },
        {
            game_name: "Lucky Bats",
            game_code: "5b7224c2ce9b9d4f3b2b94f25feb0996",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/wN6scyDc/015-Lucky-Bats.png"
        },
        {
            game_name: "PokDeng",
            game_code: "caf811474a52739de4ab07724aa55b91",
            game_type: "Arcade Game",
            game_image: "https://i.ibb.co.com/7J3Tw2py/027-Pok-Deng.png"
        },
        {
            game_name: "Three Dice",
            game_code: "042a29b6f6dbb82cac5e63463582affa",
            game_type: "Arcade Game",
            game_image: "https://i.ibb.co.com/jPDYzxtb/024-Three-Dice.png"
        },
        {
            game_name: "Golden Dragon Ball",
            game_code: "476e28c68d079e19344a56e4ba697495",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/7xzNRR5g/014-Golden-Dragon-Ball.png"
        },
        {
            game_name: "Baccarat",
            game_code: "4c2adfa810c1c0ed6a6b12225d4babb6",
            game_type: "Arcade Game",
            game_image: "https://i.ibb.co.com/990BKpnd/034-Baccarat.png"
        },
        {
            game_name: "Sichuan Opera Facial Makeup",
            game_code: "a4206acc256fdb39932031fd1eef8ec1",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/4gTZt254/016-Sichuan-Opera-Facial-Makeup.png"
        },
        {
            game_name: "FAN TAN",
            game_code: "db2a47d300bf3170aa3076ab31524863",
            game_type: "Arcade Game",
            game_image: "https://i.ibb.co.com/6JTzJbpW/037-FAN-TAN.png"
        },
        {
            game_name: "100 PokDeng",
            game_code: "094408605f9c95d439b18edf66c583f1",
            game_type: "Arcade Game",
            game_image: "https://i.ibb.co.com/HTYYDHN1/036-100-Pok-Deng.png"
        },
        {
            game_name: "Thai Boxing King",
            game_code: "1d209db5ecaf3edaf909998eac6ef9ab",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/wGRrQP1/030-Thai-Boxing-King.png"
        },
        {
            game_name: "Thai Food Show",
            game_code: "b0683cd7eb44ec995f71f5983b0ebf8b",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/0HBZf5M/032-Thai-Food-Show.png"
        },
        {
            game_name: "Ancient Giant Elephant",
            game_code: "3e01b874a4365f27a17b6568e569aaaf",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/hz5Y4WN/031-Ancient-Giant-Elephant.png"
        },
        {
            game_name: "Bingo",
            game_code: "cd04a35dce7a1417bd4c0255787f61ab",
            game_type: "Bingo Game",
            game_image: "https://i.ibb.co.com/FLD996qh/040-Bingo.png"
        },
        {
            game_name: "CockFighting",
            game_code: "3b2189b432d604b4375108fcb4f3a020",
            game_type: "Arcade Game",
            game_image: "https://i.ibb.co.com/gLnGZ491/035-Cock-Fighting.png"
        },
        {
            game_name: "777",
            game_code: "7c36fa2833ad28c7336992dd5efc8ed4",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/r2Y1M8hD/043-777.png"
        },
        {
            game_name: "King Kong",
            game_code: "7cfd68e77a777038d84bb54c27cbeeae",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/zWjdJBpD/042-King-Kong.png"
        },
        {
            game_name: "Wild Fire Ranger",
            game_code: "0f22b327193fe3d890eb8aa75606c1f9",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/mCFMwRsh/045-Wild-Fire-Ranger.png"
        },
        {
            game_name: "War of the Egyptian gods",
            game_code: "203a7a181cf396360a9577d79fd96573",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/gbsRpXG8/044-War-of-the-Egyptian-gods.png"
        },
        {
            game_name: "Thai Sic Bo",
            game_code: "28930cc76a51510dd9e84ff0093edf89",
            game_type: "Arcade Game",
            game_image: "https://i.ibb.co.com/XrQ0LRbc/055-Thai-Sic-Bo.png"
        },
        {
            game_name: "Fortune bull",
            game_code: "32bb670c9b7e48f6b3205e248c018c93",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/pr5fW1D6/054-Fortune-bull.png"
        },
        {
            game_name: "Double slot",
            game_code: "0f552dd7653a804612aa48749f19fdc3",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/mFVpkdyt/050-Double-slot.png"
        },
        {
            game_name: "Dragon Tiger",
            game_code: "31d4d8fe0c98b12b17fb1a53508f0bdd",
            game_type: "Arcade Game",
            game_image: "https://i.ibb.co.com/rRhzV0HW/057-Dragon-Tiger.png"
        },
        {
            game_name: "Color Game",
            game_code: "9c30fed68f24ee82dd94374c5facfdc0",
            game_type: "Arcade Game",
            game_image: "https://i.ibb.co.com/xKrHqGkW/063-Color-Game.png"
        },
        {
            game_name: "Dragon Boat Festival",
            game_code: "77bb7b66d5f8e2382240618b0a684769",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/3YvytM3w/074-Dragon-Boat-Festival.png"
        },
        {
            game_name: "Lucky Fortune",
            game_code: "61efd29ec69fba072e7b4e62ea7fb69d",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/F4yz7fPL/059-Lucky-Fortune.png"
        },
        {
            game_name: "Book of Dead",
            game_code: "cd7d501c8c62342d2b0dd81b746b42b3",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/8g54QWKr/065-Book-of-Dead.png"
        },
        {
            game_name: "Jump High",
            game_code: "1069bdac4e13bd7d86c3b7098124cfd2",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/zVGdmV2P/087-Jump-High.png"
        },
        {
            game_name: "Rich Fishing",
            game_code: "e3c2746ab942a958fd25c2b3bbfa6303",
            game_type: "Arcade Game",
            game_image: "https://i.ibb.co.com/YBHf68ZR/095-Rich-Fishing.png"
        },
        {
            game_name: "Money Rolling",
            game_code: "b05e2624fed24cfb9aa73e17ade6c7ce",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/1fWqQ2qw/090-Money-Rolling.png"
        },
        {
            game_name: "Wild Island",
            game_code: "f189a34a16134c2c5cfa98838e3010ee",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/XN7LQgY/078-Wild-Island.png"
        },
        {
            game_name: "Mahjong King",
            game_code: "605409685eb36aa645253b0abe4eaf59",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/h1X8hNJ5/122-Mahjong-King.png"
        },
        {
            game_name: "Squid Game",
            game_code: "f8512120450fb40f4affb9943a3d2521",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/0pPt740Y/121-Squid-Game.png"
        },
        {
            game_name: "Gem Mine",
            game_code: "4febe415cd54653367d8d3be24814f5a",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/8LrpGSs0/047-Gem-Mine.png"
        },
        {
            game_name: "Christmas Gift",
            game_code: "717f813f8bcf9cf6ba621c5a822b9fe0",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/vvKSc3B6/110-Christmas-Gift.png"
        },
        {
            game_name: "Mouse Gets Fortune",
            game_code: "eeddf0d565a6fae0306a830f81bf39f6",
            game_type: "Arcade Game",
            game_image: "https://i.ibb.co.com/d06SmHD8/070-Mouse-Gets-Fortune.png"
        },
        {
            game_name: "Fortune Tiger",
            game_code: "c8b9643a5626bbb3ab614fc6d55090c1",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/Y47vCX07/117-Fortune-Tiger.png"
        },
        {
            game_name: "New Year Money Rolling",
            game_code: "e1342c5e4809520585cb938b0cde98eb",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/W4C3FfYK/130-New-Year-Money-Rolling.png"
        },
        {
            game_name: "Bingo Football",
            game_code: "7c1d5d7d7356759b97c126328ca6dba4",
            game_type: "Bingo Game",
            game_image: "https://i.ibb.co.com/JwybrPDm/108-Bingo-Football.png"
        },
        {
            game_name: "Legend of Neptune",
            game_code: "cf67988c77c12dd3fce2aac482f36bea",
            game_type: "Arcade Game",
            game_image: "https://i.ibb.co.com/MymBNxXt/128-Legend-of-Neptune.png"
        },
        {
            game_name: "Multi Mega - Classic",
            game_code: "901d0c8701f1a043a7c40c6175c37209",
            game_type: "Bingo Game",
            game_image: "https://i.ibb.co.com/V0J2bwZw/144-Multi-Mega-Bingo-Bonanza.png"
        },
        {
            game_name: "Golden kingdom",
            game_code: "dc70b355d90132ba8efe05b5622c802b",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/yBKhfkkX/133-Golden-kingdom.png"
        },
        {
            game_name: "LuckyAce",
            game_code: "b378cffe8c5945e6c75a5ee2908fada2",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/PvXyD232/134-Lucky-Ace.png"
        },
        {
            game_name: "Maya Gems",
            game_code: "0ee60eadd57cb6295499009e008bbcca",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/ccPNj3Bz/135-Maya-Gems.png"
        },
        {
            game_name: "Football Gold HOLD AND WIN",
            game_code: "02b74e72a53fbbc8ac79823df9ad2985",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/mrjrTYM1/141-Football-Gold-HOLD-AND-WIN.png"
        },
        {
            game_name: "Thai Sic Bo 2",
            game_code: "7c304af18c6b59e0c9c25c4a43751158",
            game_type: "Arcade Game",
            game_image: "https://i.ibb.co.com/b5zt8767/106-Thai-Sic-Bo-2.png"
        },
        {
            game_name: "Panda King HOLD AND WIN",
            game_code: "63d1bd569d04fa594056eacb02bacdab",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/ShLmSVD/096-Panda-King-HOLD-AND-WIN.png"
        },
        {
            game_name: "Fortune Dragon",
            game_code: "2c3cec71cb97e2d2859facec22b67a1d",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/jP3pycGs/077-Fortune-Dragon.png"
        },
        {
            game_name: "Dragon Legend",
            game_code: "6d5a6dce313ec8751a237248f657eae7",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/rK1pf6Cb/142-Dragon-Legend.png"
        },
        {
            game_name: "Enchantress",
            game_code: "645f238406f070e1b8bd7c22ddadbca3",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/1fz19Fzg/093-Enchantress.png"
        },
        {
            game_name: "Multi Mega Bingo Bonanza",
            game_code: "1c73b8b98c618cefc14f952bab70d870",
            game_type: "Bingo Game",
            game_image: "https://i.ibb.co.com/V0J2bwZw/144-Multi-Mega-Bingo-Bonanza.png"
        },
        {
            game_name: "Fortune Dice",
            game_code: "a2d50b838d47e0e10b4cec11cd28df73",
            game_type: "Arcade Game",
            game_image: "https://i.ibb.co.com/TMGrQrdR/139-Fortune-Dice.png"
        },
        {
            game_name: "Pirate Treasure",
            game_code: "c9023dda74d1b03c0f838a5d6f9c1c98",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/vCJjxXZX/146-Pirate-Treasure.png"
        },
        {
            game_name: "Lucky God of Wealth",
            game_code: "643fefd3d7934d1d400ec4e16428dea4",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/xtBptwvn/138-Lucky-God-of-Wealth.png"
        },
        {
            game_name: "Future Stars",
            game_code: "7ce658d12c24902d73daadfacd4616cb",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/xtntsXNn/085-Future-Stars.png"
        },
        {
            game_name: "Lightning Fish",
            game_code: "18f5583e146435a77d7cc94f3b65a530",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/SwBmWYP2/083-Lightning-Fish.png"
        },
        {
            game_name: "Ring of Odin",
            game_code: "2043e37a492e5a538347fc2764ec4183",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/mVFvd5pB/084-Ring-of-Odin.png"
        },
        {
            game_name: "Serial Boat",
            game_code: "e62ff1967b644a7cba682904a0b1af13",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/0p1xM5cR/094-Serial-Boat.png"
        },
        {
            game_name: "Thor",
            game_code: "33db478532c2f8d4187d04ecfec05e07",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/PvBNLV2N/060-Thor.png"
        },
        {
            game_name: "Winning Mask Deluxe",
            game_code: "6256ecf942454ca5da1805bc20492333",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/PsQYyhPm/150-Winning-Mask-Deluxe.png"
        },
        {
            game_name: "Crazy Rich Man",
            game_code: "ea57fa50a0145e29d754717b386920a7",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/CN2nfnT/151-Crazy-Rich-Man.png"
        },
        {
            game_name: "100 Teen Patti",
            game_code: "a4838ef762b0c3dfb26c6060d4be3fdc",
            game_type: "Arcade Game",
            game_image: "https://i.ibb.co.com/4RWXfXVt/112-100-Teen-Patti.png"
        },
        {
            game_name: "Buffalo King MEGAWAYS",
            game_code: "7eec191ef363e4fc6f97f2c5a622af11",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/LXSFY6dJ/160-Buffalo-King-MEGAWAYS.png"
        },
        {
            game_name: "Flaming Chillies",
            game_code: "eb13b4bb500f9c2c05aeb47b06a1a29a",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/8LxNp7Yx/158-Flaming-Chillies.png"
        },
        {
            game_name: "Super Niubi Deluxe",
            game_code: "60b1f605f062b329a421fcbfad4ed286",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/hSr68pt/159-Super-Niubi-Deluxe.png"
        },
        {
            game_name: "Tarzan",
            game_code: "52520acad3b2c5abe3e39e4ddbf763d5",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/Dg4v3152/081-Tarzan.png"
        },
        {
            game_name: "Thor 2",
            game_code: "acf7b603b8da268c5095aff32a7abe02",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/qLPgrv73/166-Thor-2.png"
        },
        {
            game_name: "LuBu",
            game_code: "a55babc9da8ec3dae2c47f9829c270af",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/B2cn7TDR/167-Lu-Bu.png"
        },
        {
            game_name: "Mahjong 2",
            game_code: "07e772684b0ff8252a3930f14090421c",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/q33vHpjw/168-Mahjong-2.png"
        },
        {
            game_name: "Big Bass Bonanza",
            game_code: "a1e2d7531a01882eb08df884ac2d6f3b",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/N6qXQf2V/118-Big-Bass-Bonanza.png"
        },
        {
            game_name: "One Piece",
            game_code: "ecb5175bd4dc6584247f0719cc290142",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/tM3FbLzj/199-One-Piece.png"
        },
        {
            game_name: "Dragon Ball",
            game_code: "761fde5f5a8e060a32bf0cb2a0fb124b",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/TxB6kCM4/200-Dragon-Ball.png"
        },
        {
            game_name: "Mystery Gem",
            game_code: "015b64c8b7baa9972240417e305d0e13",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/pv3xV8HC/164-Mystery-Gem.png"
        },
        {
            game_name: "Monopoly Slot Super Bomb",
            game_code: "64cfa25f3f373d1957851d2d2eae18d4",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/FL406jt0/163-Monopoly-Slot-Super-Bomb.png"
        },
        {
            game_name: "Cleopatra",
            game_code: "38159953f1b0923e7e012c00d3d2685f",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/Xf7BFjy7/157-Cleopatra.png"
        },
        {
            game_name: "Treasury Piglet",
            game_code: "8f4bc78c4125894d7cfca146d3f7672f",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/FLf09gpB/196-Treasury-Piglet.png"
        },
        {
            game_name: "Garuda God",
            game_code: "00a6429f6320772e9d649ef4e9833009",
            game_type: "Arcade Game",
            game_image: "https://i.ibb.co.com/6cRMb7my/197-Garuda-God.png"
        },
        {
            game_name: "Monopoly Bingo",
            game_code: "3fab78bd24102735cf67d21d26325b6c",
            game_type: "Bingo Game",
            game_image: "https://i.ibb.co.com/HpL5gS57/152-Monopoly-Bingo.png"
        },
        {
            game_name: "Mahjong 3+",
            game_code: "68afb4599bf931030feec6d36d3687f1",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/VYWv9mvS/204-Mahjong-3.png"
        },
        {
            game_name: "The Secret Life of Pets",
            game_code: "6e4683f7ba53ead13d3b574e110a2872",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/pjP33z2w/156-The-Secret-Life-of-Pets.png"
        },
        {
            game_name: "Candy Island",
            game_code: "21d2f86fd8bba6613b53a752d7f33826",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/KpVPTpR9/214-Candy-Island.png"
        },
        {
            game_name: "Aviator X",
            game_code: "2f3c40d2af8692bf52be1e9b1e487b16",
            game_type: "Arcade Game",
            game_image: "https://i.ibb.co.com/XqQ7Kk5/228-Aviator-X.png"
        },
        {
            game_name: "Lucky Star Treasures",
            game_code: "af434fe0507391285e8d88bdadcf7b09",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/PsKgFVDD/198-Lucky-Star-Treasures.png"
        },
        {
            game_name: "EDM Big and Small",
            game_code: "046e0fcd9bf8690248f2b37a1da350a7",
            game_type: "Table Game",
            game_image: "https://i.ibb.co.com/PZHH1dkr/233-EDM-Big-and-Small.png"
        },
        {
            game_name: "Super Sic Bo 88",
            game_code: "6842547c30856c0a07bb1026a41c4c92",
            game_type: "Table Game",
            game_image: "https://i.ibb.co.com/rK4PTwjw/216-Super-Sic-Bo-888.png"
        },
        {
            game_name: "Caribbean Treasure Hunt",
            game_code: "9533e2e71f587392825da8827964aeb0",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/4gDNRJgQ/205-Caribbean-Treasure-Hunt.png"
        },
        {
            game_name: "Aviator",
            game_code: "b4ebe3f010e86620e0e42664a3358df4",
            game_type: "Arcade Game",
            game_image: "https://i.ibb.co.com/jZxGG4S6/235-Aviator.png"
        },
        {
            game_name: "Lucky Sic Bo",
            game_code: "d815dabca5b840daa0e50f3dc0dd554f",
            game_type: "Table Game",
            game_image: "https://i.ibb.co.com/1tgF1TRG/236-Lucky-Sic-Bo.png"
        },
        {
            game_name: "Legend of Buffalo King",
            game_code: "292fd91d8c4ae7d19c628ef4f4604c65",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/xtBbdQH9/222-Legend-of-Buffalo-King.png"
        },
        {
            game_name: "Ape King",
            game_code: "399e08d6d3aa47410b78038ca4cb7a23",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/xqrB4Yxy/213-Ape-King.png"
        },
        {
            game_name: "Treasure Vault",
            game_code: "1ab7a706bb23ac2ea5caf8e1314f221b",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/Y4TgLM2g/212-Treasure-Vault.png"
        },
        {
            game_name: "Fortune Of Pixiu",
            game_code: "42996a820b8bd64a8daf7d0a2e3e1c0c",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/GQ6VBSGY/224-Fortune-Of-Pixiu.png"
        },
        {
            game_name: "Mighty Qin",
            game_code: "706d368704733d48712355d401d60d9b",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/vvCVbYBP/226-Mighty-Qin.png"
        },
        {
            game_name: "Cyber Color Disc",
            game_code: "ec4a90273e1884645488a4c81d6dd3e6",
            game_type: "Table Game",
            game_image: "https://i.ibb.co.com/pB1Bykfg/234-Cyber-Color-Disc.png"
        },
        {
            game_name: "Treasure Hunt Golden City",
            game_code: "d59db15c3d2495dd0daeb49c25f55f37",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/s9gPq8Vt/221-Treasure-Hunt-Golden-City.png"
        },
        {
            game_name: "Golden Goal Riches",
            game_code: "c501c1a9427e2cd48f23b477648ae745",
            game_type: "Slot Game",
            game_image: "https://i.ibb.co.com/bgByPbnZ/241-Golden-Goal-Riches.png"
        }
    ]
};
const inOut = {
    platform: "digital",
    provider: "inOut",
    games: [
        {
            game_name: "Penalty Unlimited",
            game_code: "66d311ff6cf531e40b61c483dd34c5c9",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/wXzKZn1/IO-001-Penalty-Unlimited.png"
        },
        {
            game_name: "Chicken Road 2.0",
            game_code: "562b299961b0ec40f252a832453c67b0",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/hFckdPtt/IO-002-Chicken-Road-2-0.png"
        },
        {
            game_name: "Forest Arrow",
            game_code: "458bd34bc83e34501df7e7f96626df6b",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/FkDmG6zB/IO-003-Forest-Arrow.png"
        },
        {
            game_name: "Hamster Run",
            game_code: "af95a673c8f3a420444d73421bcf0e7a",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/4ZP9LPfW/IO-004-Hamster-Run.png"
        },
        {
            game_name: "Plinko Aztec",
            game_code: "134bbc0f61b73824cf9a68411aa32dc6",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/Fd1Hj0d/IO-005-Plinko-Aztec.png"
        },
        {
            game_name: "SugarDaddy",
            game_code: "3c802c686f7f9270057b6bb69567ea98",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/whLLbH4b/IO-006-Sugar-Daddy.png"
        },
        {
            game_name: "Chicken Road",
            game_code: "2126c5c458316ba1f2df65b387b60408",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/Ngm5rrHx/IO-007-Chicken-Road.png"
        },
        {
            game_name: "Joker Poker",
            game_code: "23d59c10bc65c3cfb6cafdf49969a2b7",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/359fqVyW/IO-008-Joker-Poker.png"
        },
        {
            game_name: "Stairs",
            game_code: "a6212c1c462a2442a369a4ec25bf40d7",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/sDTzwDm/IO-009-Stairs.png"
        },
        {
            game_name: "Triple",
            game_code: "4169b950c7cbd0bbd392941a13e56767",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/nNxrXFFv/IO-010-Triple.png"
        },
        {
            game_name: "Jogo Do Bicho",
            game_code: "09a138907ccf03d5c064c5ca71e9d9b3",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/C3pWDfrY/IO-011-Jogo-Do-Bicho.png"
        },
        {
            game_name: "Limbo",
            game_code: "81c4999d70b1ebbb7cf89d8e41ad493c",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/bg84Crtv/IO-012-Limbo.png"
        },
        {
            game_name: "AviaFly",
            game_code: "cb66d23b547498132598589af324d558",
            game_type: "crash game",
            game_image: "https://i.ibb.co.com/CKhrdT2Q/IO-013-Avia-Fly.png"
        },
        {
            game_name: "Lucky mines",
            game_code: "3a3affa176283107288f5da3698ffe7c",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/bjDpxbxH/IO-014-Lucky-mines.png"
        },
        {
            game_name: "Coinflip",
            game_code: "9b48efcf6b18b12fdd7dc8efe9ae971e",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/F4J37CQs/IO-055-Chicken-coins.png"
        },
        {
            game_name: "Roulette",
            game_code: "c81286ce4034dcf5b71d44c106f968db",
            game_type: "roulette",
            game_image: "https://i.ibb.co.com/MxKxcCcv/IO-016-Roulette.png"
        },
        {
            game_name: "Bubbles",
            game_code: "f84949bd783c7395b5f3092f4d4ec600",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/q3jNP14Q/IO-017-Bubbles.png"
        },
        {
            game_name: "Mines",
            game_code: "e5e23d4c8f7256a1753793cba5fb5aaf",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/B5hHd5Db/IO-018-Mines.png"
        },
        {
            game_name: "Sweet Keno",
            game_code: "2c62ddc0ad8e2c175ec771882e91789b",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/8gX4w3T0/IO-019-Sweet-Keno.png"
        },
        {
            game_name: "Hot-mines",
            game_code: "6180fdaf4dfab4042194a7d595aca4bb",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/9mLD24pW/IO-020-Hot-mines.png"
        },
        {
            game_name: "Plinko 1000",
            game_code: "eb3f4260c17737e09767bc4c06796a61",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/LX5sCkPk/IO-021-Plinko-1000.png"
        },
        {
            game_name: "Goblin-tower",
            game_code: "46d14949aa244609aaa03fa58b198784",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/n8qrKZ5B/IO-022-Goblin-tower.png"
        },
        {
            game_name: "Robo dice",
            game_code: "d0ddc8acfbc6836f0db6d270bd83243d",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/S4LqVMTs/IO-023-Robo-dice.png"
        },
        {
            game_name: "Hilo Joker",
            game_code: "f4fd956965b6f08ce48fee7d4407aaed",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/jkQTrvGX/IO-024-New-Hilo.png"
        },
        {
            game_name: "Double Online",
            game_code: "d8439d6083288f9171930e60836ba505",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/Cxt6V0G/IO-025-Double.png"
        },
        {
            game_name: "Diver",
            game_code: "90741c45a03fbfc800f79c3f5a23be44",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/j9xzQpZs/IO-026-Diver.png"
        },
        {
            game_name: "Cryptos",
            game_code: "445289d56c9ee8fa590bf6b29b13dc37",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/Wpx6TQG8/IO-027-Cryptos.png"
        },
        {
            game_name: "Tower",
            game_code: "a51b03beafa1773484d1e9c866709589",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/8ngkPcKX/IO-028-Tower.png"
        },
        {
            game_name: "Wheel",
            game_code: "757bdd7e1d8c260807bc78449258d00c",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/sh2qV3f/IO-029-Wheel.png"
        },
        {
            game_name: "Crash",
            game_code: "8ac6b247bd94d71ecdeaa1e62d74f382",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/8nb0nFq3/IO-030-Crash.png"
        },
        {
            game_name: "Squid Gamebler",
            game_code: "2bd203129afe1059923b45d7bd5de143",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/CK37mvLs/IO-031-Squid-Gamebler.png"
        },
        {
            game_name: "BalloniX",
            game_code: "c6345c538d4eb8c4f6d91373009ffc8b",
            game_type: "Crash Game",
            game_image: "https://i.ibb.co.com/TMj0J6WJ/IO-032-Balloni-X.png"
        },
        {
            game_name: "Twist",
            game_code: "1eef592674667c25dfaf067feef6c1fc",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/TqdfPjyN/IO-033-Twist.png"
        },
        {
            game_name: "Rock Paper Scissors",
            game_code: "9ac1086c9791c979ebd0397b9b6e8e8b",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/MkwRfVwX/IO-034-Rock-Paper-Scissors.png"
        },
        {
            game_name: "Rabbit Road",
            game_code: "efb14d01f5ec68e1cf49c53f30c4d476",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/sJNFW11f/IO-035-Rabbit-Road.png"
        },
        {
            game_name: "Chicken Royal",
            game_code: "70dfc9afebaa7885950695008bcf1bbc",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/5gn1Vwkh/IO-036-Chicken-Royal.png"
        },
        {
            game_name: "Chicken vs Zombies",
            game_code: "3321b1d3730f2c8c004abd754c3cb5ab",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/ycYK2bcv/IO-037-Chicken-vs-Zombies.png"
        },
        {
            game_name: "Fish Road",
            game_code: "1a88ab411dbaac5efe06c6b400456956",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/kVZNdMtp/IO-038-Fish-Road.png"
        },
        {
            game_name: "Chicken Road Vegas",
            game_code: "2870d35d0789ffe631e169839940e105",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/tPZJKs0G/IO-039-Chicken-Road-Vegas.png"
        },
        {
            game_name: "Chicken Road Gold",
            game_code: "abfe0d35e17aad7f0e339e7873c109ed",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/cSj9J9XT/IO-040-Chicken-Road-Gold.png"
        },
        {
            game_name: "Cricket Road",
            game_code: "ac75595f245b7b113f3756f180a19a57",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/VpkX1wk0/IO-041-Cricket-Road.png"
        },
        {
            game_name: "Chicken Road Race",
            game_code: "369c0e0f46325e430fd0f0b1b4790919",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/hRJLs10p/IO-042-Chicken-Road-Race.png"
        },
        {
            game_name: "Fish Boom",
            game_code: "7363e5d571eb41c8931ceadb4405a1fb",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/Ndy6NtCw/IO-043-Fish-Boom.png"
        },
        {
            game_name: "Twist X-mas",
            game_code: "7684d7919b1ffb93f8f3815dbf2058aa",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/kVGHV2M0/IO-045-Twist-X-mas.png"
        },
        {
            game_name: "Chicken Road Ice",
            game_code: "53db50f7e3448e981b53d20ec92ea91d",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/qLMhCkv5/IO-047-Chicken-Road-Ice.png"
        },
        {
            game_name: "Pengu Sport",
            game_code: "5514c2c8600066c8723f6e6971f0ad43",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/5Xjd9BcY/IO-048-pengu-sport.png"
        },
        {
            game_name: "Mine Slot",
            game_code: "38aa098dc4b37bb8902f8a7f9d1f34b9",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/tpFCtmXk/IO-049-Mine-Slot.png"
        },
        {
            game_name: "Avia Fly 2",
            game_code: "723f96aa415ccea2fecfcebd61d7f029",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/bgrH8xvt/IO-050-Avia-Fly-2.png"
        },
        {
            game_name: "Chicken Road Bonus",
            game_code: "d3505dc0f5ca0ac50564300734d09a90",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/QFMCqpgG/IO-051-Chicken-Road-Bonus.png"
        },
        {
            game_name: "MegaBlock",
            game_code: "b75c7f08887c99f5447f2c3103f1c3fa",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/zT3wYych/IO-053-megablock.png"
        },
        {
            game_name: "Chicken Road 2 Bonus",
            game_code: "5d5497eabe591bf4ed7bfb84740a3ff3",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/cVXDYSv/IO-054-Chicken-Road-2-Bonus.png"
        },
        {
            game_name: "Chicken Coin",
            game_code: "4d68be6a6ab67cf14983ca4dcdbd93b2",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/F4J37CQs/IO-055-Chicken-coins.png"
        },
        {
            game_name: "Topo-Mole",
            game_code: "ece9c9da34b9e7750b8f3af54e5c125a",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/kshb5sn7/IO-052-topo-mole.png"
        },
        {
            game_name: "Mineslot 2",
            game_code: "d70e26278eec198195b23176adbee666",
            game_type: "Slot",
            game_image: "https://i.ibb.co.com/MkW3dN4K/IO-056-Mineslot-2.png"
        },
        {
            game_name: "Сhicken Shoot",
            game_code: "c4bf85f8848e6ed1ea76d463c850c2b7",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/hJwjcvch/IO-057-hicken-Shoot.png"
        },
        {
            game_name: "Chicken Banana",
            game_code: "293bb69659abdf7b4670ab699785e91a",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/QF1QwDnt/IO-058-Chicken-Banana.png"
        },
        {
            game_name: "Jumper",
            game_code: "c079b89589444943001184f5405216f6",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/vxSYQZJv/IO-059-Jumper.png"
        },
        {
            game_name: "Twist San Quentin",
            game_code: "943d6811c6df53deb68034967db7f6a9",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/Q77PzSCM/IO-060-Twist-San-Quentin.png"
        },
        {
            game_name: "Penalty National Cup",
            game_code: "ae0fbb11b48a9eaabc9d73c7f6c556e4",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/15mmMgy/IO-064-Penalty-National-Cup.png"
        },
        {
            game_name: "Frog Road",
            game_code: "15b93fd8d303677398da3e5c7cb759de",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/N6JQghRf/IO-062-Frog-Road.png"
        },
        {
            game_name: "Joker Pyre",
            game_code: "9c0fcde265d6b30765228e5c1a56ecc1",
            game_type: "Instant",
            game_image: "https://i.ibb.co.com/5hBZxKRf/IO-061-Joker-Pyre.png"
        }
    ]
};

const allProviderGames: ProviderGame[] = [
    evolution,
    pgsoft,
    jilli,
    bti,
    jdb,
    cq9,
    spribe,
    sexybcrt,
    pragmatic,
    yellowBat,
    sabasport,
    playngo,
    fachai,
    eazygaming,
    Rich88,
    inOut,
    Wicket,
    Betby,
    CMD,
    TFGaming,
    SABASportsPHP,
    SABASports,
    unitedGaming,
    winSportsbook,
    SBOSportsbook,
    SBOVirtualSports,
    luckSport,
    EEAi,
    DreamGaming,
    FastSpin,
    NextSpin,
    microgaming,
    Hacksaw,
    Topbet,
    PenguinKing,
    turbogames,
    twoj,
    mini,
    auragaming,
    cockfight,
    funkygames,
    spadegaming,
    veliplay,
    creedroomz,
    gamesoft,
    psg,
    atg,
    galaxsys,
    smartsoft,
    koolbet,
    pix,
    kygaming,
    hp,
    habanero,
    amigo,
    sevenfivenine,
    rectangle,
    bggaming,
    km,
    relaxgaming,
    evoplay,
    ezugi,
    ideal,
    playtech
]

export { allProviderGames };
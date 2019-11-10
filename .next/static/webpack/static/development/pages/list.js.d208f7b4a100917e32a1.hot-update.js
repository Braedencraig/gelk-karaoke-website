webpackHotUpdate("static/development/pages/list.js",{

/***/ "./pages/list.js":
/*!***********************!*\
  !*** ./pages/list.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_TestHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/TestHeader */ "./components/TestHeader.js");





var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/pages/list.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;


var contentful = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");



var List =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(List, _React$Component);

  function List(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, List);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(List).call(this, props));
    _this.state = {
      articles: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(List, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var client = contentful.createClient({
        // This is the space ID. A space is like a project folder in Contentful terms
        space: 'sqmp3jmwaedr',
        // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
        accessToken: '01TsFxZR2mrw_VWsuCtzZCBCzKsrvCTDX9is-6UPzqU'
      }); // content type relates to the content type name in contentful
      // figured it outttt
      // 'post' instead of songList, post is linked to author so when post response you get author object as well

      client.getEntries({
        content_type: 'songList'
      }).then(function (response) {
        console.log(response);

        _this2.setState({
          articles: response.items
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var ass = this.state.articles.map(function (article, i) {
        console.log(article.fields.gelkSongList); //   have alphabet up top so its searchable artist name alphabetically.
        // then have list just train below.

        return __jsx("div", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, article.fields.gelkSongList));
      });
      return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, ass, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "4 Non Blondes - What's Up? Aaliyah - Are You That Somebody? ABBA - Dancing Queen AC/DC - Dirty Deeds Done Dirt Cheap AC/DC - T.N.T. AC/DC - You Shook Me All Night Long Adele - Hello Aerosmith - Crazy Aerosmith - Cryin' Aerosmith - Sweet Emotion Alanis Morissette - Hand in My Pocket Alanis Morissette - Ironic Alanis Morissette - Thank U Alanis Morissette - You Oughta Know Alannah Myles - Black Velvet Alicia Keys - Fallin\u2019 Alicia Keys - If I Ain't Got You Alvvays - Archie, Marry Me Amy Winehouse - Back to Black Amy Winehouse - Rehab Amy Winehouse - Valerie Amy Winehouse - You Know I'm No Good Animals - Don't Let Me Be Misunderstood Animals - House of the Rising Sun Arcade Fire - Rebellion (Lies) Arcade Fire - Suburbs Arctic Monkeys - I Bet You Look Good on the Dancefloor Aretha Franklin - Natural Woman (not C King Ver.) Aretha Franklin - Respect Avril Lavigne - Complicated Avril Lavigne - Sk8er Boi Backstreet Boys - Everybody (Backstreet's Back) Backstreet Boys - I Want It That Way Band - The Night They Drove Old Dixie Down Band - The Weight Beastie Boys - Fight for Your Right Beastie Boys - Sabotage Beatles - A Hard Day's Night Beatles - Come Together Beatles - Don't Let Me Down Beatles - Drive My Car Beatles - Helter Skelter Beatles - Hey Jude Beatles - Let It Be Beatles - Revolution Beck - Loser Bee Gees - To Love Somebody Ben E. King - Stand By Me Bikini Kill - Rebel Girl Bill Withers - Ain't No Sunshine Bill Withers - Use Me Billy Idol - Dancing With Myself Billy Idol - Rebel Yell Black Sabbath - Paranoid Black Sabbath - War Pigs Blackstreet - No Diggity Blind Melon - No Rain blink182 - Dammit blink182 - All The Small Things Blondie - Call Me Blondie - Heart of Glass Blue Rodeo - Lost Together Blur - Girls and Boys Blur - Song 2 Bob Dylan - Knockin\u2019 on Heaven\u2019s Door Bob Seger - Night Moves Bob Seger - Old Time Rock and Roll Bon Jovi - Livin' on a Prayer Bonnie Raitt - Something To Talk About Britney Spears - Baby One More Time Britney Spears - Toxic Bruce Springsteen - Born in the USA Bruce Springsteen - Dancing in the Dark Bruce Springsteen - Glory Days Bruce Springsteen - Hungry Heart Bryan Adams - Heaven Bryan Adams - Summer of \u201869 Buck 65 - Wicked and Weird Buck 65 - Zombie Delight Cardigans - Lovefool Carly Rae Jepsen - Call Me Maybe Carly Simon - You're So Vain Cars - Just What I Needed Carole King - It's Too Late Carole King - Natural Woman (not Aretha version) Carrie Underwood - Before He Cheats Cheap Trick - Surrender Cheap Trick - I Want You to Want Me Chris Isaak - Wicked Game Chris Stapleton - Tennessee Whiskey Clash - London Calling Clash - Should I Stay or Should I Go? Coldplay - Clocks Coldplay - Yellow Concrete Blonde - Joey Coolio - Gangsta's Paradise Cranberries - Salvation Cranberries - Zombie Creedence Clearwater Revival - Proud Mary Creedence Clearwater Revival - Who'll Stop the Rain? Cro-Mags - Hard Times Cult - She Sells Sanctuary Cure - Boys Don't Cry Cure - Friday I\u2019m In Love Cure - Just Like Heaven Cure - Lovesong Cyndi Lauper - Girls Just Wanna Have Fun Daft Punk - Get Lucky Dandy Warhols - Bohemian Like You Danzig - Mother David Bowie - Let's Dance David Bowie - Rebel Rebel David Bowie - Suffragette City David Bowie - Ziggy Stardust Depeche Mode - Enjoy the Silence Destiny's Child - Say My Name Dion - Runaround Sue Dolly Parton - Jolene Don Henley - Boys of Summer Dr. Dre ft. Eminem - Forgot About Dre Drake - Hold On We're Going Home Drake - Passionfruit Drifters - Under The Boardwalk Dusty Springfield - Son Of A Preacher Man Eagles - Hotel California Eagles - Take it Easy Elastica - Connection Elton John - Bennie and the Jets Elton John - Crocodile Rock Elton John - Rocket Man Eminem - Lose Yourself Erykah Badu - On & On Feist - My Moon My Man Fine Young Cannibals - She Drives Me Crazy Fiona Apple - Criminal Flaming Lips - She Don\u2019t Use Jelly Fleetwood Mac - Dreams Fleetwood Mac - Go Your Own Way Fleetwood Mac - Rhiannon Foo Fighters - Big Me Foo Fighters - Everlong Fountains of Wayne - Stacey\u2019s Mom Fray - How To Save A Life Fugees - Killing Me Softly GG Allin - Bite It, You Scum Gang Of Four - Damaged Goods Garth Brooks - Friends In Low Places George Michael - Careless Whisper George Michael - Faith Ginuwine - Pony Glenn Frey - The Heat is On Gloria Gaynor - I Will Survive Gnarls Barkley - Crazy Gob - I Hear You Calling Go-Go\u2019s - We Got the Beat Green Day - Basket Case Green Day - Longview Green Day - When I Come Around Guns N' Roses - Don't Cry Guns N' Roses - Knockin\u2019 on Heaven's Door Guns N' Roses - Sweet Child O' Mine Hall & Oates - Rich Girl Hanoi Rocks - Don\u2019t You Ever Leave Me Harvey Danger - Flagpole Sitta Hole - Celebrity Skin Hole - Malibu Hole - Violet Ice Cube - It Was A Good Day Iggy Pop - Lust for Life Iggy Pop - The Passenger INXS - Never Tear Us Apart James - Laid Jane's Addiction - Jane Says Jesus Jones - Right Here Right Now Jet - Are You Gonna Be My Girl? Jimmy Eat World \u2013 The Middle Joan Jett - I Love Rock 'n' Roll John Lennon - Imagine John Mellencamp - Jack & Diane Johnny Cash - Folsom Prison Blues Journey - Don't Stop Believing Joy Division - Dead Souls Joy Division - Love Will Tear Us Apart Justin Bieber - Sorry Justin Timberlake - SexyBack Katy Perry - Last Friday Night (T.G.I.F.) Katy Perry - Teenage Dream Kelly Clarkson - Since U Been Gone Kenny Rogers - The Gambler Kenny Rogers & Dolly Parton - Islands In the Stream Kid Rock & Sheryl Crow - Picture Killers - All These Things That I've Done Killers - Mr. Brightside Kingsmen - Louie Louie Kings of Leon - Sex on Fire Kings of Leon - Use Somebody Kinks - All Day And All Of The Night Kiss - I Was Made For Loving You Kiss - Rock and Roll All Nite Kiss - Strutter Kylie Minogue - Can't Get You Out Of My Head Lady Antebellum - Need You Now Lady Gaga - You and I Lady Gaga - Shallow Le Tigre - Deceptacon Led Zeppelin - Immigrant Song Led Zeppelin - Rock and Roll Led Zeppelin - Whole Lotta Love Len - Steal My Sunshine Lil Nas X - Old Town Road Lit - My Own Worst Enemy Liz Phair - F*** and Run Lizzo - Truth Hurts Lou Reed - Perfect Day Lou Reed - Walk On The Wild Side M.I.A. - Paper Planes Madonna - Holiday Madonna - Like a Virgin Madonna - Material Girl Mariah Carey - All I Want For Xmas Is You Maroon 5 - Sugar Mary J. Blige - Family Affair Mazzy Star - Fade Into You MC5 - Kick Out the Jams Melissa Etheridge - I'm the Only One Men Without Hats - Safety Dance Metallica - Enter Sandman Metric - Gimme Sympathy MGMT - Electric Feel MGMT - Kids Michael Jackson - Beat It Michael Jackson - Billie Jean Miley Cyrus - Party in the USA Miley Cyrus - We Can\u2019t Stop Miley Cyrus - Wrecking Ball Misfits - Hybrid Moments Misfits - Last Caress Misfits - Where Eagles Dare Modest Mouse - Float On Montell Jordan - This is How We Do It Mot\xF6rhead - Ace of Spades N*Sync - Bye Bye Bye Nancy Sinatra - These Boots Are Made for Walkin' Natalie Imbruglia - Torn Neil Diamond - Girl, You\u2019ll Be a Woman Soon Neil Diamond - Sweet Caroline Neil Young - Old Man Neil Young - Rockin\u2019 in the Free World New York Dolls - Personality Crisis Nick Gilder - Hot Child in the City Nine Inch Nails - Dead Souls Nirvana - All Apologies Nirvana - Breed Nirvana - Come as You Are Nirvana - In Bloom Nirvana - Molly's Lips Nirvana - Smells Like Teen Spirit Nirvana - Territorial Pissings No Doubt - Just a Girl Oasis - Champagne Supernova Oasis - Don\u2019t Look Back in Anger Oasis - Wonderwall Offspring - Come Out and Play Offspring - Self Esteem Otis Redding - Sittin\u2019 on the Dock of the Bay Outkast - Hey Ya! Outkast - Ms. Jackson Ozzy Osbourne - Crazy Train Pat Benatar - Hit Me With Your Best Shot Patti Smith - Because the Night Patti Smith - Gloria Pavement - Cut Your Hair Pearl Jam - Alive Pearl Jam - Jeremy Pearl Jam - Last Kiss Pink Floyd - Another Brick in the Wall Pink Floyd - Wish You Were Here Pixies - Gigantic Pixies - Where is My Mind PJ Harvey - Rid of Me Police - Message in a Bottle Portishead - Glory Box Prince - Kiss Prince - Little Red Corvette Prince - Purple Rain Prince - When You Were Mine Proclaimers - I'm Gonna Be (500 Miles) Pulp - Common People R.E.M. - Losing My Religion Radiohead - Creep Radiohead - Fake Plastic Trees Radiohead - High and Dry Radiohead - Karma Police Rage Against the Machine - Killing in the Name Ramones - Blitzkrieg Bop Ramones - I Wanna Be Sedated Rancid - Ruby Soho Rancid - Salvation Rancid - Time Bomb Red Hot Chili Peppers - Dani California Red Hot Chili Peppers - Give It Away Red Hot Chili Peppers - Scar Tissue Red Hot Chili Peppers - Soul to Squeeze Red Hot Chili Peppers - Under the Bridge Robyn - Dancing On My Own Rolling Stones - Beast of Burden Rolling Stones - Honky Tonk Women Rolling Stones - Jumpin' Jack Flash Runaways - Cherry Bomb Rupert Holmes - Escape (The Pi\xF1a Colada Song) Santigold - L.E.S. Artistes Serena Ryder - Stompa Sex Pistols - Anarchy in the UK Sex Pistols - God Save the Queen Shania Twain - Man! I Feel Like a Woman Shania Twain - That Don't Impress Me Much Sheryl Crow - All I Wanna Do Sheryl Crow - If It Makes You Happy Sloan - The Good in Everyone Sloan - Money City Maniacs Sloan - Underwhelmed Smashing Pumpkins - 1979 Smashing Pumpkins - Cherub Rock Smashing Pumpkins - Today Smiths - There is a Light That Never Goes Out Smiths - This Charming Man Snoop Doggy Dogg - Gin & Juice Sonic Youth - 100% Spice Girls - Wannabe Stealers Wheel - Stuck in the Middle With You Steppenwolf - Born to be Wild Stooges - I Wanna Be Your Dog Stooges - Search and Destroy Stooges - T.V. Eye Strokes - Last Nite Strokes - Reptilia Strokes - You Only Live Once Sublime - What I Got Supremes - Can\u2019t Hurry Love Survivor - Eye of the Tiger T.Rex - 20th Century Boy T.Rex - Children of the Revolution T.Rex - Get It On (Bang a Gong) Talking Heads - Psycho Killer Talking Heads - This Must Be the Place Taylor Swift - Shake It Off Taylor Swift \u2013 We Are Never Getting Back Together Temple of the Dog - Hunger Strike Temptations - My Girl Temptations - Ain\u2019t Too Proud To Beg Third Eye Blind - Semi-Charmed Life Thrush Hermit - From the Back of the Film Tina Turner - Proud Mary TLC - Waterfalls TLC - No Scrubs Tom Petty - Don\u2019t Do Me Like That Tom Petty - Free Fallin' Tom Petty - Mary Jane\u2019s Last Dance Tom Petty - You Don't Know How it Feels Tragically Hip - Ahead by a Century Tragically Hip - Bobcaygeon Tragically Hip - New Orleans is Sinking Tragically Hip - Poets U2 - With or Without You Undertones - Teenage Kicks Urge Overkill - Girl, You\u2019ll Be a Woman Soon Van Halen - Runnin\u2019 with the Devil Vanilla Ice - Ice Ice Baby Vaselines - Molly\u2019s Lips Velvet Underground - Waiting for My Man Violent Femmes - Blister In the Sun War - Lowrider Weeknd - Can't Feel My Face Weezer - El Scorcho Weezer - Hash Pipe Weezer - My Name is Jonas Weezer - Say It Ain't So Weezer - Tired of Sex Weezer - Undone the Sweater Song Weird Al Yankovic - Amish Paradise Weird Al Yankovic - Eat It Weird Al Yankovic - Like a Surgeon Weird Al Yankovic - Rye or the Kaiser Weird Al Yankovic - Smells Like Nirvana Wham! - Last Christmas Wheatus - Teenage Dirtbag White Stripes - Seven Nation Army White Stripes - Fell in Love with a Girl Whitesnake - Here I Go Again Yeah Yeah Yeahs - Gold Lion Yeah Yeah Yeahs - Maps Young MC - Bust a Move"));
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ })

})
//# sourceMappingURL=list.js.d208f7b4a100917e32a1.hot-update.js.map
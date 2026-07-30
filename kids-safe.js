// Kids Mode allowlist for index.html — a hand-reviewed judgment call on which
// shows are appropriate for children, independent of the Genre grouping above
// shows.js also carries (a show tagged "Kids & Educational" there is a genre,
// not a rating — plenty of shows outside that genre are just as kid-safe, and
// a few "cartoons" are adult-audience shows that don't belong in Kids Mode).
//
// This is a whitelist, not a blocklist: a show absent from this set is treated
// as NOT kid-safe and hidden when Kids Mode is on — including any new show added
// later in shows.js until someone reviews it and adds its id here. That's the
// safe failure direction for a content filter (under-include, never over-include).
//
// Classified by reviewing each title's actual target audience/TV Parental
// Guidelines rating where known (roughly TV-Y/TV-Y7/TV-G/TV-PG in, TV-14/TV-MA
// out), not an official ratings database (none exists in this repo) — still a
// judgment call, not gospel; adjust freely.
window.KIDS_SAFE_SHOWS = new Set([
  'AceVenturaPetDetectiveSeries', 'AdventuresOfSonic', 'AlvinandtheChipmunks', 'Animaniacs',
  'ArchiesWeirdMysteries', 'BatmanBeyond', 'BatmanTAS', 'BeastWarsTransformers',
  'Beetlejuice', 'BikerMiceFromMars', 'BobbysWorld', 'BuzzLightyearofStarCommand',
  'CampCandy', 'CampLakebottom', 'CaptainN', 'CaspertheFriendlyGhost',
  'CaspersScareSchool', 'CattanoogaCatstheSeries', 'CelebritysComicolor', 'CouragetheCowardlyDog',
  'DarkwingDucktheSeries', 'DextersLaboratorytheSeries', 'Digimon', 'DragonBall',
  'DragonBallGT', 'DragonBallSuper', 'DragonBallZ', 'DragonBallZKai',
  'DragonBallZMovies', 'DuckDodgers', 'DuckTalesSeriesWorkinProgress', 'EagleRiders',
  'EdEddNEddySeriesAllEpisodesandSpecials', 'FairlyOddParents', 'GarfieldandFriendsSeries', 'Godzilla',
  'GravityFalls', 'HeathcliffandtheCatillacCatsTVSeries', 'HermanandKatnip', 'Histeria',
  'Houndcats', 'InspectorGadget', 'InvaderZIM', 'KaBlam',
  'KarateKid', 'LandBeforeTime', 'LippytheLionandHardyHarHar', 'LOONEYTUNESSERIES',
  'MightyMax', 'MonsterRancher', 'MorphFiles', 'MotormouseandAutocat',
  'MuppetBabies', 'MutantLeague', 'PeabodysImprobableHistory', 'PJs',
  'PokmonChronicles', 'PokemonOrangeIslands', 'PokemonIndigoLeague', 'PolePosition',
  'PoliceAcademyTheAnimatedSeries', 'PopeyetheSailorMan', 'PowerpuffGirls', 'RamboTheForceofFreedom',
  'Recess', 'RockosModernLife', 'RockyandBullwinkleShow', 'SonictheHedgehog',
  'SpiderManTAS', 'SpongeBobSquarePants', 'StarcomtheUSSpaceForceSeries', 'SwanBoy',
  'TeenTitansSeries', 'TeenageMutantNinjaTurtles', 'TMNTNextMutation', 'TheMaskAnimatedSeries',
  'TheTick', 'TinyToonAdventures', 'TransformersPrime', 'UltimateMuscleSeries',
  'WackyRacesSeries', 'WallyGator', 'XMen', 'ALFtheSeries',
  'AreWeThereYet', 'BlessThisHouse', 'CosbyShow', 'DesigningWomen',
  'DickVanDyke', 'EverybodyLovesRaymond', 'FactsofLife', 'FamilyMatters',
  'GetSmart', 'GreenAcres', 'GrowingPains', 'HarryandtheHendersons',
  'HeyDude', 'ItsYourMove', 'JeffFoxworthyShow', 'Jeffersons',
  'JusttheTenofUs', 'LeaveIttoBeavertheSeries', 'LifeGoesOn', 'MASH',
  'MamasFamily', 'MaryTylerMooreShow', 'McHalesNavySeries', 'MisterEd',
  'Newhart', 'ParkerLewis', 'PetticoatJunction', 'PunkyBrewster',
  'Reba', 'Roseanne', 'SaluteYourShorts', 'SavedByTheBell',
  'AlexMack', 'SoulMan', 'StepByStep', 'StillStanding',
  'Taxi1978', 'TeenAngel', 'WhatILikeAboutYou', 'WkrpinCincinnati',
  'YouWish', 'ZoeDuncanJackJane', 'ATeam', 'BriscoCountyJr',
  'Animorphs', 'Automan', 'BarbaryCoast', 'BattlestarGalactica',
  'BlueThunder', 'BuckRogers', 'DoctorWho', 'DueSouth',
  'HitchhikersGuidetotheGalaxy', 'KnightRider', 'LogansRun', 'Middleman',
  'Persuaders', 'PowerRangers', 'Space1999', 'StarTrekTNG',
  'StarTrekVoyager', 'Tick', 'WonderYears', 'AreYouAfraidOfTheDark',
  'EerieIndiana', 'Spooksville', 'HeyVernIt', 'AdventuresinWonderland',
  'AllegrasWindow', 'BerenstainBears', 'BertandErniesGreatAdventures', 'BillNye',
  'CliffordtheBigRedDogSeriesSeries', 'CosmosaPersonalVoyage', 'Ghostwriter', 'GUTS',
  'JimHensonHour', 'LandOfTheLost1991', 'LittleBear', 'MartyStouffersWildAmerica',
  'MouseFactory', 'MrMen', 'NickArcade', 'PlanetEarth',
  'RoundtheTwist', 'SchoolhouseRock', 'Wishbone', 'WonderPetsEpisodeswithMissingEpisodes',
  'Zoboomafoo', 'Asteroid1997', 'Meteorites1998', 'Tornado1996',
  'VolcanoFireOnTheMountain', 'Y2KTheMovie', 'FoxKids', 'NickAtNite',
  'SatMorning', 'SNICK', 'TGIF',
]);

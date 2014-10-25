(function() {
  // Consider retrieving data here: http://www.srdremix.com/api
  var app = angular.module('characterBuilder', []);

  app.controller('ClassController', function(){
    this.classes = classes;
    this.classDetails = classDetails;
    this.tables = tables;

    this.getTableForClass = function(className){
      return this.tables[className.toLowerCase()];
    };

    this.getClassDetails = function(className){
      return this.classDetails[className.toLowerCase()]
    }

    this.hasSpellsAtLevel = function(className, level){
      classDetails = this.getClassDetails(className);
      maxSpellLevel = classDetails.maxSpellLevel;
      return maxSpellLevel >= level;
    }
  });

  app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(tabId){
      this.tab = tabId;
    };

    this.isSet = function(tabId){
      return this.tab === tabId;
    };
  });

  var classes = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Sorcerer', 'Wizard']

  var classDetails = {
    barbarian: {
      name: 'Barbarian',
      shortDescription: 'The barbarian is a brutal berserker from beyond the edge of civilized lands.',
      description: "For some, there is only rage. In the ways of their people, in the fury of their passion, in the howl of battle, conflict is all these brutal souls know. Savages, hired muscle, masters of vicious martial techniques, they are not soldiers or professional warriors -- they are the battle possessed, creatures of slaughter and spirits of war. Known as barbarians, these warmongers know little of training, preparation, or the rules of warfare; for them, only the moment exists, with the foes that stand before them and the knowledge that the next moment might hold their death. They possess a sixth sense in regard to danger and the endurance to weather all that might entail. These brutal warriors might rise from all walks of life, both civilized and savage, though whole societies embracing such philosophies roam the wild places of the world. Within barbarians storms the primal spirit of battle, and woe to those who face their rage.",
      role: 'Barbarians excel in combat, possessing the martial prowess and fortitude to take on foes seemingly far superior to themselves. With rage granting them boldness and daring beyond that of most other warriors, barbarians charge furiously into battle and ruin all who would stand in their way.',
      alignment: 'Any',
      hitDie: 12,
      classSkills: [
        'Acrobatics (Dex)',
        'Climb (Str)',
        'Craft (Int)',
        'Handle Animal (Cha)',
        'Intimidate (Cha)',
        'Knowledge (nature) (Int)',
        'Perception (Wis)',
        'Ride (Dex)',
        'Survival (Wis)',
        'Swim (Str)'
      ],
      skillRanksPerLevel: 4,
      maxSpellLevel: 0,
      source: 'core'
    },
    bard: {
      name: 'Bard',
      shortDescription: 'The bard uses skill and spell alike to bolster his allies, confound his enemies, and build upon his fame.',
      description: 'Untold wonders and secrets exist for those skillful enough to discover them. Through cleverness, talent, and magic, these cunning few unravel the wiles of the world, becoming adept in the arts of persuasion, manipulation, and inspiration. Typically masters of one or many forms of artistry, bards possess an uncanny ability to know more than they should and use what they learn to keep themselves and their allies ever one step ahead of danger. Bards are quick-witted and captivating, and their skills might lead them down many paths, be they gamblers or jacks-of-all-trades, scholars or performers, leaders or scoundrels, or even all of the above. For bards, every day brings its own opportunities, adventures, and challenges, and only by bucking the odds, knowing the most, and being the best might they claim the treasures of each.',
      role: 'Bards capably confuse and confound their foes while inspiring their allies to ever-greater daring. While accomplished with both weapons and magic, the true strength of bards lies outside melee, where they can support their companions and undermine their foes without fear of interruptions to their performances.',
      alignment: 'Any',
      hitDie: 8,
      classSkills: [
        'Acrobatics (Dex)',
        'Appraise (Int)',
        'Bluff (Cha)',
        'Climb (Str)',
        'Craft (Int)',
        'Diplomacy (Cha)',
        'Disguise (Cha)',
        'Escape Artist (Dex)',
        'Intimidate (Cha)',
        'Knowledge (all) (Int)',
        'Linguistics (Int)',
        'Perception (Wis)',
        'Perform (Cha)',
        'Profession (Wis)',
        'Sense Motive (Wis)',
        'Sleight of Hand (Dex)',
        'Spellcraft (Int)',
        'Stealth (Dex)',
        'Use Magic Device (Cha)'
      ],
      skillRanksPerLevel: 6,
      maxSpellLevel: 6,
      source: 'core'
    },
    cleric: {
      name: 'Cleric',
      shortDescription: "A devout follower of a deity, the cleric can heal wounds, raise the dead, and call down the wrath of the gods.",
      description: "In faith and the miracles of the divine, many find a greater purpose. Called to serve powers beyond most mortal understanding, all priests preach wonders and provide for the spiritual needs of their people. Clerics are more than mere priests, though; these emissaries of the divine work the will of their deities through strength of arms and the magic of their gods. Devoted to the tenets of the religions and philosophies that inspire them, these ecclesiastics quest to spread the knowledge and influence of their faith. Yet while they might share similar abilities, clerics prove as different from one another as the divinities they serve, with some offering healing and redemption, others judging law and truth, and still others spreading conflict and corruption. The ways of the cleric are varied, yet all who tread these paths walk with the mightiest of allies and bear the arms of the gods themselves.",
      role: "More than capable of upholding the honor of their deities in battle, clerics often prove stalwart and capable combatants. Their true strength lies in their capability to draw upon the power of their deities, whether to increase their own and their allies' prowess in battle, to vex their foes with divine magic, or to lend healing to companions in need.\nAs their powers are influenced by their faith, all clerics must focus their worship upon a divine source. While the vast majority of clerics revere a specific deity, a small number dedicate themselves to a divine concept worthy of devotion-such as battle, death, justice, or knowledge-free of a deific abstraction. (Work with your GM if you prefer this path to selecting a specific deity.)",
      alignment: 'Any',
      hitDie: 8,
      classSkills: [
        'Appraise (Int)',
        'Craft (Int)',
        'Diplomacy (Cha)',
        'Heal (Wis)',
        'Knowledge (arcana) (Int)',
        'Knowledge (history) (Int)',
        'Knowledge (nobility) (Int)',
        'Knowledge (planes) (Int)',
        'Knowledge (religion) (Int)',
        'Linguistics (Int)',
        'Profession (Wis)',
        'Sense Motive (Wis)',
        'Spellcraft (Int)'
      ],
      skillRanksPerLevel: 2,
      maxSpellLevel: 9,
      source: 'core'
    },
    druid: {
      name: 'Druid',
      shortDescription: 'The druid is a worshiper of all things natural-a spellcaster, a friend to animals, and a skilled shapechanger.',
      description: "Within the purity of the elements and the order of the wilds lingers a power beyond the marvels of civilization. Furtive yet undeniable, these primal magics are guarded over by servants of philosophical balance known as druids. Allies to beasts and manipulators of nature, these often misunderstood protectors of the wild strive to shield their lands from all who would threaten them and prove the might of the wilds to those who lock themselves behind city walls. Rewarded for their devotion with incredible powers, druids gain unparalleled shape-shifting abilities, the companionship of mighty beasts, and the power to call upon nature's wrath. The mightiest temper powers akin to storms, earthquakes, and volcanoes with primeval wisdom long abandoned and forgotten by civilization.",
      role: "While some druids might keep to the fringe of battle, allowing companions and summoned creatures to fight while they confound foes with the powers of nature, others transform into deadly beasts and savagely wade into combat. Druids worship personifications of elemental forces, natural powers, or nature itself. Typically this means devotion to a nature deity, though druids are just as likely to revere vague spirits, animalistic demigods, or even specific awe-inspiring natural wonders.",
      alignment: 'Any neutral',
      hitDie: 8,
      classSkills: [
        'Climb (Str)',
        'Craft (Int)',
        'Fly (Dex)',
        'Handle Animal (Cha)',
        'Heal (Wis)',
        'Knowledge (geography) (Int)',
        'Knowledge (nature) (Int)',
        'Perception (Wis)',
        'Profession (Wis)',
        'Ride (Dex)',
        'Spellcraft (Int)',
        'Survival (Wis)',
        'Swim (Str)'
      ],
      skillRanksPerLevel: 4,
      maxSpellLevel: 9,
      source: 'core'
    },
    fighter: {
      name: 'Fighter',
      shortDescription: 'Brave and stalwart, the fighter is a master of all manner of arms and armor.',
      description: 'Some take up arms for glory, wealth, or revenge. Others do battle to prove themselves, to protect others, or because they know nothing else. Still others learn the ways of weaponcraft to hone their bodies in battle and prove their mettle in the forge of war. Lords of the battlefield, fighters are a disparate lot, training with many weapons or just one, perfecting the uses of armor, learning the fighting techniques of exotic masters, and studying the art of combat, all to shape themselves into living weapons. Far more than mere thugs, these skilled warriors reveal the true deadliness of their weapons, turning hunks of metal into arms capable of taming kingdoms, slaughtering monsters, and rousing the hearts of armies. Soldiers, knights, hunters, and artists of war, fighters are unparalleled champions, and woe to those who dare stand against them.',
      role: "Fighters excel at combat-defeating their enemies, controlling the flow of battle, and surviving such sorties themselves. While their specific weapons and methods grant them a wide variety of tactics, few can match fighters for sheer battle prowess.",
      alignment: 'Any',
      hitDie: 10,
      classSkills: [
        'Climb (Str)',
        'Craft (Int)',
        'Handle Animal (Cha)',
        'Intimidate (Cha)',
        'Knowledge (dungeoneering) (Int)',
        'Knowledge (engineering) (Int)',
        'Profession (Wis)',
        'Ride (Dex)',
        'Survival (Wis)',
        'Swim (Str)'
      ],
      skillRanksPerLevel: 2,
      maxSpellLevel: 0,
      source: 'core'
    },
    monk: {
      name: 'Monk',
      shortDescription: 'A student of martial arts, the monk trains his body to be his greatest weapon and defense.',
      description: "For the truly exemplary, martial skill transcends the battlefield-it is a lifestyle, a doctrine, a state of mind. These warrior-artists search out methods of battle beyond swords and shields, finding weapons within themselves just as capable of crippling or killing as any blade. These monks (so called since they adhere to ancient philosophies and strict martial disciplines) elevate their bodies to become weapons of war, from battle-minded ascetics to self-taught brawlers. Monks tread the path of discipline, and those with the will to endure that path discover within themselves not what they are, but what they are meant to be.",
      role: "Monks excel at overcoming even the most daunting perils, striking where it's least expected, and taking advantage of enemy vulnerabilities. Fleet of foot and skilled in combat, monks can navigate any battlefield with ease, aiding allies wherever they are needed most.",
      alignment: "Any lawful",
      hitDie: 8,
      classSkills: [
        'Acrobatics (Dex)',
        'Climb (Str)',
        'Craft (Int)',
        'Escape Artist (Dex)',
        'Intimidate (Cha)',
        'Knowledge (history) (Int)',
        'Knowledge (religion) (Int)',
        'Perception (Wis)',
        'Perform (Cha)',
        'Profession (Wis)',
        'Ride (Dex)',
        'Sense Motive (Wis)',
        'Stealth (Dex)',
        'Swim (Str)'
      ],
      skillRanksPerLevel: 4,
      maxSpellLevel: 0,
      source: 'core'
    },
    paladin: {
      name: 'Paladin',
      shortDescription: 'The paladin is the knight in shining armor, a devoted follower of law and good.',
      description: "Through a select, worthy few shines the power of the divine. Called paladins, these noble souls dedicate their swords and lives to the battle against evil. Knights, crusaders, and law-bringers, paladins seek not just to spread divine justice but to embody the teachings of the virtuous deities they serve. In pursuit of their lofty goals, they adhere to ironclad laws of morality and discipline. As reward for their righteousness, these holy champions are blessed with boons to aid them in their quests: powers to banish evil, heal the innocent, and inspire the faithful. Although their convictions might lead them into conflict with the very souls they would save, paladins weather endless challenges of faith and dark temptations, risking their lives to do right and fighting to bring about a brighter future.",
      role: "Paladins serve as beacons for their allies within the chaos of battle. While deadly opponents of evil, they can also empower goodly souls to aid in their crusades. Their magic and martial skills also make them well suited to defending others and blessing the fallen with the strength to continue fighting.",
      alignment: 'Lawful good',
      hitDie: 10,
      classSkills: [
        'Craft (Int)',
        'Diplomacy (Cha)',
        'Handle Animal (Cha)',
        'Heal (Wis)',
        'Knowledge (nobility) (Int)',
        'Knowledge (religion) (Int)',
        'Profession (Wis)',
        'Ride (Dex)',
        'Sense Motive (Wis)',
        'Spellcraft (Int)'
      ],
      skillRanksPerLevel: 2,
      maxSpellLevel: 4,
      source: 'core'
    },
    ranger: {
      name: 'Ranger',
      shortDescription: 'A tracker and hunter, the ranger is a creature of the wild and of tracking down his favored foes.',
      description: "For those who relish the thrill of the hunt, there are only predators and prey. Be they scouts, trackers, or bounty hunters, rangers share much in common: unique mastery of specialized weapons, skill at stalking even the most elusive game, and the expertise to defeat a wide range of quarries. Knowledgeable, patient, and skilled hunters, these rangers hound man, beast, and monster alike, gaining insight into the way of the predator, skill in varied environments, and ever more lethal martial prowess. While some track man-eating creatures to protect the frontier, others pursue more cunning game-even fugitives among their own people.",
      role: "Rangers are deft skirmishers, either in melee or at range, capable of skillfully dancing in and out of battle. Their abilities allow them to deal significant harm to specific types of foes, but their skills are valuable against all manner of enemies.",
      alignment: 'Any.',
      hitDie: 10,
      classSkills: [
        'Climb (Str)',
        'Craft (Int)',
        'Handle Animal (Cha)',
        'Heal (Wis)',
        'Intimidate (Cha)',
        'Knowledge (dungeoneering) (Int)',
        'Knowledge (geography) (Int)',
        'Knowledge (nature) (Int)',
        'Perception (Wis)',
        'Profession (Wis)',
        'Ride (Dex)',
        'Spellcraft (Int)',
        'Stealth (Dex)',
        'Survival (Wis)',
        'Swim (Str)'
      ],
      skillRanksPerLevel: 6,
      maxSpellLevel: 4,
      source: 'core'
    },
    rogue: {
      name: 'Rogue',
      shortDescription: 'The rogue is a thief and a scout, an opportunist capable of delivering brutal strikes against unwary foes.',
      description: "Life is an endless adventure for those who live by their wits. Ever just one step ahead of danger, rogues bank on their cunning, skill, and charm to bend fate to their favor. Never knowing what to expect, they prepare for everything, becoming masters of a wide variety of skills, training themselves to be adept manipulators, agile acrobats, shadowy stalkers, or masters of any of dozens of other professions or talents. Thieves and gamblers, fast talkers and diplomats, bandits and bounty hunters, and explorers and investigators all might be considered rogues, as well as countless other professions that rely upon wits, prowess, or luck. Although many rogues favor cities and the innumerable opportunities of civilization, some embrace lives on the road, journeying far, meeting exotic people, and facing fantastic danger in pursuit of equally fantastic riches. In the end, any who desire to shape their fates and live life on their own terms might come to be called rogues.",
      role: "Rogues excel at moving about unseen and catching foes unaware, and tend to avoid head-to-head combat. Their varied skills and abilities allow them to be highly versatile, with great variations in expertise existing between different rogues. Most, however, excel in overcoming hindrances of all types, from unlocking doors and disarming traps to outwitting magical hazards and conning dull-witted opponents.",
      alignment: 'Any',
      hitDie: 8,
      classSkills: [
        'Acrobatics (Dex)',
        'Appraise (Int)',
        'Bluff (Cha)',
        'Climb (Str)',
        'Craft (Int)',
        'Diplomacy (Cha)',
        'Disable Device (Dex)',
        'Disguise (Cha)',
        'Escape Artist (Dex)',
        'Intimidate (Cha)',
        'Knowledge (dungeoneering) (Int)',
        'Knowledge (local) (Int)',
        'Linguistics (Int)',
        'Perception (Wis)',
        'Perform (Cha)',
        'Profession (Wis)',
        'Sense Motive (Wis)',
        'Sleight of Hand (Dex)',
        'Stealth (Dex)',
        'Swim (Str)',
        'Use Magic Device (Cha)'
        ],
      skillRanksPerLevel: 8,
      maxSpellLevel: 0,
      source: 'core'
    },
    sorcerer: {
      name: 'Sorcerer',
      shortDescription: 'The spellcasting sorcerer is born with an innate knack for magic and has strange, eldritch powers.',
      description: "Scions of innately magical bloodlines, the chosen of deities, the spawn of monsters, pawns of fate and destiny, or simply flukes of fickle magic, sorcerers look within themselves for arcane prowess and draw forth might few mortals can imagine. Emboldened by lives ever threatening to be consumed by their innate powers, these magic-touched souls endlessly indulge in and refine their mysterious abilities, gradually learning how to harness their birthright and coax forth ever greater arcane feats. Just as varied as these innately powerful spellcasters' abilities and inspirations are the ways in which they choose to utilize their gifts. While some seek to control their abilities through meditation and discipline, becoming masters of their fantastic birthright, others give in to their magic, letting it rule their lives with often explosive results. Regardless, sorcerers live and breathe that which other spellcasters devote their lives to mastering, and for them magic is more than a boon or a field of study; it is life itself.",
      role: "Sorcerers excel at casting a selection of favored spells frequently, making them powerful battle mages. As they become familiar with a specific and ever-widening set of spells, sorcerers often discover new and versatile ways of making use of magics other spellcasters might overlook. Their bloodlines also grant them additional abilities, assuring that no two sorcerers are ever quite alike.",
      alignment: 'Any',
      hitDie: 6,
      classSkills: [
        'Appraise (Int)',
        'Bluff (Cha)',
        'Craft (Int)',
        'Fly (Dex)',
        'Intimidate (Cha)',
        'Knowledge (arcana) (Int)',
        'Profession (Wis)',
        'Spellcraft (Int)',
        'Use Magic Device (Cha)'],
      skillRanksPerLevel: 2,
      maxSpellLevel: 9,
      source: 'core'
    },
    wizard: {
      name: 'Wizard',
      shortDescription: 'The wizard masters magic through constant study that gives him incredible magical power.',
      description: "Beyond the veil of the mundane hide the secrets of absolute power. The works of beings beyond mortals, the legends of realms where gods and spirits tread, the lore of creations both wondrous and terrible-such mysteries call to those with the ambition and the intellect to rise above the common folk to grasp true might. Such is the path of the wizard. These shrewd magic-users seek, collect, and covet esoteric knowledge, drawing on cultic arts to work wonders beyond the abilities of mere mortals. While some might choose a particular field of magical study and become masters of such powers, others embrace versatility, reveling in the unbounded wonders of all magic. In either case, wizards prove a cunning and potent lot, capable of smiting their foes, empowering their allies, and shaping the world to their every desire.",
      role: "While universalist wizards might study to prepare themselves for any manner of danger, specialist wizards research schools of magic that make them exceptionally skilled within a specific focus. Yet no matter their specialty, all wizards are masters of the impossible and can aid their allies in overcoming any danger.",
      alignment: 'Any',
      hitDie: 6,
      classSkills: [
        'Appraise (Int)',
        'Craft (Int)',
        'Fly (Dex)',
        'Knowledge (all) (Int)',
        'Linguistics (Int)',
        'Profession (Wis)',
        'Spellcraft (Int)'],
      skillRanksPerLevel: 2,
      maxSpellLevel: 9,
      source: 'core'
    }
  }

var feats = [
  {
    name: 'Power Attack',
    type: 'Combat',
    prerequistites: "Str 13, base attack bonus +1",
    summary: "Trade melee attack bonus for damage",
    system: "PFRPG"
  }
]

var traits = [
  {
    name: 'Reactionary',
    description: "You were bullied often as a child, but never quite developed an offensive response. Instead, you became adept at anticipating sudden attacks and reacting to danger quickly. You gain a +2 trait bonus to Initiative checks."
  }
]

var spells = [
  {
    name: "Fireball",
    school: "evocation",
    subschool: null,
    descriptor: "fire",
    spell_level: "sorcerer/wizard 3, magus 3"
  },
  {
    name: "Cure Light Wounds",
    school: "conjuration",
    subschool: "healing",
    descriptor: null,
    spell_level: "bard 1, cleric 1, druid 1, paladin 1, ranger 2, witch 1, inquisitor 1, alchemist 1"
  }
]

var tables = {
    barbarian: [
      {
        level: "1st",
        baseAttackBonus: "+1",
        fortSave: "+2",
        reflexSave: "+0",
        willSave: "+0",
        specials: ["Fast movement, rage"]
      },
      {
        level: "2nd",
        baseAttackBonus: "+2",
        fortSave: "+3",
        reflexSave: "+0",
        willSave: "+0",
        specials: ["Rage power, uncanny dodge"]
      },
      {
        level: "3rd",
        baseAttackBonus: "+3",
        fortSave: "+3",
        reflexSave: "+1",
        willSave: "+1",
        specials: ["Trap sense +1"]
      },
      {
        level: "4th",
        baseAttackBonus: "+4",
        fortSave: "+4",
        reflexSave: "+1",
        willSave: "+1",
        specials: ["Rage power"]
      },
      {
        level: "5th",
        baseAttackBonus: "+5",
        fortSave: "+4",
        reflexSave: "+1",
        willSave: "+1",
        specials: ["improved-Improved uncanny dodge"]
      },
      {
        level: "6th",
        baseAttackBonus: "+6/+1",
        fortSave: "+5",
        reflexSave: "+2",
        willSave: "+2",
        specials: ["Rage power, Trap sense +2"]
      },
      {
        level: "7th",
        baseAttackBonus: "+7/+2",
        fortSave: "+5",
        reflexSave: "+2",
        willSave: "+2",
        specials: ["Damage reduction 1/-"]
      },
      {
        level: "8th",
        baseAttackBonus: "+8/+3",
        fortSave: "+6",
        reflexSave: "+2",
        willSave: "+2",
        specials: ["Rage power"]
      },
      {
        level: "9th",
        baseAttackBonus: "+9/+4",
        fortSave: "+6",
        reflexSave: "+3",
        willSave: "+3",
        specials: ["Trap sense +3"]
      },
      {
        level: "10th",
        baseAttackBonus: "+10/+5",
        fortSave: "+7",
        reflexSave: "+3",
        willSave: "+3",
        specials: ["Damage reduction 2/-, Rage power"]
      },
      {
        level: "11th",
        baseAttackBonus: "+11/+6/+1",
        fortSave: "+7",
        reflexSave: "+3",
        willSave: "+3",
        specials: ["greater-Greater rage"]
      },
      {
        level: "12th",
        baseAttackBonus: "+12/+7/+2",
        fortSave: "+8",
        reflexSave: "+4",
        willSave: "+4",
        specials: ["Rage power, Trap sense +4"]
      },
      {
        level: "13th",
        baseAttackBonus: "+13/+8/+3",
        fortSave: "+8",
        reflexSave: "+4",
        willSave: "+4",
        specials: ["Damage reduction 3/-"]
      },
      {
        level: "14th",
        baseAttackBonus: "+14/+9/+4",
        fortSave: "+9",
        reflexSave: "+4",
        willSave: "+4",
        specials: ["Indomitable will, Rage power"]
      },
      {
        level: "15th",
        baseAttackBonus: "+15/+10/+5",
        fortSave: "+9",
        reflexSave: "+5",
        willSave: "+5",
        specials: ["Trap sense +5"]
      },
      {
        level: "16th",
        baseAttackBonus: "+16/+11/+6/+1",
        fortSave: "+10",
        reflexSave: "+5",
        willSave: "+5",
        specials: ["Damage reduction 4/-, Rage power"]
      },
      {
        level: "17th",
        baseAttackBonus: "+17/+12/+7/+2",
        fortSave: "+10",
        reflexSave: "+5",
        willSave: "+5",
        specials: ["Tireless rage"]
      },
      {
        level: "18th",
        baseAttackBonus: "+18/+13/+8/+3",
        fortSave: "+11",
        reflexSave: "+6",
        willSave: "+6",
        specials: ["Rage power, Trap sense +6"]
      },
      {
        level: "19th",
        baseAttackBonus: "+19/+14/+9/+4",
        fortSave: "+11",
        reflexSave: "+6",
        willSave: "+6",
        specials: ["Damage reduction 5/-"]
      },
      {
        level: "20th",
        baseAttackBonus: "+20/+15/+10/+5",
        fortSave: "+12",
        reflexSave: "+6",
        willSave: "+6",
        specials: ["Mighty rage, Rage power"]
      }
    ],
    bard: [
      {
        level: "1st",
        baseAttackBonus: "+0",
        fortSave: "+0",
        reflexSave: "+2",
        willSave: "+2",
        specials: ["Bardic knowledge, bardic performance, cantrips, countersong, distraction, fascinate, inspire courage +1"],
        spellsPerDay: [
          { level: 1, spells: 1, },
          { level: 2, spells: 0, },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
          { level: 7, spells: 0, }
        ]
      },
      {
        level: "2nd",
        baseAttackBonus: "+1",
        fortSave: "+0",
        reflexSave: "+3",
        willSave: "+3",
        specials: ["Versatile performance, well-versed"],
        spellsPerDay: [
          { level: 1, spells: 2, },
          { level: 2, spells: 0, },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
          { level: 7, spells: 0, }
        ]
      },
      {
        level: "3rd",
        baseAttackBonus: "+2",
        fortSave: "+1",
        reflexSave: "+3",
        willSave: "+3",
        specials: ["Inspire competence +2"],
        spellsPerDay: [
          { level: 1, spells: 3, },
          { level: 2, spells: 0, },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
          { level: 7, spells: 0, }
        ]
      },
      {
        level: "4th",
        baseAttackBonus: "+3",
        fortSave: "+1",
        reflexSave: "+4",
        willSave: "+4",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 3, },
          { level: 2, spells: 1, },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
          { level: 7, spells: 0, }
        ]
      },
      {
        level: "5th",
        baseAttackBonus: "+3",
        fortSave: "+1",
        reflexSave: "+4",
        willSave: "+4",
        specials: ["inspire courage +2, lore master 1/day"],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: 2, },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
          { level: 7, spells: 0, }
        ]
      },
      {
        level: "6th",
        baseAttackBonus: "+4",
        fortSave: "+2",
        reflexSave: "+5",
        willSave: "+5",
        specials: ["Suggestion, Versatile performance"],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: 3, },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
          { level: 7, spells: 0, }
        ]
      },
      {
        level: "7th",
        baseAttackBonus: "+5",
        fortSave: "+2",
        reflexSave: "+5",
        willSave: "+5",
        specials: ["Inspire competence +3"],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: 3, },
          { level: 3, spells: 1, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
          { level: 7, spells: 0, }
        ]
      },
      {
        level: "8th",
        baseAttackBonus: "+6/+1",
        fortSave: "+2",
        reflexSave: "+6",
        willSave: "+6",
        specials: ["Dirge of doom"],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: 4, },
          { level: 3, spells: 2, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
          { level: 7, spells: 0, }
        ]
      },
      {
        level: "9th",
        baseAttackBonus: "+6/+1",
        fortSave: "+3",
        reflexSave: "+6",
        willSave: "+6",
        specials: ["Inspire greatness"],
        spellsPerDay: [
          { level: 1, spells: 5, },
          { level: 2, spells: 4, },
          { level: 3, spells: 3, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
          { level: 7, spells: 0, }
        ]
      },
      {
        level: "10th",
        baseAttackBonus: "+7/+2",
        fortSave: "+3",
        reflexSave: "+7",
        willSave: "+7",
        specials: ["Jack-of-all-trades, Versatile performance"],
        spellsPerDay: [
          { level: 1, spells: 5, },
          { level: 2, spells: 4, },
          { level: 3, spells: 3, },
          { level: 4, spells: 1, },
          { level: 5, spells: 0, },
          { level: 7, spells: 0, }
        ]
      },
      {
        level: "11th",
        baseAttackBonus: "+8/+3",
        fortSave: "+3",
        reflexSave: "+7",
        willSave: "+7",
        specials: ["Inspire competence +4, inspire courage +3, lore master 2/day"],
        spellsPerDay: [
          { level: 1, spells: 5, },
          { level: 2, spells: 4, },
          { level: 3, spells: 4, },
          { level: 4, spells: 2, },
          { level: 5, spells: 0, },
          { level: 7, spells: 0, }
        ]
      },
      {
        level: "12th",
        baseAttackBonus: "+9/+4",
        fortSave: "+4",
        reflexSave: "+8",
        willSave: "+8",
        specials: ["Soothing performance"],
        spellsPerDay: [
          { level: 1, spells: 5, },
          { level: 2, spells: 5, },
          { level: 3, spells: 4, },
          { level: 4, spells: 3, },
          { level: 5, spells: 0, },
          { level: 7, spells: 0, }
        ]
      },
      {
        level: "13th",
        baseAttackBonus: "+9/+4",
        fortSave: "+4",
        reflexSave: "+8",
        willSave: "+8",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 5, },
          { level: 2, spells: 5, },
          { level: 3, spells: 4, },
          { level: 4, spells: 3, },
          { level: 5, spells: 1, },
          { level: 7, spells: 0, }
        ]
      },
      {
        level: "14th",
        baseAttackBonus: "+10/+5",
        fortSave: "+4",
        reflexSave: "+9",
        willSave: "+9",
        specials: ["Frightening tune, Versatile performance"],
        spellsPerDay: [
          { level: 1, spells: 5, },
          { level: 2, spells: 5, },
          { level: 3, spells: 4, },
          { level: 4, spells: 4, },
          { level: 5, spells: 2, },
          { level: 7, spells: 0, }
        ]
      },
      {
        level: "15th",
        baseAttackBonus: "+11/+6/+1",
        fortSave: "+5",
        reflexSave: "+9",
        willSave: "+9",
        specials: ["Inspire competence +5, inspire heroics"],
        spellsPerDay: [
          { level: 1, spells: 5, },
          { level: 2, spells: 5, },
          { level: 3, spells: 5, },
          { level: 4, spells: 4, },
          { level: 5, spells: 3, },
          { level: 7, spells: 0, }
        ]
      },
      {
        level: "16th",
        baseAttackBonus: "+12/+7/+2",
        fortSave: "+5",
        reflexSave: "+10",
        willSave: "+10",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 5, },
          { level: 2, spells: 5, },
          { level: 3, spells: 5, },
          { level: 4, spells: 4, },
          { level: 5, spells: 3, },
          { level: 7, spells: 1, }
        ]
      },
      {
        level: "17th",
        baseAttackBonus: "+12/+7/+2",
        fortSave: "+5",
        reflexSave: "+10",
        willSave: "+10",
        specials: ["inspire courage +4, lore master 3/day"],
        spellsPerDay: [
          { level: 1, spells: 5, },
          { level: 2, spells: 5, },
          { level: 3, spells: 5, },
          { level: 4, spells: 4, },
          { level: 5, spells: 4, },
          { level: 7, spells: 2, }
        ]
      },
      {
        level: "18th",
        baseAttackBonus: "+13/+8/+3",
        fortSave: "+6",
        reflexSave: "+11",
        willSave: "+11",
        specials: ["Mass suggestion, Versatile performance"],
        spellsPerDay: [
          { level: 1, spells: 5, },
          { level: 2, spells: 5, },
          { level: 3, spells: 5, },
          { level: 4, spells: 5, },
          { level: 5, spells: 4, },
          { level: 7, spells: 3, }
        ]
      },
      {
        level: "19th",
        baseAttackBonus: "+14/+9/+4",
        fortSave: "+6",
        reflexSave: "+11",
        willSave: "+11",
        specials: ["Inspire competence +6"],
        spellsPerDay: [
          { level: 1, spells: 5, },
          { level: 2, spells: 5, },
          { level: 3, spells: 5, },
          { level: 4, spells: 5, },
          { level: 5, spells: 5, },
          { level: 7, spells: 4, }
        ]
      },
      {
        level: "20th",
        baseAttackBonus: "+15/+10/+5",
        fortSave: "+6",
        reflexSave: "+12",
        willSave: "+12",
        specials: ["Deadly performance"],
        spellsPerDay: [
          { level: 1, spells: 5, },
          { level: 2, spells: 5, },
          { level: 3, spells: 5, },
          { level: 4, spells: 5, },
          { level: 5, spells: 5, },
          { level: 7, spells: 5, }
        ]
      },
    ],
    cleric: [
      {
        level: "1st",
        baseAttackBonus: "+0",
        fortSave: "+2",
        reflexSave: "+0",
        willSave: "+2",
        specials: ["Aura, channel energy 1d6, domains, orisons"],
        spellsPerDay: [
          { level: 1, spells: 3, },
          { level: 2, spells: 0, },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
          { level: 6, spells: 0, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "2nd",
        baseAttackBonus: "+1",
        fortSave: "+3",
        reflexSave: "+0",
        willSave: "+3",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: 0, },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
          { level: 6, spells: 0, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "3rd",
        baseAttackBonus: "+2",
        fortSave: "+3",
        reflexSave: "+1",
        willSave: "+3",
        specials: ["Channel energy 2d6"],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: "1+1", },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
          { level: 6, spells: 0, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "4th",
        baseAttackBonus: "+3",
        fortSave: "+4",
        reflexSave: "+1",
        willSave: "+4",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: "2+1", },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
          { level: 6, spells: 0, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "5th",
        baseAttackBonus: "+3",
        fortSave: "+4",
        reflexSave: "+1",
        willSave: "+4",
        specials: ["Channel energy 3d6"],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: "2+1", },
          { level: 3, spells: "1+1", },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
          { level: 6, spells: 0, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "6th",
        baseAttackBonus: "+4",
        fortSave: "+5",
        reflexSave: "+2",
        willSave: "+5",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: "3+1", },
          { level: 3, spells: "2+1", },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
          { level: 6, spells: 0, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "7th",
        baseAttackBonus: "+5",
        fortSave: "+5",
        reflexSave: "+2",
        willSave: "+5",
        specials: ["Channel energy 4d6"],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: "3+1", },
          { level: 3, spells: "2+1", },
          { level: 4, spells: "1+1", },
          { level: 5, spells: 0, },
          { level: 6, spells: 0, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "8th",
        baseAttackBonus: "+6/+1",
        fortSave: "+6",
        reflexSave: "+2",
        willSave: "+6",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: "3+1", },
          { level: 3, spells: "3+1", },
          { level: 4, spells: "2+1", },
          { level: 5, spells: 0, },
          { level: 6, spells: 0, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "9th",
        baseAttackBonus: "+6/+1",
        fortSave: "+6",
        reflexSave: "+3",
        willSave: "+6",
        specials: ["Channel energy 5d6"],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: "4+1", },
          { level: 3, spells: "3+1", },
          { level: 4, spells: "2+1", },
          { level: 5, spells: "1+1", },
          { level: 6, spells: 0, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "10th",
        baseAttackBonus: "+7/+2",
        fortSave: "+7",
        reflexSave: "+3",
        willSave: "+7",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: "4+1", },
          { level: 3, spells: "3+1", },
          { level: 4, spells: "3+1", },
          { level: 5, spells: "2+1", },
          { level: 6, spells: 0, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "11th",
        baseAttackBonus: "+8/+3",
        fortSave: "+7",
        reflexSave: "+3",
        willSave: "+7",
        specials: ["Channel energy 6d6"],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: "4+1", },
          { level: 3, spells: "4+1", },
          { level: 4, spells: "3+1", },
          { level: 5, spells: "2+1", },
          { level: 6, spells: "1+1", },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "12th",
        baseAttackBonus: "+9/+4",
        fortSave: "+8",
        reflexSave: "+4",
        willSave: "+8",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: "4+1", },
          { level: 3, spells: "4+1", },
          { level: 4, spells: "3+1", },
          { level: 5, spells: "3+1", },
          { level: 6, spells: "2+1", },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "13th",
        baseAttackBonus: "+9/+4",
        fortSave: "+8",
        reflexSave: "+4",
        willSave: "+8",
        specials: ["Channel energy 7d6"],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: "4+1", },
          { level: 3, spells: "4+1", },
          { level: 4, spells: "4+1", },
          { level: 5, spells: "3+1", },
          { level: 6, spells: "2+1", },
          { level: 7, spells: "1+1", },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "14th",
        baseAttackBonus: "+10/+5",
        fortSave: "+9",
        reflexSave: "+4",
        willSave: "+9",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: "4+1", },
          { level: 3, spells: "4+1", },
          { level: 4, spells: "4+1", },
          { level: 5, spells: "3+1", },
          { level: 6, spells: "3+1", },
          { level: 7, spells: "2+1", },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "15th",
        baseAttackBonus: "+11/+6/+1",
        fortSave: "+9",
        reflexSave: "+5",
        willSave: "+9",
        specials: ["Channel energy 8d6"],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: "4+1", },
          { level: 3, spells: "4+1", },
          { level: 4, spells: "4+1", },
          { level: 5, spells: "4+1", },
          { level: 6, spells: "3+1", },
          { level: 7, spells: "2+1", },
          { level: 8, spells: "1+1", },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "16th",
        baseAttackBonus: "+12/+7/+2",
        fortSave: "+10",
        reflexSave: "+5",
        willSave: "+10",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: "4+1", },
          { level: 3, spells: "4+1", },
          { level: 4, spells: "4+1", },
          { level: 5, spells: "4+1", },
          { level: 6, spells: "3+1", },
          { level: 7, spells: "3+1", },
          { level: 8, spells: "2+1", },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "17th",
        baseAttackBonus: "+12/+7/+2",
        fortSave: "+10",
        reflexSave: "+5",
        willSave: "+10",
        specials: ["Channel energy 9d6"],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: "4+1", },
          { level: 3, spells: "4+1", },
          { level: 4, spells: "4+1", },
          { level: 5, spells: "4+1", },
          { level: 6, spells: "4+1", },
          { level: 7, spells: "3+1", },
          { level: 8, spells: "2+1", },
          { level: 9, spells: "1+1", }
        ]
      },
      {
        level: "18th",
        baseAttackBonus: "+13/+8/+3",
        fortSave: "+11",
        reflexSave: "+6",
        willSave: "+11",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: "4+1", },
          { level: 3, spells: "4+1", },
          { level: 4, spells: "4+1", },
          { level: 5, spells: "4+1", },
          { level: 6, spells: "4+1", },
          { level: 7, spells: "3+1", },
          { level: 8, spells: "3+1", },
          { level: 9, spells: "2+1", }
        ]
      },
      {
        level: "19th",
        baseAttackBonus: "+14/+9/+4",
        fortSave: "+11",
        reflexSave: "+6",
        willSave: "+11",
        specials: ["Channel energy 10d6"],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: "4+1", },
          { level: 3, spells: "4+1", },
          { level: 4, spells: "4+1", },
          { level: 5, spells: "4+1", },
          { level: 6, spells: "4+1", },
          { level: 7, spells: "4+1", },
          { level: 8, spells: "3+1", },
          { level: 9, spells: "3+1", }
        ]
      },
      {
        level: "20th",
        baseAttackBonus: "+15/+10/+5",
        fortSave: "+12",
        reflexSave: "+6",
        willSave: "+12",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: "4+1", },
          { level: 3, spells: "4+1", },
          { level: 4, spells: "4+1", },
          { level: 5, spells: "4+1", },
          { level: 6, spells: "4+1", },
          { level: 7, spells: "4+1", },
          { level: 8, spells: "4+1", },
          { level: 9, spells: "4+1", }
        ]
      }
    ],
    druid: [
      {
        level: "1st",
        baseAttackBonus: "+0",
        fortSave: "+2",
        reflexSave: "+0",
        willSave: "+2",
        specials: ["Nature bond, nature sense, orisons, wild empathy"],
        spellsPerDay: [
          { level: 1, spells: 3, },
          { level: 2, spells: 0, },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
          { level: 6, spells: 0, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "2nd",
        baseAttackBonus: "+1",
        fortSave: "+3",
        reflexSave: "+0",
        willSave: "+3",
        specials: ["Woodland stride"],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: 0, },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
          { level: 6, spells: 0, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "3rd",
        baseAttackBonus: "+2",
        fortSave: "+3",
        reflexSave: "+1",
        willSave: "+3",
        specials: ["Trackless step"],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: 1, },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
          { level: 6, spells: 0, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "4th",
        baseAttackBonus: "+3",
        fortSave: "+4",
        reflexSave: "+1",
        willSave: "+4",
        specials: ["Resist nature's lure, Wild shape (1/day)"],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: 2, },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
          { level: 6, spells: 0, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "5th",
        baseAttackBonus: "+3",
        fortSave: "+4",
        reflexSave: "+1",
        willSave: "+4",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: 2, },
          { level: 3, spells: 1, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
          { level: 6, spells: 0, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "6th",
        baseAttackBonus: "+4",
        fortSave: "+5",
        reflexSave: "+2",
        willSave: "+5",
        specials: ["Wild shape (2/day)"],
        spellsPerDay: [ { level: 1, spells: 4, },
        { level: 2, spells: 3, },
        { level: 3, spells: 2, },
        { level: 4, spells: 0, },
        { level: 5, spells: 0, },
        { level: 6, spells: 0, },
        { level: 7, spells: 0, },
        { level: 8, spells: 0, },
        { level: 9, spells: 0, }]
      },
      {
        level: "7th",
        baseAttackBonus: "+5",
        fortSave: "+5",
        reflexSave: "+2",
        willSave: "+5",
        specials: [""],
        spellsPerDay: [ { level: 1, spells: 4, },
        { level: 2, spells: 3, },
        { level: 3, spells: 2, },
        { level: 4, spells: 1, },
        { level: 5, spells: 0, },
        { level: 6, spells: 0, },
        { level: 7, spells: 0, },
        { level: 8, spells: 0, },
        { level: 9, spells: 0, }]
      },
      {
        level: "8th",
        baseAttackBonus: "+6/+1",
        fortSave: "+6",
        reflexSave: "+2",
        willSave: "+6",
        specials: ["Wild shape (3/day)"],
        spellsPerDay: [ { level: 1, spells: 4, },
        { level: 2, spells: 3, },
        { level: 3, spells: 3, },
        { level: 4, spells: 2, },
        { level: 5, spells: 0, },
        { level: 6, spells: 0, },
        { level: 7, spells: 0, },
        { level: 8, spells: 0, },
        { level: 9, spells: 0, }]
      },
      {
        level: "9th",
        baseAttackBonus: "+6/+1",
        fortSave: "+6",
        reflexSave: "+3",
        willSave: "+6",
        specials: ["Venom immunity"],
        spellsPerDay: [ { level: 1, spells: 4, },
        { level: 2, spells: 4, },
        { level: 3, spells: 3, },
        { level: 4, spells: 2, },
        { level: 5, spells: 1, },
        { level: 6, spells: 0, },
        { level: 7, spells: 0, },
        { level: 8, spells: 0, },
        { level: 9, spells: 0, }]
      },
      {
        level: "10th",
        baseAttackBonus: "+7/+2",
        fortSave: "+7",
        reflexSave: "+3",
        willSave: "+7",
        specials: ["Wild shape (4/day)"],
        spellsPerDay: [ { level: 1, spells: 4, },
        { level: 2, spells: 4, },
        { level: 3, spells: 3, },
        { level: 4, spells: 3, },
        { level: 5, spells: 2, },
        { level: 6, spells: 0, },
        { level: 7, spells: 0, },
        { level: 8, spells: 0, },
        { level: 9, spells: 0, }]
      },
      {
        level: "11th",
        baseAttackBonus: "+8/+3",
        fortSave: "+7",
        reflexSave: "+3",
        willSave: "+7",
        specials: [""],
        spellsPerDay: [ { level: 1, spells: 4, },
        { level: 2, spells: 4, },
        { level: 3, spells: 4, },
        { level: 4, spells: 3, },
        { level: 5, spells: 2, },
        { level: 6, spells: 1, },
        { level: 7, spells: 0, },
        { level: 8, spells: 0, },
        { level: 9, spells: 0, }]
      },
      {
        level: "12th",
        baseAttackBonus: "+9/+4",
        fortSave: "+8",
        reflexSave: "+4",
        willSave: "+8",
        specials: ["Wild shape (5/day)"],
        spellsPerDay: [ { level: 1, spells: 4, },
        { level: 2, spells: 4, },
        { level: 3, spells: 4, },
        { level: 4, spells: 3, },
        { level: 5, spells: 3, },
        { level: 6, spells: 2, },
        { level: 7, spells: 0, },
        { level: 8, spells: 0, },
        { level: 9, spells: 0, }]
      },
      {
        level: "13th",
        baseAttackBonus: "+9/+4",
        fortSave: "+8",
        reflexSave: "+4",
        willSave: "+8",
        specials: ["A thousand faces"],
        spellsPerDay: [ { level: 1, spells: 4, },
        { level: 2, spells: 4, },
        { level: 3, spells: 4, },
        { level: 4, spells: 4, },
        { level: 5, spells: 3, },
        { level: 6, spells: 2, },
        { level: 7, spells: 1, },
        { level: 8, spells: 0, },
        { level: 9, spells: 0, }]
      },
      {
        level: "14th",
        baseAttackBonus: "+10/+5",
        fortSave: "+9",
        reflexSave: "+4",
        willSave: "+9",
        specials: ["Wild shape (6/day)"],
        spellsPerDay: [ { level: 1, spells: 4, },
        { level: 2, spells: 4, },
        { level: 3, spells: 4, },
        { level: 4, spells: 4, },
        { level: 5, spells: 3, },
        { level: 6, spells: 3, },
        { level: 7, spells: 2, },
        { level: 8, spells: 0, },
        { level: 9, spells: 0, }]
      },
      {
        level: "15th",
        baseAttackBonus: "+11/+6/+1",
        fortSave: "+9",
        reflexSave: "+5",
        willSave: "+9",
        specials: ["Timeless body"],
        spellsPerDay: [ { level: 1, spells: 4, },
        { level: 2, spells: 4, },
        { level: 3, spells: 4, },
        { level: 4, spells: 4, },
        { level: 5, spells: 4, },
        { level: 6, spells: 3, },
        { level: 7, spells: 2, },
        { level: 8, spells: 1, },
        { level: 9, spells: 0, }]
      },
      {
        level: "16th",
        baseAttackBonus: "+12/+7/+2",
        fortSave: "+10",
        reflexSave: "+5",
        willSave: "+10",
        specials: ["Wild shape (7/day)"],
        spellsPerDay: [ { level: 1, spells: 4, },
        { level: 2, spells: 4, },
        { level: 3, spells: 4, },
        { level: 4, spells: 4, },
        { level: 5, spells: 4, },
        { level: 6, spells: 3, },
        { level: 7, spells: 3, },
        { level: 8, spells: 2, },
        { level: 9, spells: 0, }]
      },
      {
        level: "17th",
        baseAttackBonus: "+12/+7/+2",
        fortSave: "+10",
        reflexSave: "+5",
        willSave: "+10",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: 4, },
          { level: 3, spells: 4, },
          { level: 4, spells: 4, },
          { level: 5, spells: 4, },
          { level: 6, spells: 4, },
          { level: 7, spells: 3, },
          { level: 8, spells: 2, },
          { level: 9, spells: 1, }
        ]
      },
      {
        level: "18th",
        baseAttackBonus: "+13/+8/+3",
        fortSave: "+11",
        reflexSave: "+6",
        willSave: "+11",
        specials: ["Wild shape (8/day)"],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: 4, },
          { level: 3, spells: 4, },
          { level: 4, spells: 4, },
          { level: 5, spells: 4, },
          { level: 6, spells: 4, },
          { level: 7, spells: 3, },
          { level: 8, spells: 3, },
          { level: 9, spells: 2, }
        ]
      },
      {
        level: "19th",
        baseAttackBonus: "+14/+9/+4",
        fortSave: "+11",
        reflexSave: "+6",
        willSave: "+11",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: 4, },
          { level: 3, spells: 4, },
          { level: 4, spells: 4, },
          { level: 5, spells: 4, },
          { level: 6, spells: 4, },
          { level: 7, spells: 4, },
          { level: 8, spells: 3, },
          { level: 9, spells: 3, }
        ]
      },
      {
        level: "20th",
        baseAttackBonus: "+15/+10/+5",
        fortSave: "+12",
        reflexSave: "+6",
        willSave: "+12",
        specials: ["Wild shape (at will)"],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: 4, },
          { level: 3, spells: 4, },
          { level: 4, spells: 4, },
          { level: 5, spells: 4, },
          { level: 6, spells: 4, },
          { level: 7, spells: 4, },
          { level: 8, spells: 4, },
          { level: 9, spells: 4, }
        ]
      },
    ],
    fighter: [
      {
        level: "1st",
        baseAttackBonus: "+1",
        fortSave: "+2",
        reflexSave: "+0",
        willSave: "+0",
        specials: ["Bonus feat"]
      },
      {
        level: "2nd",
        baseAttackBonus: "+2",
        fortSave: "+3",
        reflexSave: "+0",
        willSave: "+0",
        specials: ["Bonus feat, bravery +1"]
      },
      {
        level: "3rd",
        baseAttackBonus: "+3",
        fortSave: "+3",
        reflexSave: "+1",
        willSave: "+1",
        specials: ["Armor training 1"]
      },
      {
        level: "4th",
        baseAttackBonus: "+4",
        fortSave: "+4",
        reflexSave: "+1",
        willSave: "+1",
        specials: ["Bonus feat"]
      },
      {
        level: "5th",
        baseAttackBonus: "+5",
        fortSave: "+4",
        reflexSave: "+1",
        willSave: "+1",
        specials: ["Weapon training 1"]
      },
      {
        level: "6th",
        baseAttackBonus: "+6/+1",
        fortSave: "+5",
        reflexSave: "+2",
        willSave: "+2",
        specials: ["Bonus feat, bravery +2"]
      },
      {
        level: "7th",
        baseAttackBonus: "+7/+2",
        fortSave: "+5",
        reflexSave: "+2",
        willSave: "+2",
        specials: ["Armor training 2"]
      },
      {
        level: "8th",
        baseAttackBonus: "+8/+3",
        fortSave: "+6",
        reflexSave: "+2",
        willSave: "+2",
        specials: ["Bonus feat"]
      },
      {
        level: "9th",
        baseAttackBonus: "+9/+4",
        fortSave: "+6",
        reflexSave: "+3",
        willSave: "+3",
        specials: ["Weapon training 2"]
      },
      {
        level: "10th",
        baseAttackBonus: "+10/+5",
        fortSave: "+7",
        reflexSave: "+3",
        willSave: "+3",
        specials: ["Bonus feat, bravery +3"]
      },
      {
        level: "11th",
        baseAttackBonus: "+11/+6/+1",
        fortSave: "+7",
        reflexSave: "+3",
        willSave: "+3",
        specials: ["Armor training 3"]
      },
      {
        level: "12th",
        baseAttackBonus: "+12/+7/+2",
        fortSave: "+8",
        reflexSave: "+4",
        willSave: "+4",
        specials: ["Bonus feat"]
      },
      {
        level: "13th",
        baseAttackBonus: "+13/+8/+3",
        fortSave: "+8",
        reflexSave: "+4",
        willSave: "+4",
        specials: ["Weapon training 3"]
      },
      {
        level: "14th",
        baseAttackBonus: "+14/+9/+4",
        fortSave: "+9",
        reflexSave: "+4",
        willSave: "+4",
        specials: ["Bonus feat, bravery +4"]
      },
      {
        level: "15th",
        baseAttackBonus: "+15/+10/+5",
        fortSave: "+9",
        reflexSave: "+5",
        willSave: "+5",
        specials: ["Armor training 4"]
      },
      {
        level: "16th",
        baseAttackBonus: "+16/+11/+6/+1",
        fortSave: "+10",
        reflexSave: "+5",
        willSave: "+5",
        specials: ["Bonus feat"]
      },
      {
        level: "17th",
        baseAttackBonus: "+17/+12/+7/+2",
        fortSave: "+10",
        reflexSave: "+5",
        willSave: "+5",
        specials: ["Weapon training 4"]
      },
      {
        level: "18th",
        baseAttackBonus: "+18/+13/+8/+3",
        fortSave: "+11",
        reflexSave: "+6",
        willSave: "+6",
        specials: ["Bonus feat, bravery +5"]
      },
      {
        level: "19th",
        baseAttackBonus: "+19/+14/+9/+4",
        fortSave: "+11",
        reflexSave: "+6",
        willSave: "+6",
        specials: ["Armor mastery"]
      },
      {
        level: "20th",
        baseAttackBonus: "+20/+15/+10/+5",
        fortSave: "+12",
        reflexSave: "+6",
        willSave: "+6",
        specials: ["Bonus feat, weapon mastery"]
      }
    ],
    monk: [
      {
        level: "1st",
        baseAttackBonus: "+0",
        fortSave: "+2",
        reflexSave: "+2",
        willSave: "+2",
        specials: ["Bonus feat, flurry of blows, stunning fist, unarmed strike"],
        flurryOfBlowsAttackBonus: "-1/-1",
        unarmedDamage: "1d6",
        armorClassBonus: "+0",
        fastMovement: "+0 ft."
      },
      {
        level: "2nd",
        baseAttackBonus: "+1",
        fortSave: "+3",
        reflexSave: "+3",
        willSave: "+3",
        specials: ["Bonus feat, evasion"],
        flurryOfBlowsAttackBonus: "+0/+0",
        unarmedDamage: "1d6",
        armorClassBonus: "+0",
        fastMovement: "+0 ft."
      },
      {
        level: "3rd",
        baseAttackBonus: "+2",
        fortSave: "+3",
        reflexSave: "+3",
        willSave: "+3",
        specials: ["Fast movement, maneuver training, still mind"],
        flurryOfBlowsAttackBonus: "+1/+1",
        unarmedDamage: "1d6",
        armorClassBonus: "+0",
        fastMovement: "+10 ft."
      },
      {
        level: "4th",
        baseAttackBonus: "+3",
        fortSave: "+4",
        reflexSave: "+4",
        willSave: "+4",
        specials: ["Ki pool (magic), slow fall 20 ft."],
        flurryOfBlowsAttackBonus: "+2/+2",
        unarmedDamage: "1d8",
        armorClassBonus: "+1",
        fastMovement: "+10 ft."
      },
      {
        level: "5th",
        baseAttackBonus: "+3",
        fortSave: "+4",
        reflexSave: "+4",
        willSave: "+4",
        specials: ["High jump, purity of body"],
        flurryOfBlowsAttackBonus: "+3/+3",
        unarmedDamage: "1d8",
        armorClassBonus: "+1",
        fastMovement: "+10 ft."
      },
      {
        level: "6th",
        baseAttackBonus: "+4",
        fortSave: "+5",
        reflexSave: "+5",
        willSave: "+5",
        specials: ["Bonus feat, slow fall 30 ft."],
        flurryOfBlowsAttackBonus: "+4/+4/-1",
        unarmedDamage: "1d8",
        armorClassBonus: "+1",
        fastMovement: "+20 ft."
      },
      {
        level: "7th",
        baseAttackBonus: "+5",
        fortSave: "+5",
        reflexSave: "+5",
        willSave: "+5",
        specials: ["Ki pool (cold iron/silver), wholeness of body"],
        flurryOfBlowsAttackBonus: "+5/+5/+0",
        unarmedDamage: "1d8",
        armorClassBonus: "+1",
        fastMovement: "+20 ft."
      },
      {
        level: "8th",
        baseAttackBonus: "+6/+1",
        fortSave: "+6",
        reflexSave: "+6",
        willSave: "+6",
        specials: ["Slow fall 40 ft."],
        flurryOfBlowsAttackBonus: "+6/+6/+1/+1",
        unarmedDamage: "1d10",
        armorClassBonus: "+2",
        fastMovement: "+20 ft."
      },
      {
        level: "9th",
        baseAttackBonus: "+6/+1",
        fortSave: "+6",
        reflexSave: "+6",
        willSave: "+6",
        specials: ["Improved evasion"],
        flurryOfBlowsAttackBonus: "+7/+7/+2/+2",
        unarmedDamage: "1d10",
        armorClassBonus: "+2",
        fastMovement: "+30 ft."
      },
      {
        level: "10th",
        baseAttackBonus: "+7/+2",
        fortSave: "+7",
        reflexSave: "+7",
        willSave: "+7",
        specials: ["Bonus feat, Ki pool (lawful), slow fall 50 ft."],
        flurryOfBlowsAttackBonus: "+8/+8/+3/+3",
        unarmedDamage: "1d10",
        armorClassBonus: "+2",
        fastMovement: "+30 ft."
      },
      {
        level: "11th",
        baseAttackBonus: "+8/+3",
        fortSave: "+7",
        reflexSave: "+7",
        willSave: "+7",
        specials: ["Diamond body"],
        flurryOfBlowsAttackBonus: "+9/+9/+4/+4/-1",
        unarmedDamage: "1d10",
        armorClassBonus: "+2",
        fastMovement: "+30 ft."
      },
      {
        level: "12th",
        baseAttackBonus: "+9/+4",
        fortSave: "+8",
        reflexSave: "+8",
        willSave: "+8",
        specials: ["Abundant step, slow fall 60 ft."],
        flurryOfBlowsAttackBonus: "+10/+10/+5/+5/+0",
        unarmedDamage: "2d6",
        armorClassBonus: "+3",
        fastMovement: "+40 ft."
      },
      {
        level: "13th",
        baseAttackBonus: "+9/+4",
        fortSave: "+8",
        reflexSave: "+8",
        willSave: "+8",
        specials: ["Diamond soul"],
        flurryOfBlowsAttackBonus: "+11/+11/+6/+6/+1",
        unarmedDamage: "2d6",
        armorClassBonus: "+3",
        fastMovement: "+40 ft."
      },
      {
        level: "14th",
        baseAttackBonus: "+10/+5",
        fortSave: "+9",
        reflexSave: "+9",
        willSave: "+9",
        specials: ["Bonus feat, slow fall 70 ft."],
        flurryOfBlowsAttackBonus: "+12/+12/+7/+7/+2",
        unarmedDamage: "2d6",
        armorClassBonus: "+3",
        fastMovement: "+40 ft."
      },
      {
        level: "15th",
        baseAttackBonus: "+11/+6/+1",
        fortSave: "+9",
        reflexSave: "+9",
        willSave: "+9",
        specials: ["Quivering palm"],
        flurryOfBlowsAttackBonus: "+13/+13/+8/+8/+3/+3",
        unarmedDamage: "2d6",
        armorClassBonus: "+3",
        fastMovement: "+50 ft."
      },
      {
        level: "16th",
        baseAttackBonus: "+12/+7/+2",
        fortSave: "+10",
        reflexSave: "+10",
        willSave: "+10",
        specials: ["Ki pool (adamantine), slow fall 80 ft."],
        flurryOfBlowsAttackBonus: "+14/+14/+9/+9/+4/+4/-1",
        unarmedDamage: "2d8",
        armorClassBonus: "+4",
        fastMovement: "+50 ft."
      },
      {
        level: "17th",
        baseAttackBonus: "+12/+7/+2",
        fortSave: "+10",
        reflexSave: "+10",
        willSave: "+10",
        specials: ["Timeless body, tongue of the sun and moon"],
        flurryOfBlowsAttackBonus: "+15/+15/+10/+10/+5/+5/+0",
        unarmedDamage: "2d8",
        armorClassBonus: "+4",
        fastMovement: "+50 ft."
      },
      {
        level: "18th",
        baseAttackBonus: "+13/+8/+3",
        fortSave: "+11",
        reflexSave: "+11",
        willSave: "+11",
        specials: ["Bonus feat, slow fall 90 ft."],
        flurryOfBlowsAttackBonus: "+16/+16/+11/+11/+6/+6/+1",
        unarmedDamage: "2d8",
        armorClassBonus: "+4",
        fastMovement: "+60 ft."
      },
      {
        level: "19th",
        baseAttackBonus: "+14/+9/+4",
        fortSave: "+11",
        reflexSave: "+11",
        willSave: "+11",
        specials: ["Empty body"],
        flurryOfBlowsAttackBonus: "+17/+17/+12/+12/+7/+7/+2",
        unarmedDamage: "2d8",
        armorClassBonus: "+4",
        fastMovement: "+60 ft."
      },
      {
        level: "20th",
        baseAttackBonus: "+15/+10/+5",
        fortSave: "+12",
        reflexSave: "+12",
        willSave: "+12",
        specials: ["Perfect self, slow fall any distance"],
        flurryOfBlowsAttackBonus: "+18/+18/+13/+13/+8/+8/+3",
        unarmedDamage: "2d10",
        armorClassBonus: "+5",
        fastMovement: "+60 ft."
      }
    ],
    paladin: [
      {
        level: "1st",
        baseAttackBonus: "+1",
        fortSave: "+2",
        reflexSave: "+0",
        willSave: "+2",
        specials: ["Aura of good, detect evil, smite evil 1/day"],
        spellsPerDay: [
          { level: 1, spells: 0, },
          { level: 2, spells: 0, },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, }
        ]
      },
      {
        level: "2nd",
        baseAttackBonus: "+2",
        fortSave: "+3",
        reflexSave: "+0",
        willSave: "+3",
        specials: ["Divine grace, lay on hands"],
        spellsPerDay: [
          { level: 1, spells: 0, },
          { level: 2, spells: 0, },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, }
        ]
      },
      {
        level: "3rd",
        baseAttackBonus: "+3",
        fortSave: "+3",
        reflexSave: "+1",
        willSave: "+3",
        specials: ["aura-of-couAura of courage, divine health, mercy"],
        spellsPerDay: [
          { level: 1, spells: 0, },
          { level: 2, spells: 0, },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, }
        ]
      },
      {
        level: "4th",
        baseAttackBonus: "+4",
        fortSave: "+4",
        reflexSave: "+1",
        willSave: "+4",
        specials: ["Channel positive energy, smite evil 2/day"],
        spellsPerDay: [
          { level: 1, spells: 0, },
          { level: 2, spells: 0, },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, }
        ]
      },
      {
        level: "5th",
        baseAttackBonus: "+5",
        fortSave: "+4",
        reflexSave: "+1",
        willSave: "+4",
        specials: ["Divine bond"],
        spellsPerDay: [
          { level: 1, spells: 1, },
          { level: 2, spells: 0, },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, }
        ]
      },
      {
        level: "6th",
        baseAttackBonus: "+6/+1",
        fortSave: "+5",
        reflexSave: "+2",
        willSave: "+5",
        specials: ["Mercy"],
        spellsPerDay: [
          { level: 1, spells: 1, },
          { level: 2, spells: 0, },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, }
        ]
      },
      {
        level: "7th",
        baseAttackBonus: "+7/+2",
        fortSave: "+5",
        reflexSave: "+2",
        willSave: "+5",
        specials: ["Smite evil 3/day"],
        spellsPerDay: [
          { level: 1, spells: 1, },
          { level: 2, spells: 0, },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, }
        ]
      },
      {
        level: "8th",
        baseAttackBonus: "+8/+3",
        fortSave: "+6",
        reflexSave: "+2",
        willSave: "+6",
        specials: ["Aura of resolve"],
        spellsPerDay: [
          { level: 1, spells: 1, },
          { level: 2, spells: 1, },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, }
        ]
      },
      {
        level: "9th",
        baseAttackBonus: "+9/+4",
        fortSave: "+6",
        reflexSave: "+3",
        willSave: "+6",
        specials: ["Mercy"],
        spellsPerDay: [
          { level: 1, spells: 2, },
          { level: 2, spells: 1, },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, }
        ]
      },
      {
        level: "10th",
        baseAttackBonus: "+10/+5",
        fortSave: "+7",
        reflexSave: "+3",
        willSave: "+7",
        specials: ["Smite evil 4/day"],
        spellsPerDay: [
          { level: 1, spells: 2, },
          { level: 2, spells: 1, },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, }
        ]
      },
      {
        level: "11th",
        baseAttackBonus: "+11/+6/+1",
        fortSave: "+7",
        reflexSave: "+3",
        willSave: "+7",
        specials: ["Aura of justice"],
        spellsPerDay: [
          { level: 1, spells: 2, },
          { level: 2, spells: 1, },
          { level: 3, spells: 1, },
          { level: 4, spells: 0, }
        ]
      },
      {
        level: "12th",
        baseAttackBonus: "+12/+7/+2",
        fortSave: "+8",
        reflexSave: "+4",
        willSave: "+8",
        specials: ["Mercy"],
        spellsPerDay: [
          { level: 1, spells: 2, },
          { level: 2, spells: 2, },
          { level: 3, spells: 1, },
          { level: 4, spells: 0, }
        ]
      },
      {
        level: "13th",
        baseAttackBonus: "+13/+8/+3",
        fortSave: "+8",
        reflexSave: "+4",
        willSave: "+8",
        specials: ["Smite evil 5/day"],
        spellsPerDay: [
          { level: 1, spells: 3, },
          { level: 2, spells: 2, },
          { level: 3, spells: 1, },
          { level: 4, spells: 0, }
        ]
      },
      {
        level: "14th",
        baseAttackBonus: "+14/+9/+4",
        fortSave: "+9",
        reflexSave: "+4",
        willSave: "+9",
        specials: ["aura-of-faith-21\">Aura of faith"],
        spellsPerDay: [
          { level: 1, spells: 3, },
          { level: 2, spells: 2, },
          { level: 3, spells: 1, },
          { level: 4, spells: 1, }
        ]
      },
      {
        level: "15th",
        baseAttackBonus: "+15/+10/+5",
        fortSave: "+9",
        reflexSave: "+5",
        willSave: "+9",
        specials: ["Mercy"],
        spellsPerDay: [
          { level: 1, spells: 3, },
          { level: 2, spells: 2, },
          { level: 3, spells: 2, },
          { level: 4, spells: 1, }
        ]
      },
      {
        level: "16th",
        baseAttackBonus: "+16/+11/+6/+1",
        fortSave: "+10",
        reflexSave: "+5",
        willSave: "+10",
        specials: ["Smite evil 6/day"],
        spellsPerDay: [
          { level: 1, spells: 3, },
          { level: 2, spells: 3, },
          { level: 3, spells: 2, },
          { level: 4, spells: 1, }
        ]
      },
      {
        level: "17th",
        baseAttackBonus: "+17/+12/+7/+2",
        fortSave: "+10",
        reflexSave: "+5",
        willSave: "+10",
        specials: ["Aura of righteousness"],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: 3, },
          { level: 3, spells: 2, },
          { level: 4, spells: 1, }
        ]
      },
      {
        level: "18th",
        baseAttackBonus: "+18/+13/+8/+3",
        fortSave: "+11",
        reflexSave: "+6",
        willSave: "+11",
        specials: ["Mercy"],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: 3, },
          { level: 3, spells: 2, },
          { level: 4, spells: 2, }
        ]
      },
      {
        level: "19th",
        baseAttackBonus: "+19/+14/+9/+4",
        fortSave: "+11",
        reflexSave: "+6",
        willSave: "+11",
        specials: ["Smite evil 7/day"],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: 3, },
          { level: 3, spells: 3, },
          { level: 4, spells: 2, }
        ]
      },
      {
        level: "20th",
        baseAttackBonus: "+20/+15/+10/+5",
        fortSave: "+12",
        reflexSave: "+6",
        willSave: "+12",
        specials: ["Holy champion"],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: 4, },
          { level: 3, spells: 3, },
          { level: 4, spells: 3, },
        ]
      }
    ],
    ranger: [
      {
        level: 1,
        baseAttackBonus: '+1',
        fortSave: 2,
        reflexSave: 2,
        willSave: 0,
        specials: [ "1st Favored Enemy", "Track", "Wild Empathy" ],
        spellsPerDay: [
          { level: 2, spells: 0, },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
        ],
      },
      {
        level: 2,
        baseAttackBonus: '+2',
        fortSave: 3,
        reflexSave: 3,
        willSave: 0,
        specials: [ "Combat style feat", ],
        spellsPerDay: [
          { level: 2, spells: 0, },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
        ],
      },
      {
        level: 3,
        baseAttackBonus: '+3',
        fortSave: 3,
        reflexSave: 3,
        willSave: 1,
        specials: [ "Endurance", "1st favored terrain", ],
        spellsPerDay: [
          { level: 2, spells: 0, },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
        ],
      },
      {
        level: 4,
        baseAttackBonus: '+4',
        fortSave: 4,
        reflexSave: 4,
        willSave: 1,
        specials: [ "Hunter's bond", ],
        spellsPerDay: [
          { level: 2, spells: 0, },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
        ],
      },
      {
        level: 5,
        baseAttackBonus: '+5',
        fortSave: 4,
        reflexSave: 4,
        willSave: 1,
        specials: [ "2nd favored enemy", ],
        spellsPerDay: [
          { level: 2, spells: 1, },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
        ],
      },
      {
        level: 6,
        baseAttackBonus: '+6/+1',
        fortSave: 5,
        reflexSave: 5,
        willSave: 2,
        specials: [ "Combat style feat", ],
        spellsPerDay: [
          { level: 2, spells: 1, },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
        ],
      },
      {
        level: 7,
        baseAttackBonus: '+7/+2',
        fortSave: 5,
        reflexSave: 5,
        willSave: 2,
        specials: [ "Woodland Stride", ],
        spellsPerDay: [
          { level: 2, spells: 1, },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
        ],
      },
      {
        level: 8,
        baseAttackBonus: '+8/+3',
        fortSave: 6,
        reflexSave: 6,
        willSave: 2,
        specials: [ "Swift tracker", "2nd favored terrain"],
        spellsPerDay: [
          { level: 2, spells: 1, },
          { level: 3, spells: 1, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
        ],
      },
      {
        level: 9,
        baseAttackBonus: '+9/+4',
        fortSave: 6,
        reflexSave: 6,
        willSave: 3,
        specials: [ "Evasion"],
        spellsPerDay: [
          { level: 2, spells: 2, },
          { level: 3, spells: 1, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
        ],
      },
      {
        level: 10,
        baseAttackBonus: '+10/+5',
        fortSave: 7,
        reflexSave: 7,
        willSave: 3,
        specials: [ "3rd favored enemy", "Combat style feat"],
        spellsPerDay: [
          { level: 2, spells: 2, },
          { level: 3, spells: 1, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
        ],
      },
      {
        level: 11,
        baseAttackBonus: '+11/+6/+1',
        fortSave: 7,
        reflexSave: 7,
        willSave: 3,
        specials: [ "Quarry"],
        spellsPerDay: [
          { level: 2, spells: 2, },
          { level: 3, spells: 1, },
          { level: 4, spells: 2, },
          { level: 5, spells: 0, },
        ],
      },
      {
        level: 12,
        baseAttackBonus: '+12/+7/+2',
        fortSave: 8,
        reflexSave: 8,
        willSave: 4,
        specials: [ "Camoflage"],
        spellsPerDay: [
          { level: 2, spells: 2, },
          { level: 3, spells: 2, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
        ],
      },
      {
        level: 13,
        baseAttackBonus: '+13/+8/+3',
        fortSave: 8,
        reflexSave: 8,
        willSave: 4,
        specials: [ "3rd favored terrain",],
        spellsPerDay: [
          { level: 2, spells: 3, },
          { level: 3, spells: 2, },
          { level: 4, spells: 1, },
          { level: 5, spells: 0, },
        ],
      },
      {
        level: 14,
        baseAttackBonus: '+14/+9/+4',
        fortSave: 9,
        reflexSave: 9,
        willSave: 4,
        specials: [ "Combat style feat"],
        spellsPerDay: [
          { level: 2, spells: 2, },
          { level: 3, spells: 1, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
        ],
      },
      {
        level: 15,
        baseAttackBonus: '+15/+10/+5',
        fortSave: 9,
        reflexSave: 9,
        willSave: 5,
        specials: [ "4th favored enemy",],
        spellsPerDay: [
          { level: 2, spells: 2, },
          { level: 3, spells: 1, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
        ],
      },
      {
        level: 16,
        baseAttackBonus: '+16/+11/+6/+1',
        fortSave: 10,
        reflexSave: 10,
        willSave: 5,
        specials: [ "Improved evasion",],
        spellsPerDay: [
          { level: 2, spells: 2, },
          { level: 3, spells: 1, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
        ],
      },
      {
        level: 17,
        baseAttackBonus: '+17/+12/+7/+2',
        fortSave: 10,
        reflexSave: 10,
        willSave: 5,
        specials: [ "Hide in plain sight"],
        spellsPerDay: [
          { level: 2, spells: 4, },
          { level: 3, spells: 3, },
          { level: 4, spells: 2, },
          { level: 5, spells: 1, },
        ],
      },
      {
        level: 18,
        baseAttackBonus: '+18/+13/+8/+3',
        fortSave: 11,
        reflexSave: 11,
        willSave: 6,
        specials: [ "4th favored terrain", "Combat style feat"],
        spellsPerDay: [
          { level: 2, spells: 4, },
          { level: 3, spells: 3, },
          { level: 4, spells: 2, },
          { level: 5, spells: 2, },
        ],
      },
      {
        level: 19,
        baseAttackBonus: '+19/+14/+9/+4',
        fortSave: 11,
        reflexSave: 11,
        willSave: 6,
        specials: [ "Improved quarry"],
        spellsPerDay: [
          { level: 2, spells: 4, },
          { level: 3, spells: 3, },
          { level: 4, spells: 3, },
          { level: 5, spells: 2, },
        ],
      },
      {
        level: 20,
        baseAttackBonus: '+20/+15/+10/+5',
        fortSave: 12,
        reflexSave: 12,
        willSave: 6,
        specials: [ "5th favored enemy", "master hunter"],
        spellsPerDay: [
          { level: 2, spells: 4, },
          { level: 3, spells: 4, },
          { level: 4, spells: 3, },
          { level: 5, spells: 3, },
        ],
      },
    ],
    rogue: [
      {
        level: "1st",
        baseAttackBonus: "+0",
        fortSave: "+0",
        reflexSave: "+2",
        willSave: "+0",
        specials: ["Sneak attack +1d6, trapfinding"]
      },
      {
        level: "2nd",
        baseAttackBonus: "+1",
        fortSave: "+0",
        reflexSave: "+3",
        willSave: "+0",
        specials: ["Evasion, rogue talent"]
      },
      {
        level: "3rd",
        baseAttackBonus: "+2",
        fortSave: "+1",
        reflexSave: "+3",
        willSave: "+1",
        specials: ["Sneak attack +2d6, trap sense +1"]
      },
      {
        level: "4th",
        baseAttackBonus: "+3",
        fortSave: "+1",
        reflexSave: "+4",
        willSave: "+1",
        specials: ["Rogue talent, uncanny dodge"]
      },
      {
        level: "5th",
        baseAttackBonus: "+3",
        fortSave: "+1",
        reflexSave: "+4",
        willSave: "+1",
        specials: ["Sneak attack +3d6"]
      },
      {
        level: "6th",
        baseAttackBonus: "+4",
        fortSave: "+2",
        reflexSave: "+5",
        willSave: "+2",
        specials: ["Rogue talent, trap sense +2"]
      },
      {
        level: "7th",
        baseAttackBonus: "+5",
        fortSave: "+2",
        reflexSave: "+5",
        willSave: "+2",
        specials: ["Sneak attack +4d6"]
      },
      {
        level: "8th",
        baseAttackBonus: "+6/+1",
        fortSave: "+2",
        reflexSave: "+6",
        willSave: "+2",
        specials: ["Improved uncanny dodge, rogue talent"]
      },
      {
        level: "9th",
        baseAttackBonus: "+6/+1",
        fortSave: "+3",
        reflexSave: "+6",
        willSave: "+3",
        specials: ["Sneak attack +5d6, trap sense +3"]
      },
      {
        level: "10th",
        baseAttackBonus: "+7/+2",
        fortSave: "+3",
        reflexSave: "+7",
        willSave: "+3",
        specials: ["Advanced talents, rogue talent"]
      },
      {
        level: "11th",
        baseAttackBonus: "+8/+3",
        fortSave: "+3",
        reflexSave: "+7",
        willSave: "+3",
        specials: ["Sneak attack +6d6"]
      },
      {
        level: "12th",
        baseAttackBonus: "+9/+4",
        fortSave: "+4",
        reflexSave: "+8",
        willSave: "+4",
        specials: ["Rogue talent, trap sense +4"]
      },
      {
        level: "13th",
        baseAttackBonus: "+9/+4",
        fortSave: "+4",
        reflexSave: "+8",
        willSave: "+4",
        specials: ["Sneak attack +7d6"]
      },
      {
        level: "14th",
        baseAttackBonus: "+10/+5",
        fortSave: "+4",
        reflexSave: "+9",
        willSave: "+4",
        specials: ["Rogue talent"]
      },
      {
        level: "15th",
        baseAttackBonus: "+11/+6/+1",
        fortSave: "+5",
        reflexSave: "+9",
        willSave: "+5",
        specials: ["Sneak attack +8d6, trap sense +5"]
      },
      {
        level: "16th",
        baseAttackBonus: "+12/+7/+2",
        fortSave: "+5",
        reflexSave: "+10",
        willSave: "+5",
        specials: ["Rogue talent"]
      },
      {
        level: "17th",
        baseAttackBonus: "+12/+7/+2",
        fortSave: "+5",
        reflexSave: "+10",
        willSave: "+5",
        specials: ["Sneak attack +9d6"]
      },
      {
        level: "18th",
        baseAttackBonus: "+13/+8/+3",
        fortSave: "+6",
        reflexSave: "+11",
        willSave: "+6",
        specials: ["Rogue talent, trap sense +6"]
      },
      {
        level: "19th",
        baseAttackBonus: "+14/+9/+4",
        fortSave: "+6",
        reflexSave: "+11",
        willSave: "+6",
        specials: ["Sneak attack +10d6"]
      },
      {
        level: "20th",
        baseAttackBonus: "+15/+10/+5",
        fortSave: "+6",
        reflexSave: "+12",
        willSave: "+6",
        specials: ["Master strike, rogue talent"]
      }
    ],
    sorcerer: [
      {
        level: "1st",
        baseAttackBonus: "+0",
        fortSave: "+0",
        reflexSave: "+0",
        willSave: "+2",
        specials: ["Bloodline power, cantrips, eschew materials"],
        spellsPerDay: [
          { level: 1, spells: 3, },
          { level: 2, spells: 0, },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
          { level: 6, spells: 0, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "2nd",
        baseAttackBonus: "+1",
        fortSave: "+0",
        reflexSave: "+0",
        willSave: "+3",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: 0, },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
          { level: 6, spells: 0, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "3rd",
        baseAttackBonus: "+1",
        fortSave: "+1",
        reflexSave: "+1",
        willSave: "+3",
        specials: ["Bloodline power, bloodline spell"],
        spellsPerDay: [
          { level: 1, spells: 5, },
          { level: 2, spells: 0, },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
          { level: 6, spells: 0, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "4th",
        baseAttackBonus: "+2",
        fortSave: "+1",
        reflexSave: "+1",
        willSave: "+4",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 6, },
          { level: 2, spells: 3, },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
          { level: 6, spells: 0, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "5th",
        baseAttackBonus: "+2",
        fortSave: "+1",
        reflexSave: "+1",
        willSave: "+4",
        specials: ["Bloodline spell"],
        spellsPerDay: [
          { level: 1, spells: 6, },
          { level: 2, spells: 4, },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
          { level: 6, spells: 0, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "6th",
        baseAttackBonus: "+3",
        fortSave: "+2",
        reflexSave: "+2",
        willSave: "+5",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 6, },
          { level: 2, spells: 5, },
          { level: 3, spells: 3, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
          { level: 6, spells: 0, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "7th",
        baseAttackBonus: "+3",
        fortSave: "+2",
        reflexSave: "+2",
        willSave: "+5",
        specials: ["Bloodline feat, bloodline spell"],
        spellsPerDay: [
          { level: 1, spells: 6, },
          { level: 2, spells: 6, },
          { level: 3, spells: 4, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
          { level: 6, spells: 0, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "8th",
        baseAttackBonus: "+4",
        fortSave: "+2",
        reflexSave: "+2",
        willSave: "+6",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 6, },
          { level: 2, spells: 6, },
          { level: 3, spells: 5, },
          { level: 4, spells: 3, },
          { level: 5, spells: 0, },
          { level: 6, spells: 0, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "9th",
        baseAttackBonus: "+4",
        fortSave: "+3",
        reflexSave: "+3",
        willSave: "+6",
        specials: ["Bloodline power, bloodline spell"],
        spellsPerDay: [
          { level: 1, spells: 6, },
          { level: 2, spells: 6, },
          { level: 3, spells: 6, },
          { level: 4, spells: 4, },
          { level: 5, spells: 0, },
          { level: 6, spells: 0, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "10th",
        baseAttackBonus: "+5",
        fortSave: "+3",
        reflexSave: "+3",
        willSave: "+7",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 6, },
          { level: 2, spells: 6, },
          { level: 3, spells: 6, },
          { level: 4, spells: 5, },
          { level: 5, spells: 3, },
          { level: 6, spells: 0, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "11th",
        baseAttackBonus: "+5",
        fortSave: "+3",
        reflexSave: "+3",
        willSave: "+7",
        specials: ["Bloodline spell"],
        spellsPerDay: [
          { level: 1, spells: 6, },
          { level: 2, spells: 6, },
          { level: 3, spells: 6, },
          { level: 4, spells: 6, },
          { level: 5, spells: 4, },
          { level: 6, spells: 0, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "12th",
        baseAttackBonus: "+6/+1",
        fortSave: "+4",
        reflexSave: "+4",
        willSave: "+8",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 6, },
          { level: 2, spells: 6, },
          { level: 3, spells: 6, },
          { level: 4, spells: 6, },
          { level: 5, spells: 5, },
          { level: 6, spells: 3, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "13th",
        baseAttackBonus: "+6/+1",
        fortSave: "+4",
        reflexSave: "+4",
        willSave: "+8",
        specials: ["Bloodline feat, bloodline spell"],
        spellsPerDay: [
          { level: 1, spells: 6, },
          { level: 2, spells: 6, },
          { level: 3, spells: 6, },
          { level: 4, spells: 6, },
          { level: 5, spells: 6, },
          { level: 6, spells: 4, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "14th",
        baseAttackBonus: "+7/+2",
        fortSave: "+4",
        reflexSave: "+4",
        willSave: "+9",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 6, },
          { level: 2, spells: 6, },
          { level: 3, spells: 6, },
          { level: 4, spells: 6, },
          { level: 5, spells: 6, },
          { level: 6, spells: 5, },
          { level: 7, spells: 3, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "15th",
        baseAttackBonus: "+7/+2",
        fortSave: "+5",
        reflexSave: "+5",
        willSave: "+9",
        specials: ["Bloodline power, bloodline spell"],
        spellsPerDay: [
          { level: 1, spells: 6, },
          { level: 2, spells: 6, },
          { level: 3, spells: 6, },
          { level: 4, spells: 6, },
          { level: 5, spells: 6, },
          { level: 6, spells: 6, },
          { level: 7, spells: 4, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "16th",
        baseAttackBonus: "+8/+3",
        fortSave: "+5",
        reflexSave: "+5",
        willSave: "+10",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 6, },
          { level: 2, spells: 6, },
          { level: 3, spells: 6, },
          { level: 4, spells: 6, },
          { level: 5, spells: 6, },
          { level: 6, spells: 6, },
          { level: 7, spells: 5, },
          { level: 8, spells: 3, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "17th",
        baseAttackBonus: "+8/+3",
        fortSave: "+5",
        reflexSave: "+5",
        willSave: "+10",
        specials: ["Bloodline spell"],
        spellsPerDay: [
          { level: 1, spells: 6, },
          { level: 2, spells: 6, },
          { level: 3, spells: 6, },
          { level: 4, spells: 6, },
          { level: 5, spells: 6, },
          { level: 6, spells: 6, },
          { level: 7, spells: 6, },
          { level: 8, spells: 4, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "18th",
        baseAttackBonus: "+9/+4",
        fortSave: "+6",
        reflexSave: "+6",
        willSave: "+11",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 6, },
          { level: 2, spells: 6, },
          { level: 3, spells: 6, },
          { level: 4, spells: 6, },
          { level: 5, spells: 6, },
          { level: 6, spells: 6, },
          { level: 7, spells: 6, },
          { level: 8, spells: 5, },
          { level: 9, spells: 3, }
        ]
      },
      {
        level: "19th",
        baseAttackBonus: "+9/+4",
        fortSave: "+6",
        reflexSave: "+6",
        willSave: "+11",
        specials: ["Bloodline feat, bloodline spell"],
        spellsPerDay: [
          { level: 1, spells: 6, },
          { level: 2, spells: 6, },
          { level: 3, spells: 6, },
          { level: 4, spells: 6, },
          { level: 5, spells: 6, },
          { level: 6, spells: 6, },
          { level: 7, spells: 6, },
          { level: 8, spells: 6, },
          { level: 9, spells: 4, }
        ]
      },
      {
        level: "20th",
        baseAttackBonus: "+10/+5",
        fortSave: "+6",
        reflexSave: "+6",
        willSave: "+12",
        specials: ["Bloodline power"],
        spellsPerDay: [
          { level: 1, spells: 6, },
          { level: 2, spells: 6, },
          { level: 3, spells: 6, },
          { level: 4, spells: 6, },
          { level: 5, spells: 6, },
          { level: 6, spells: 6, },
          { level: 7, spells: 6, },
          { level: 8, spells: 6, },
          { level: 9, spells: 6, }
        ]
      },
    ],
    wizard: [
      {
        level: "1st",
        baseAttackBonus: "+0",
        fortSave: "+0",
        reflexSave: "+0",
        willSave: "+2",
        specials: ["Arcane bond, arcane school, cantrips, Scribe Scroll"],
        spellsPerDay: [
          { level: 1, spells: 3, },
          { level: 2, spells: 0, },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
          { level: 6, spells: 0, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "2nd",
        baseAttackBonus: "+1",
        fortSave: "+0",
        reflexSave: "+0",
        willSave: "+3",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: 0, },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
          { level: 6, spells: 0, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "3rd",
        baseAttackBonus: "+1",
        fortSave: "+1",
        reflexSave: "+1",
        willSave: "+3",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: 1, },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
          { level: 6, spells: 0, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "4th",
        baseAttackBonus: "+2",
        fortSave: "+1",
        reflexSave: "+1",
        willSave: "+4",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: 2, },
          { level: 3, spells: 0, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
          { level: 6, spells: 0, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "5th",
        baseAttackBonus: "+2",
        fortSave: "+1",
        reflexSave: "+1",
        willSave: "+4",
        specials: ["Bonus feat"],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: 2, },
          { level: 3, spells: 1, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
          { level: 6, spells: 0, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "6th",
        baseAttackBonus: "+3",
        fortSave: "+2",
        reflexSave: "+2",
        willSave: "+5",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: 3, },
          { level: 3, spells: 2, },
          { level: 4, spells: 0, },
          { level: 5, spells: 0, },
          { level: 6, spells: 0, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "7th",
        baseAttackBonus: "+3",
        fortSave: "+2",
        reflexSave: "+2",
        willSave: "+5",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: 3, },
          { level: 3, spells: 2, },
          { level: 4, spells: 1, },
          { level: 5, spells: 0, },
          { level: 6, spells: 0, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "8th",
        baseAttackBonus: "+4",
        fortSave: "+2",
        reflexSave: "+2",
        willSave: "+6",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: 3, },
          { level: 3, spells: 3, },
          { level: 4, spells: 2, },
          { level: 5, spells: 0, },
          { level: 6, spells: 0, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "9th",
        baseAttackBonus: "+4",
        fortSave: "+3",
        reflexSave: "+3",
        willSave: "+6",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: 4, },
          { level: 3, spells: 3, },
          { level: 4, spells: 2, },
          { level: 5, spells: 1, },
          { level: 6, spells: 0, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "10th",
        baseAttackBonus: "+5",
        fortSave: "+3",
        reflexSave: "+3",
        willSave: "+7",
        specials: ["Bonus feat"],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: 4, },
          { level: 3, spells: 3, },
          { level: 4, spells: 3, },
          { level: 5, spells: 2, },
          { level: 6, spells: 0, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "11th",
        baseAttackBonus: "+5",
        fortSave: "+3",
        reflexSave: "+3",
        willSave: "+7",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: 4, },
          { level: 3, spells: 4, },
          { level: 4, spells: 3, },
          { level: 5, spells: 2, },
          { level: 6, spells: 1, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "12th",
        baseAttackBonus: "+6/+1",
        fortSave: "+4",
        reflexSave: "+4",
        willSave: "+8",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: 4, },
          { level: 3, spells: 4, },
          { level: 4, spells: 3, },
          { level: 5, spells: 3, },
          { level: 6, spells: 2, },
          { level: 7, spells: 0, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "13th",
        baseAttackBonus: "+6/+1",
        fortSave: "+4",
        reflexSave: "+4",
        willSave: "+8",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: 4, },
          { level: 3, spells: 4, },
          { level: 4, spells: 4, },
          { level: 5, spells: 3, },
          { level: 6, spells: 2, },
          { level: 7, spells: 1, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "14th",
        baseAttackBonus: "+7/+2",
        fortSave: "+4",
        reflexSave: "+4",
        willSave: "+9",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: 4, },
          { level: 3, spells: 4, },
          { level: 4, spells: 4, },
          { level: 5, spells: 3, },
          { level: 6, spells: 3, },
          { level: 7, spells: 2, },
          { level: 8, spells: 0, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "15th",
        baseAttackBonus: "+7/+2",
        fortSave: "+5",
        reflexSave: "+5",
        willSave: "+9",
        specials: ["Bonus feat"],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: 4, },
          { level: 3, spells: 4, },
          { level: 4, spells: 4, },
          { level: 5, spells: 4, },
          { level: 6, spells: 3, },
          { level: 7, spells: 2, },
          { level: 8, spells: 1, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "16th",
        baseAttackBonus: "+8/+3",
        fortSave: "+5",
        reflexSave: "+5",
        willSave: "+10",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: 4, },
          { level: 3, spells: 4, },
          { level: 4, spells: 4, },
          { level: 5, spells: 4, },
          { level: 6, spells: 3, },
          { level: 7, spells: 3, },
          { level: 8, spells: 2, },
          { level: 9, spells: 0, }
        ]
      },
      {
        level: "17th",
        baseAttackBonus: "+8/+3",
        fortSave: "+5",
        reflexSave: "+5",
        willSave: "+10",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: 4, },
          { level: 3, spells: 4, },
          { level: 4, spells: 4, },
          { level: 5, spells: 4, },
          { level: 6, spells: 4, },
          { level: 7, spells: 3, },
          { level: 8, spells: 2, },
          { level: 9, spells: 1, }
        ]
      },
      {
        level: "18th",
        baseAttackBonus: "+9/+4",
        fortSave: "+6",
        reflexSave: "+6",
        willSave: "+11",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: 4, },
          { level: 3, spells: 4, },
          { level: 4, spells: 4, },
          { level: 5, spells: 4, },
          { level: 6, spells: 4, },
          { level: 7, spells: 3, },
          { level: 8, spells: 3, },
          { level: 9, spells: 2, }
        ]
      },
      {
        level: "19th",
        baseAttackBonus: "+9/+4",
        fortSave: "+6",
        reflexSave: "+6",
        willSave: "+11",
        specials: [""],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: 4, },
          { level: 3, spells: 4, },
          { level: 4, spells: 4, },
          { level: 5, spells: 4, },
          { level: 6, spells: 4, },
          { level: 7, spells: 4, },
          { level: 8, spells: 3, },
          { level: 9, spells: 3, }
        ]
      },
      {
        level: "20th",
        baseAttackBonus: "+10/+5",
        fortSave: "+6",
        reflexSave: "+6",
        willSave: "+12",
        specials: ["Bonus feat"],
        spellsPerDay: [
          { level: 1, spells: 4, },
          { level: 2, spells: 4, },
          { level: 3, spells: 4, },
          { level: 4, spells: 4, },
          { level: 5, spells: 4, },
          { level: 6, spells: 4, },
          { level: 7, spells: 4, },
          { level: 8, spells: 4, },
          { level: 9, spells: 4, }
        ]
      },
    ]
  }



  /*
  # Sections on a Character Sheet
  character name
  alignment
  player
  character class
  level
  size
  gender
  age
  height
  weight
  hair
  eyes
  hit points
  damage reduction
  land speed
  armored land speed
  fly speed
  swim speed
  climb speed
  burrow speed
  wounds
  nonlethal damage
  ability scores
  initiative
  armor class
  touch armor class
  flat-footed armor class
  saving throws
  base attack bonus
  cmb
  cmd
  feats
  special abilities
  languages
  skills
  armor
  weapons
  gear
  spells
  weight
  money
  experience
  */
})();

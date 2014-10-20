(function() {
  var app = angular.module('characterBuilder', []);

  app.controller('ClassController', function(){
    this.classes = classes;
    this.tables = tables;

    this.getSpellsPerDayForClass = function(className){
      return this.tables[className.toLowerCase()];
    };
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

  var classes = [
    {
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
      source: 'core'
    },
    {
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
      source: 'core'
    },
    {
      name: 'Cleric',
      shortDescription: "A devout follower of a deity, the cleric can heal wounds, raise the dead, and call down the wrath of the gods.",
      description: "In faith and the miracles of the divine, many find a greater purpose. Called to serve powers beyond most mortal understanding, all priests preach wonders and provide for the spiritual needs of their people. Clerics are more than mere priests, though; these emissaries of the divine work the will of their deities through strength of arms and the magic of their gods. Devoted to the tenets of the religions and philosophies that inspire them, these ecclesiastics quest to spread the knowledge and influence of their faith. Yet while they might share similar abilities, clerics prove as different from one another as the divinities they serve, with some offering healing and redemption, others judging law and truth, and still others spreading conflict and corruption. The ways of the cleric are varied, yet all who tread these paths walk with the mightiest of allies and bear the arms of the gods themselves.",
      role: "More than capable of upholding the honor of their deities in battle, clerics often prove stalwart and capable combatants. Their true strength lies in their capability to draw upon the power of their deities, whether to increase their own and their allies' prowess in battle, to vex their foes with divine magic, or to lend healing to companions in need.\nAs their powers are influenced by their faith, all clerics must focus their worship upon a divine source. While the vast majority of clerics revere a specific deity, a small number dedicate themselves to a divine concept worthy of devotion—such as battle, death, justice, or knowledge—free of a deific abstraction. (Work with your GM if you prefer this path to selecting a specific deity.)",
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
      source: 'core'
    },
    {
      name: 'Druid',
      shortDescription: 'The druid is a worshiper of all things natural—a spellcaster, a friend to animals, and a skilled shapechanger.',
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
      source: 'core'
    },
    {
      name: 'Fighter',
      shortDescription: 'Brave and stalwart, the fighter is a master of all manner of arms and armor.',
      description: 'Some take up arms for glory, wealth, or revenge. Others do battle to prove themselves, to protect others, or because they know nothing else. Still others learn the ways of weaponcraft to hone their bodies in battle and prove their mettle in the forge of war. Lords of the battlefield, fighters are a disparate lot, training with many weapons or just one, perfecting the uses of armor, learning the fighting techniques of exotic masters, and studying the art of combat, all to shape themselves into living weapons. Far more than mere thugs, these skilled warriors reveal the true deadliness of their weapons, turning hunks of metal into arms capable of taming kingdoms, slaughtering monsters, and rousing the hearts of armies. Soldiers, knights, hunters, and artists of war, fighters are unparalleled champions, and woe to those who dare stand against them.',
      role: "Fighters excel at combat—defeating their enemies, controlling the flow of battle, and surviving such sorties themselves. While their specific weapons and methods grant them a wide variety of tactics, few can match fighters for sheer battle prowess.",
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
      source: 'core'
    },
    {
      name: 'Monk',
      shortDescription: 'A student of martial arts, the monk trains his body to be his greatest weapon and defense.',
      description: "For the truly exemplary, martial skill transcends the battlefield—it is a lifestyle, a doctrine, a state of mind. These warrior-artists search out methods of battle beyond swords and shields, finding weapons within themselves just as capable of crippling or killing as any blade. These monks (so called since they adhere to ancient philosophies and strict martial disciplines) elevate their bodies to become weapons of war, from battle-minded ascetics to self-taught brawlers. Monks tread the path of discipline, and those with the will to endure that path discover within themselves not what they are, but what they are meant to be.",
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
      source: 'core'
    },
    {
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
      source: 'core'
    },
    {
      name: 'Ranger',
      shortDescription: 'A tracker and hunter, the ranger is a creature of the wild and of tracking down his favored foes.',
      description: "For those who relish the thrill of the hunt, there are only predators and prey. Be they scouts, trackers, or bounty hunters, rangers share much in common: unique mastery of specialized weapons, skill at stalking even the most elusive game, and the expertise to defeat a wide range of quarries. Knowledgeable, patient, and skilled hunters, these rangers hound man, beast, and monster alike, gaining insight into the way of the predator, skill in varied environments, and ever more lethal martial prowess. While some track man-eating creatures to protect the frontier, others pursue more cunning game—even fugitives among their own people.",
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
      source: 'core'
    },
    {
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
      source: 'core'
    },
    {
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
      source: 'core'
    },
    {
      name: 'Wizard',
      shortDescription: 'The wizard masters magic through constant study that gives him incredible magical power.',
      description: "Beyond the veil of the mundane hide the secrets of absolute power. The works of beings beyond mortals, the legends of realms where gods and spirits tread, the lore of creations both wondrous and terrible—such mysteries call to those with the ambition and the intellect to rise above the common folk to grasp true might. Such is the path of the wizard. These shrewd magic-users seek, collect, and covet esoteric knowledge, drawing on cultic arts to work wonders beyond the abilities of mere mortals. While some might choose a particular field of magical study and become masters of such powers, others embrace versatility, reveling in the unbounded wonders of all magic. In either case, wizards prove a cunning and potent lot, capable of smiting their foes, empowering their allies, and shaping the world to their every desire.",
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
      source: 'core'
    }
  ]

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
    ranger: [
      {
        level: 1,
        baseAttackBonus: 1,
        fortSave: 2,
        refSave: 2,
        willSave: 0,
        specials: [
          "1st Favored Enemy",
          "Track",
          "Wild Empathy"
        ],
        spellsPerDay: [
          {
            level: 1,
            spells: 0,
          },
          {
            level: 2,
            spells: 0,
          },
          {
            level: 3,
            spells: 0,
          },
          {
            level: 4,
            spells: 0,
          },
        ],
      },
      {
        level: 2,
        baseAttackBonus: 2,
        fortSave: 3,
        refSave: 3,
        willSave: 0,
        specials: [
          "Combat style feat",
        ],
        spellsPerDay: [
          {
            level: 1,
            spells: 0,
          },
          {
            level: 2,
            spells: 0,
          },
          {
            level: 3,
            spells: 0,
          },
          {
            level: 4,
            spells: 0,
          },
        ],
      },
    ]
  }

  /*
  # Sections
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

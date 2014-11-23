'use strict';

/**
 * @ngdoc function
 * @name pathfinderCharacterBuilderApp.controller:ClassCtrl
 * @description
 * # ClassCtrl
 * Controller of the pathfinderCharacterBuilderApp
 */
 (function() {
  angular.module('pathfinderCharacterBuilderApp')
    .controller('ClassCtrl', function ($scope) {
      this.classes = classes;
      this.detailsByClass = detailsByClass;
      this.tablesByClass = tablesByClass;
      this.spellsByClass = spellsByClass;

      this.getTableForClass = function(className){
        return this.tablesByClass[className.toLowerCase()];
      };

      this.getClassDetails = function(className){
        return this.detailsByClass[className.toLowerCase()];
      };

      this.classHasLevelZeroSpells = function(className){
        className = className.toLowerCase();
        if (className === "cleric" || className === "druid" || className === "shaman" || className === "wizard"){
          return true;
        }
        return false;
      };

      this.hasSpellsAtLevel = function(className, level){
        var detailsForClass = this.getClassDetails(className);
        var maxSpellLevel = detailsForClass.maxSpellLevel || -1;
        if (level === 0 && !this.classHasLevelZeroSpells(className)){
          maxSpellLevel = -1;
        }
        return maxSpellLevel >= level;
      };

      this.getSpellsByClassAndLevel = function(className, level) {
        var spellsForClass = this.spellsByClass[className.toLowerCase()] || {};
        var spellsForClassAtLevel = spellsForClass[level] || ['None'];
        return spellsForClassAtLevel;
      };
    });


  var classes = [
    'Barbarian',
    'Bard',
    'Cleric',
    'Druid',
    'Fighter',
    'Monk',
    'Paladin',
    'Ranger',
    'Shaman',
    'Sorcerer',
    'Witch',
    'Wizard'
  ];


  var detailsByClass = {
    /* =============== */
    /* Table: Barbarian */
    /* =============== */
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
    /* =============== */
    /* Table: Bard */
    /* =============== */
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
    /* =============== */
    /* Table: Cleric   */
    /* =============== */
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
    /* =============== */
    /* Table: Druid    */
    /* =============== */
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
    /* =============== */
    /* Table: Fighter  */
    /* =============== */
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
    /* =============== */
    /* Table: Monk     */
    /* =============== */
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
    /* =============== */
    /* Table: Paladin  */
    /* =============== */
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
    /* =============== */
    /* Table: Ranger   */
    /* =============== */
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
    /* =============== */
    /* Table: Rogue    */
    /* =============== */
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
    /* =============== */
    /* Table: Shaman   */
    /* =============== */
    shaman: {
      name: 'Shaman',
      shortDescription: 'The occult mysteries of the oracle and witch combine in the shaman, an enigmatic spirit-speaker who calls upon powers from beyond. Players who seek new routes to eerie divine powers should consider this class.',
      description: 'While some heroes speak to gods or consort with otherworldly muses, shamans commune with the spirits of the world and the energies that exist in every living thing. These divine adventurers draw upon their power to shape the world and expand the influence of their spiritual patrons. Shamans have strong ties to natural spirits. They form powerful bonds with particular spirits, and as their power grows they learn to call upon other spirits in times of need.',
      role: "Shamans make for potent divine spellcasters, capable of using divine spells and the power of their spirits to aid their allies and destroy their foes. While they aren't the healers that clerics are, they can still fill that role when needed.",
      alignment: 'Any',
      hitDie: 8,
      classSkills: [
        'Craft (Int)',
        'Diplomacy (Cha)',
        'Fly (Dex)',
        'Handle Animal (Cha)',
        'Heal (Wis)',
        'Knowledge (nature) (Int)',
        'Knowledge (planes) (Int)',
        'Knowledge (religion) (Int)',
        'Profession (Wis)',
        'Ride (Dex)',
        'Spellcraft (Int)',
        'Survival (Wis)'
      ],
      skillRanksPerLevel: 4,
      maxSpellLevel: 9,
      source: 'apg'
    },
    /* =============== */
    /* Table: Sorcerer */
    /* =============== */
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
    /* =============== */
    /* Table: Wizard   */
    /* =============== */
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
    },
    /* =============== */
    /* Table: Witch    */
    /* =============== */
    witch: {
      name: 'Witch',
      shortDescription: "Lurking on the fringe of civilization, the witch makes a powerful connection with a patron that grants her strange and mysterious powers through a special familiar.",
      description: "Some gain power through study, some through devotion, others through blood, but the witch gains power from her communion with the unknown. Generally feared and misunderstood, the witch draws her magic from a pact made with an otherworldly power. Communing with that source, using her familiar as a conduit, the witch gains not only a host of spells, but a number of strange abilities known as hexes. As a witch grows in power, she might learn about the source of her magic, but some remain blissfully unaware. Some are even afraid of that source, fearful of what it might be or where its true purposes lie.",
      role: "While many witches are recluses, living on the edge of civilization, some live within society, openly or in hiding. The blend of witches' spells makes them adept at filling a number of different roles, from seer to healer, and their hexes grant them a number of abilities that are useful in a fight. Some witches travel about, seeking greater knowledge and better understanding of the mysterious powers that guide them.",
      alignment: 'Any',
      hitDie: 6,
      classSkills: [
        "Craft (Int)",
        "Fly (Dex)",
        "Heal (Wis)",
        "Intimidate (Cha)",
        "Knowledge (Arcana) (Int)",
        "Knowledge (History) (Int)",
        "Knowledge (Nature) (Int)",
        "Knowledge (Planes) (Int)",
        "Profession (Wis)",
        "Spellcraft (Int)",
        "Use Magic Device (Cha)"
      ],
      skillRanksPerLevel: 2,
      maxSpellLevel: 9,
      source: 'core'
    }
  };


  var tablesByClass = {
    /* =============== */
    /* Table: Barbarian */
    /* =============== */
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
    /* =============== */
    /* Table: Bard     */
    /* =============== */
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
          { level: 6, spells: 0, }
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
          { level: 6, spells: 0, }
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
          { level: 6, spells: 0, }
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
          { level: 6, spells: 0, }
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
          { level: 6, spells: 0, }
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
          { level: 6, spells: 0, }
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
          { level: 6, spells: 0, }
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
          { level: 6, spells: 0, }
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
          { level: 6, spells: 0, }
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
          { level: 6, spells: 0, }
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
          { level: 6, spells: 0, }
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
          { level: 6, spells: 0, }
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
          { level: 6, spells: 0, }
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
          { level: 6, spells: 0, }
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
          { level: 6, spells: 0, }
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
          { level: 6, spells: 1, }
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
          { level: 6, spells: 2, }
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
          { level: 6, spells: 3, }
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
          { level: 6, spells: 4, }
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
          { level: 6, spells: 5, }
        ]
      },
    ],
    /* =============== */
    /* Table: Cleric   */
    /* =============== */
    cleric: [
      {
        level: "1st",
        baseAttackBonus: "+0",
        fortSave: "+2",
        reflexSave: "+0",
        willSave: "+2",
        specials: ["Aura, channel energy 1d6, domains, orisons"],
        spellsPerDay: [
          { level: 0, spells: 3, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
    /* =============== */
    /* Table: Druid    */
    /* =============== */
    druid: [
      {
        level: "1st",
        baseAttackBonus: "+0",
        fortSave: "+2",
        reflexSave: "+0",
        willSave: "+2",
        specials: ["Nature bond, nature sense, orisons, wild empathy"],
        spellsPerDay: [
          { level: 0, spells: 3, },
          { level: 1, spells: 1, },
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
          { level: 0, spells: 4, },
          { level: 1, spells: 2, },
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
          { level: 0, spells: 4, },
          { level: 1, spells: 2, },
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
          { level: 0, spells: 4, },
          { level: 1, spells: 3, },
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
          { level: 0, spells: 4, },
          { level: 1, spells: 3, },
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
        spellsPerDay: [
          { level: 0, spells: 4, },
          { level: 1, spells: 3, },
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
        baseAttackBonus: "+5",
        fortSave: "+5",
        reflexSave: "+2",
        willSave: "+5",
        specials: [""],
        spellsPerDay: [
          { level: 0, spells: 4, },
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
        baseAttackBonus: "+6/+1",
        fortSave: "+6",
        reflexSave: "+2",
        willSave: "+6",
        specials: ["Wild shape (3/day)"],
        spellsPerDay: [
          { level: 0, spells: 4, },
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
        baseAttackBonus: "+6/+1",
        fortSave: "+6",
        reflexSave: "+3",
        willSave: "+6",
        specials: ["Venom immunity"],
        spellsPerDay: [
          { level: 0, spells: 4, },
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
        baseAttackBonus: "+7/+2",
        fortSave: "+7",
        reflexSave: "+3",
        willSave: "+7",
        specials: ["Wild shape (4/day)"],
        spellsPerDay: [
          { level: 0, spells: 4, },
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
        baseAttackBonus: "+8/+3",
        fortSave: "+7",
        reflexSave: "+3",
        willSave: "+7",
        specials: [""],
        spellsPerDay: [
          { level: 0, spells: 4, },
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
        baseAttackBonus: "+9/+4",
        fortSave: "+8",
        reflexSave: "+4",
        willSave: "+8",
        specials: ["Wild shape (5/day)"],
        spellsPerDay: [
          { level: 0, spells: 4, },
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
        baseAttackBonus: "+9/+4",
        fortSave: "+8",
        reflexSave: "+4",
        willSave: "+8",
        specials: ["A thousand faces"],
        spellsPerDay: [
          { level: 0, spells: 4, },
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
        baseAttackBonus: "+10/+5",
        fortSave: "+9",
        reflexSave: "+4",
        willSave: "+9",
        specials: ["Wild shape (6/day)"],
        spellsPerDay: [
          { level: 0, spells: 4, },
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
        baseAttackBonus: "+11/+6/+1",
        fortSave: "+9",
        reflexSave: "+5",
        willSave: "+9",
        specials: ["Timeless body"],
        spellsPerDay: [
          { level: 0, spells: 4, },
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
        baseAttackBonus: "+12/+7/+2",
        fortSave: "+10",
        reflexSave: "+5",
        willSave: "+10",
        specials: ["Wild shape (7/day)"],
        spellsPerDay: [
          { level: 0, spells: 4, },
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
        baseAttackBonus: "+12/+7/+2",
        fortSave: "+10",
        reflexSave: "+5",
        willSave: "+10",
        specials: [""],
        spellsPerDay: [
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
    /* =============== */
    /* Table: Fighter  */
    /* =============== */
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
    /* =============== */
    /* Table: Monk     */
    /* =============== */
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
    /* =============== */
    /* Table: Paladin */
    /* =============== */
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
    /* =============== */
    /* Table: Ranger   */
    /* =============== */
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
    /* =============== */
    /* Table: Rogue    */
    /* =============== */
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
    /* =============== */
    /* Table: Shaman   */
    /* =============== */
    shaman: [
      {
        level: "1st",
        baseAttackBonus: "+0",
        fortSave: "+0",
        reflexSave: "+0",
        willSave: "+2",
        specials: ["Orisons, spirit, spirit animal, spirit magic"],
        spellsPerDay: [
          { level: 0, spells: 3, },
          { level: 1, spells: 1, },
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
        specials: ["Hex"],
        spellsPerDay: [
          { level: 0, spells: 4, },
          { level: 1, spells: 2, },
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
        fortSave: "+1",
        reflexSave: "+1",
        willSave: "+3",
        specials: [""],
        spellsPerDay: [
          { level: 0, spells: 4, },
          { level: 1, spells: 2, },
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
        fortSave: "+1",
        reflexSave: "+1",
        willSave: "+4",
        specials: ["Hex, wandering spirit"],
        spellsPerDay: [
          { level: 0, spells: 4, },
          { level: 1, spells: 3, },
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
        fortSave: "+1",
        reflexSave: "+1",
        willSave: "+4",
        specials: [""],
        spellsPerDay: [
          { level: 0, spells: 4, },
          { level: 1, spells: 3, },
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
        fortSave: "+2",
        reflexSave: "+2",
        willSave: "+5",
        specials: ["Wandering hex"],
        spellsPerDay: [
          { level: 0, spells: 4, },
          { level: 1, spells: 3, },
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
        baseAttackBonus: "+5",
        fortSave: "+2",
        reflexSave: "+2",
        willSave: "+5",
        specials: [""],
        spellsPerDay: [
          { level: 0, spells: 4, },
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
        baseAttackBonus: "+6/+1",
        fortSave: "+2",
        reflexSave: "+2",
        willSave: "+6",
        specials: ["Hex, spirit (greater)"],
        spellsPerDay: [
          { level: 0, spells: 4, },
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
        baseAttackBonus: "+6/+1",
        fortSave: "+3",
        reflexSave: "+3",
        willSave: "+6",
        specials: [""],
        spellsPerDay: [
          { level: 0, spells: 4, },
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
        baseAttackBonus: "+7/+2",
        fortSave: "+3",
        reflexSave: "+3",
        willSave: "+7",
        specials: ["Hex"],
        spellsPerDay: [
          { level: 0, spells: 4, },
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
        baseAttackBonus: "+8/+3",
        fortSave: "+3",
        reflexSave: "+3",
        willSave: "+7",
        specials: [""],
        spellsPerDay: [
          { level: 0, spells: 4, },
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
        baseAttackBonus: "+9/+4",
        fortSave: "+4",
        reflexSave: "+4",
        willSave: "+8",
        specials: ["Hex, wandering spirit (greater)"],
        spellsPerDay: [
          { level: 0, spells: 4, },
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
        baseAttackBonus: "+9/+4",
        fortSave: "+4",
        reflexSave: "+4",
        willSave: "+8",
        specials: [""],
        spellsPerDay: [
          { level: 0, spells: 4, },
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
        baseAttackBonus: "+10/+5",
        fortSave: "+4",
        reflexSave: "+4",
        willSave: "+9",
        specials: ["Wandering hex (2 hexes)"],
        spellsPerDay: [
          { level: 0, spells: 4, },
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
        baseAttackBonus: "+11/+6/+1",
        fortSave: "+5",
        reflexSave: "+5",
        willSave: "+9",
        specials: [""],
        spellsPerDay: [
          { level: 0, spells: 4, },
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
        baseAttackBonus: "+12/+7/+2",
        fortSave: "+5",
        reflexSave: "+5",
        willSave: "+10",
        specials: ["Hex, spirit (true)"],
        spellsPerDay: [
          { level: 0, spells: 4, },
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
        baseAttackBonus: "+12/+7/+2",
        fortSave: "+5",
        reflexSave: "+5",
        willSave: "+10",
        specials: [""],
        spellsPerDay: [
          { level: 0, spells: 4, },
          { level: 1, spells: 4, },
          { level: 2, spells: 4, },
          { level: 3, spells: 4, },
          { level: 4, spells: 4, },
          { level: 5, spells: 4, },
          { level: 6, spells: 4, },
          { level: 7, spells: 3, },
          { level: 8, spells: 2, },
          { level: 9, spells: 1, }
        ],
      },
      {
        level: "18th",
        baseAttackBonus: "+13/+8/+3",
        fortSave: "+6",
        reflexSave: "+6",
        willSave: "+11",
        specials: ["Hex"],
        spellsPerDay: [
          { level: 0, spells: 4, },
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
        fortSave: "+6",
        reflexSave: "+6",
        willSave: "+11",
        specials: [""],
        spellsPerDay: [
          { level: 0, spells: 4, },
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
        fortSave: "+6",
        reflexSave: "+6",
        willSave: "+12",
        specials: ["Hex, manifestation, wandering spirit (true)"],
        spellsPerDay: [
          { level: 0, spells: 4, },
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
      }
    ],
    /* =============== */
    /* Table: Sorcerer */
    /* =============== */
    sorcerer: [
      {
        level: "1st",
        baseAttackBonus: "+0",
        fortSave: "+0",
        reflexSave: "+0",
        willSave: "+2",
        specials: ["Bloodline power, cantrips, eschew materials"],
        spellsPerDay: [
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
    /* =============== */
    /* Table: Wizard   */
    /* =============== */
    wizard: [
      {
        level: "1st",
        baseAttackBonus: "+0",
        fortSave: "+0",
        reflexSave: "+0",
        willSave: "+2",
        specials: ["Arcane bond, arcane school, cantrips, Scribe Scroll"],
        spellsPerDay: [
          { level: 0, spells: 3, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
          { level: 0, spells: 4, },
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
  };


  var spellsByClass = {
    /* =============== */
    /* Table: Bard     */
    /* =============== */
    bard: {
      0: [
      "Dancing Lights: Creates torches or other lights.",
      "Daze: Humanoid creature of 4 HD or less loses next action.",
      "Detect Magic: Detects spells and magic items within 60 ft.",
      "Flare: Dazzles one creature (–1 on attack rolls).",
      "Ghost Sound: Figment sounds.",
      "Know Direction: You discern north.",
      "Light: Object shines like a torch.",
      "Lullaby: Makes subject drowsy: –5 on Perception checks, –2 on Will saves against sleep.",
      "Mage Hand: 5-pound telekinesis.",
      "Mending: Makes minor repairs on an object.",
      "Message: Whisper conversation at distance.",
      "Open/Close: Opens or closes small or light things.",
      "Prestidigitation: Performs minor tricks.",
      "Read Magic: Read scrolls and spellbooks.",
      "Resistance: Subject gains +1 on saving throws.",
      "Summon Instrument: Summons one musical instrument.",
      ],
      1: [
      "Alarm: Wards an area for 2 hours/level.",
      "Animate Rope: Makes a rope move at your command.",
      "Cause Fear: One creature of 5 HD or less flees for 1d4 rounds.",
      "Charm Person: Makes one person your friend.",
      "Comprehend Languages: You understand all languages.",
      "Confusion, Lesser: One creature is confused for 1 round.",
      "Cure Light Wounds: Cures 1d8 damage + 1/level (max +5).",
      "Detect Secret Doors: Reveals hidden doors within 60 ft.",
      "Disguise Self: Changes your appearance.",
      "Erase: Mundane or magical writing vanishes.",
      "Expeditious Retreat: Your base land speed increases by 30 ft.",
      "Feather Fall: Objects or creatures fall slowly.",
      "Grease: Makes 10-ft. square or one object slippery.",
      "Hideous Laughter: Subject loses actions for 1 round/ level.",
      "Hypnotism: Fascinates 2d4 HD of creatures.",
      "Identify: Gives +10 bonus to identify magic items.",
      "Magic Aura: Alters object's magic aura.",
      "Magic MouthM: Objects speaks once when triggered.",
      "Obscure Object: Masks object against scrying.",
      "Remove Fear: Suppresses fear or gives +4 on saves against fear for one subject + one per four levels.",
      "Silent Image: Creates minor illusion of your design.",
      "Sleep: Puts 4 HD of creatures into magical slumber.",
      "Summon Monster I: Summons extraplanar creature to fight for you.",
      "Undetectable Alignment: Conceals alignment for 24 hours.",
      "Unseen Servant: Invisible force obeys your commands.",
      "Ventriloquism: Throws voice for 1 min./level.",
      ],
      2: [
      "Alter Self: Assume form of a Small or Medium humanoid.",
      "Animal Messenger: Sends a Tiny animal to a specific place.",
      "Animal Trance: Fascinates 2d6 HD of animals.",
      "Blindness/Deafness: Makes subject blind or deaf.",
      "Blur: Attacks miss subject 20% of the time.",
      "Calm Emotions: Calms creatures, negating emotion effects.",
      "Cat's Grace: Subject gains +4 to Dex for 1 min./level.",
      "Cure Moderate Wounds: Cures 2d8 damage + 1/level (max +10).",
      "Darkness: 20-ft. radius of supernatural shadow.",
      "Daze Monster: Living creature of 6 HD or less loses next action.",
      "Delay Poison: Stops poison from harming target for 1 hour/level.",
      "Detect Thoughts: Allows “listening” to surface thoughts.",
      "Eagle's Splendor: Subject gains +4 to Cha for 1 min./level.",
      "Enthrall: Captivates all within 100 ft. + 10 ft./level.",
      "Fox's Cunning: Subject gains +4 to Int for 1 min./level.",
      "Glitterdust: Blinds creatures, outlines invisible creatures.",
      "Heroism: Gives +2 on attack rolls, saves, skill checks.",
      "Hold Person: Paralyzes one humanoid for 1 round/level.",
      "Hypnotic Pattern: Fascinates (2d4 + level) HD of creatures.",
      "Invisibility: Subject is invisible for 1 min./level or until it attacks.",
      "Locate Object: Senses direction toward object (specific or type).",
      "Minor Image: As silent image, plus some sound.",
      "Mirror Image: Creates decoy duplicates of you (1d4 + 1 per three levels, max 8).",
      "Misdirection: Misleads divinations for one creature or object.",
      "Pyrotechnics: Turns fire into blinding light or choking smoke.",
      "Rage: Gives +2 to Str and Con, +1 on Will saves, –2 to AC.",
      "Scare: Panics creatures of less than 6 HD.",
      "Shatter: Sonic vibration damages objects or crystalline creatures.",
      "Silence: Negates sound in 20-ft. radius.",
      "Sound Burst: Deals 1d8 sonic damage and may stun subjects.",
      "Suggestion: Compels subject to follow stated course of action.",
      "Summon Monster II: Summons extraplanar creature to fight for you.",
      "Summon Swarm: Summons swarm of bats, rats, or spiders.",
      "Tongues: Speak and understand any language.",
      "Whispering Wind: Sends a short message 1 mile/level.",
      ],
      3: [
      "Blink: You randomly vanish and reappear for 1 round/level.",
      "Charm Monster: Makes monster believe it is your ally.",
      "Clairaudience/Clairvoyance: Hear or see at a distance for 1 min./level.",
      "Confusion: Subjects behave oddly for 1 round/level.",
      "Crushing Despair: Subjects take –2 on attack rolls, damage rolls, saves, and checks.",
      "Cure Serious Wounds: Cures 3d8 damage + 1/level (max +15).",
      "Daylight: 60-ft. radius of bright light.",
      "Deep Slumber: Puts 10 HD of creatures to sleep.",
      "Dispel Magic: Cancels one magical spell or effect.",
      "Displacement: Attacks miss subject 50% of the time.",
      "Fear: Subjects within cone flee for 1 round/level.",
      "Gaseous Form: Subject becomes insubstantial and can fly slowly.",
      "Geas, Lesser: Commands subject of 7 HD or less.",
      "Glibness: You gain +20 bonus on Bluff checks, and your lies can escape magical discernment.",
      "Good Hope: Subjects gain +2 on attack rolls, damage rolls, saves, and checks.",
      "Haste: One creature/level moves faster, receives +1 on attack rolls, AC, and Reflex saves.",
      "Illusory ScriptM: Only select creatures can read text.",
      "Invisibility Sphere: Makes everyone within 10 feet invisible.",
      "Major Image: As silent image, plus sound, smell, and thermal effects.",
      "Phantom Steed: Magic horse appears for 1 hour/level.",
      "Remove Curse: Frees object or person from curse.",
      "ScryingF: Spies on subject from a distance.",
      "Sculpt Sound: Creates new sounds or changes existing ones into new sounds.",
      "Secret Page: Changes one page to hide its real content.",
      "See Invisibility: Reveals invisible creatures or objects.",
      "Sepia Snake SigilM: Creates a snake-shaped text symbol that immobilizes reader.",
      "Slow: One subject/level takes only one action/round, –1 to AC, Reflex saves, and attack rolls.",
      "Speak with Animals: You can communicate with animals.",
      "Summon Monster III: Summons extraplanar creature to fight for you.",
      "Tiny Hut: Creates shelter for 10 creatures.",
      ],
      4: [
      "Break Enchantment: Frees subjects from enchantments, transmutations, and curses.",
      "Cure Critical Wounds: Cures 4d8 damage + 1/level (max +20).",
      "Detect Scrying: Alerts you to magical eavesdropping.",
      "Dimension Door: Teleports you a short distance.",
      "Dominate Person: Controls humanoid telepathically.",
      "Freedom of Movement: Subject moves normally despite impediments to restrict movement.",
      "Hallucinatory Terrain: Makes one type of terrain appear like another (field as forest, or the like).",
      "Hold Monster: As hold person, but any creature.",
      "Invisibility, Greater: As invisibility, but subject can attack and stay invisible.",
      "Legend LoreMF: Lets you learn tales about a person, place, or thing.",
      "Locate Creature: Indicates direction to known creature.",
      "Modify Memory: Changes 5 minutes of subject's memories.",
      "Neutralize Poison: Immunizes subject against poison, detoxifies venom in or on subject.",
      "Rainbow Pattern: Lights fascinate 24 HD of creatures.",
      "Repel Vermin: Insects, spiders, and other vermin stay 10 ft. away.",
      "Secure Shelter: Creates sturdy cottage.",
      "Shadow Conjuration: Mimics conjuration below 4th level, but only 20% real.",
      "Shout: Deafens all within cone and deals 5d6 sonic damage.",
      "Speak with Plants: You can talk to plants and plant creatures.",
      "Summon Monster IV: Summons extraplanar creature to fight for you.",
      "Zone of Silence: Keeps eavesdroppers from overhearing you.",
      ],
      5: [
      "Cure Light Wounds, Mass: Cures 1d8 damage + 1/level, affects 1 subject/level.",
      "Dispel Magic, Greater: Works as dispel magic, but can affect multiple targets.",
      "Dream: Sends message to anyone sleeping.",
      "False VisionM: Fools scrying with an illusion.",
      "Heroism, Greater: Gives +4 bonus on attack rolls, saves, skill checks; immunity to fear; temporary hp.",
      "Mind Fog: Subjects in fog get –10 to Wis and Will checks.",
      "Mirage Arcana: As hallucinatory terrain, plus structures.",
      "Mislead: Turns you invisible and creates illusory double.",
      "Nightmare: Sends vision dealing 1d10 damage, fatigue.",
      "Persistent Image: As major image, but no concentration required.",
      "Seeming: Changes appearance of one person per two levels.",
      "Shadow Evocation: Mimics evocation of lower than 5th level, but only 20% real.",
      "Shadow Walk: Step into shadow to travel rapidly.",
      "Song of Discord: Forces targets to attack each other.",
      "Suggestion, Mass: As suggestion, affects subject/level.",
      "Summon Monster V: Summons extraplanar creature to fight for you.",
      ],
      6: [
      "Analyze DweomerF: Reveals magical aspects of subject.",
      "Animate Objects: Objects attack your foes.",
      "Cat's Grace, Mass: As cat's grace, affects 1 subject/level.",
      "Charm Monster, Mass: As charm monster, but all within 30 ft.",
      "Cure Moderate Wounds, Mass: Cures 2d8 damage + 1/level, affects 1 subject/level.",
      "Eagle's Splendor, Mass: As eagle's splendor, affects 1 subject/level.",
      "Eyebite: Target becomes panicked, sickened, and/or comatose.",
      "Find the Path: Shows most direct way to a location.",
      "Fox's Cunning, Mass: As fox's cunning, affects 1 subject/level.",
      "Geas/Quest: As lesser geas, but affects any creature.",
      "Heroes' Feast: Food for one creature/level cures and grants combat bonuses.",
      "Irresistible Dance: Forces subject to dance.",
      "Permanent Image: Permanent illusion, includes sight, sound, smell, and thermal effects.",
      "Programmed ImageM: As major image, plus triggered by event.",
      "Project ImageM: Illusory double can talk and cast spells.",
      "Scrying, Greater: As scrying, but faster and longer.",
      "Shout, Greater: Devastating yell deals 10d6 sonic damage; stuns creatures.",
      "Summon Monster VI: Summons extraplanar creature to fight for you.",
      "Sympathetic Vibration: Deals 2d10 damage/round to freestanding structure.",
      "Veil: Changes appearance of group of creatures.",
      ]
    },
    /* =============== */
    /* Table: Cleric */
    /* =============== */
    cleric: {
      0: [
      "Bleed: Cause a stabilized creature to resume dying.",
      "Create Water: Creates 2 gallons/level of pure water.",
      "Detect Magic: Detects spells and magic items within 60 ft.",
      "Detect Poison: Detects poison in one creature or object.",
      "Guidance: +1 on one attack roll, saving throw, or skill check.",
      "Light: Object shines like a torch.",
      "Mending: Makes minor repairs on an object.",
      "Purify Food and Drink: Purifies 1 cu. ft./level of food or water.",
      "Read Magic: Read scrolls and spellbooks.",
      "Resistance: Subject gains +1 on saving throws.",
      "Stabilize: Cause a dying creature to stabilize.",
      "Virtue: Subject gains 1 temporary hp.",
      ],
      1: [
      "Bane: Enemies take –1 on attack rolls and saves against fear.",
      "Bless: Allies gain +1 on attack rolls and saves against fear.",
      "Bless WaterM: Makes holy water.",
      "Cause Fear: One creature of 5 HD or less flees for 1d4 rounds.",
      "Command: One subject obeys selected command for 1 round.",
      "Comprehend Languages: You understand all spoken and written languages.",
      "Cure Light Wounds: Cures 1d8 damage + 1/level (max +5).",
      "Curse WaterM: Makes unholy water.",
      "Deathwatch: Reveals how near death subjects within 30 ft. are.",
      "Detect Chaos/Evil/Good/Law: Reveals creatures, spells, or objects of selected alignment.",
      "Detect Undead: Reveals undead within 60 ft.",
      "Divine Favor: You gain +1 per three levels on attack and damage rolls.",
      "Doom: One subject takes –2 on attack rolls, damage rolls, saves, and checks.",
      "Endure Elements: Exist comfortably in hot or cold regions.",
      "Entropic Shield: Ranged attacks against you have 20% miss chance.",
      "Hide from Undead: Undead can't perceive one subject/level.",
      "Inflict Light Wounds: Touch deals 1d8 damage +1/level (max +5).",
      "Magic Stone: Three stones gain +1 on attack, deal 1d6 +1 damage.",
      "Magic Weapon: Weapon gains +1 bonus.",
      "Obscuring Mist: Fog surrounds you.",
      "Protection from Chaos/Evil/Good/Law: +2 to AC and saves, plus additional protection against selected alignment.",
      "Remove Fear: Suppresses fear or gives +4 on saves against fear for one subject + one per four levels.",
      "Sanctuary: Opponents can't attack you, and you can't attack.",
      "Shield of Faith: Aura grants +2 or higher deflection bonus.",
      "Summon Monster I: Summons extraplanar creature to fight for you.",
      ],
      2: [
      "Aid: +1 on attack rolls and saves against fear, 1d8 temporary hp +1/level (max +10).",
      "Align Weapon: Weapon becomes good, evil, lawful, or chaotic.",
      "AuguryMF: Learns whether an action will be good or bad.",
      "Bear's Endurance: Subject gains +4 to Con for 1 min./level.",
      "Bull's Strength: Subject gains +4 to Str for 1 min./level.",
      "Calm Emotions: Calms creatures, negating emotion effects.",
      "ConsecrateM: Fills area with positive energy, weakening undead.",
      "Cure Moderate Wounds: Cures 2d8 damage + 1/level (max +10).",
      "Darkness: 20-ft. radius of supernatural shadow.",
      "Death Knell: Kills dying creature; you gain 1d8 temporary hp, +2 to Str, and +1 caster level.",
      "Delay Poison: Stops poison from harming target for 1 hour/level.",
      "DesecrateM: Fills area with negative energy, making undead stronger.",
      "Eagle's Splendor: Subject gains +4 to Cha for 1 min./level.",
      "Enthrall: Captivates all within 100 ft. + 10 ft./level.",
      "Find Traps: Notice traps as a rogue does.",
      "Gentle Repose: Preserves one corpse.",
      "Hold Person: Paralyzes one humanoid for 1 round/level.",
      "Inflict Moderate Wounds: Touch attack, 2d8 damage + 1/level (max +10).",
      "Make Whole: Repairs an object.",
      "Owl's Wisdom: Subject gains +4 to Wis for 1 min./level.",
      "Remove Paralysis: Frees creatures from paralysis or slow effect.",
      "Resist Energy: Ignores 10 (or more) points of damage/attack from specified energy type.",
      "Restoration, Lesser: Dispels magical ability penalty or repairs 1d4 ability damage.",
      "Shatter: Sonic vibration damages objects or crystalline creatures.",
      "Shield OtherF: You take half of subject's damage.",
      "Silence: Negates sound in 20-ft. radius.",
      "Sound Burst: Deals 1d8 sonic damage to subjects; may stun them.",
      "Spiritual Weapon: Magic weapon attacks on its own.",
      "Status: Monitors condition, position of allies.",
      "Summon Monster II: Summons extraplanar creature to fight for you.",
      "Undetectable Alignment: Conceals alignment for 24 hours.",
      "Zone of Truth: Subjects within range cannot lie.",
      ],
      3: [
      "Animate DeadM: Creates undead skeletons and zombies.",
      "Bestow Curse: –6 to an ability score; –4 on attack rolls, saves, and checks; or 50% chance of losing each action.",
      "Blindness/Deafness: Makes subject blinded or deafened.",
      "Contagion: Infects subject with chosen disease.",
      "Continual FlameM: Makes a permanent, heatless light.",
      "Create Food and Water: Feeds three humans (or one horse)/level.",
      "Cure Serious Wounds: Cures 3d8 damage + 1/level (max +15).",
      "Daylight: 60-ft. radius of bright light.",
      "Deeper Darkness: Object sheds supernatural shadow in 60-ft. radius.",
      "Dispel Magic: Cancels one magical spell or effect.",
      "Glyph of WardingM: Inscription harms those who pass it.",
      "Helping Hand: Ghostly hand leads subject to you.",
      "Inflict Serious Wounds: Touch attack, 3d8 damage + 1/level (max +15).",
      "Invisibility Purge: Dispels invisibility within 5 ft./level.",
      "Locate Object: Senses direction toward object (specific or type).",
      "Magic Circle against Chaos/Evil/Good/Law: As protection spells, but 10-ft. radius and 10 min./level.",
      "Magic Vestment: Armor or shield gains +1 enhancement per four levels.",
      "Meld into Stone: You and your gear merge with stone.",
      "Obscure Object: Masks object against scrying.",
      "Prayer: Allies get +1 bonus on most rolls, enemies –1 penalty.",
      "Protection from Energy: Absorb 12 points/level of damage from one kind of energy.",
      "Remove Blindness/Deafness: Cures normal or magical blindness or deafness.",
      "Remove Curse: Frees object or person from curse.",
      "Remove Disease: Cures all diseases affecting subject.",
      "Searing Light: Ray deals 1d8/two levels damage (more against undead).",
      "Speak with Dead: Corpse answers one question/two levels.",
      "Stone Shape: Sculpts stone into any shape.",
      "Summon Monster III: Summons extraplanar creature to fight for you.",
      "Water Breathing: Subjects can breathe underwater.",
      "Water Walk: Subject treads on water as if solid.",
      "Wind Wall: Deflects arrows, smaller creatures, and gases."
      ],
      4: [
      "Air Walk: Subject treads on air as if solid (climb or descend at 45-degree angle).",
      "Chaos Hammer: Harms and slows lawful creatures (1d8 damage/2 levels).",
      "Control Water: Raises or lowers bodies of water.",
      "Cure Critical Wounds: Cures 4d8 damage + 1/level (max +20).",
      "Death Ward: Grants bonuses against death spells and negative energy.",
      "Dimensional Anchor: Bars extradimensional movement.",
      "Discern Lies: Reveals deliberate falsehoods.",
      "Dismissal: Forces a creature to return to native plane.",
      "DivinationM: Provides useful advice for specific proposed actions.",
      "Divine Power: You gain attack bonuses and 1 hp/level.",
      "Freedom of Movement: Subject moves normally despite impediments to movement.",
      "Giant Vermin: Turns centipedes, scorpions, or spiders into giant vermin.",
      "Holy Smite: Harms and possibly blinds evil creatures (1d8 damage/2 levels).",
      "Imbue with Spell Ability: Transfer spells to subject.",
      "Inflict Critical Wounds: Touch attack, 4d8 damage + 1/level (max +20).",
      "Magic Weapon, Greater: Weapon gains +1 bonus/four levels (max +5).",
      "Neutralize Poison: Immunizes subject against poison, detoxifies venom in or on subject.",
      "Order's Wrath: Harms and dazes chaotic creatures (1d8 damage/2 levels).",
      "Planar Ally, LesserM: Exchange services with a 6 HD extraplanar creature.",
      "Poison: Touch deals 1d3 Con damage 1/round for 6 rounds.",
      "Repel Vermin: Insects, spiders, and other vermin stay 10 ft. away.",
      "RestorationM: Restores level and ability score drains.",
      "Sending: Delivers short message anywhere, instantly.",
      "Spell Immunity: Subject is immune to one spell per 4 levels.",
      "Summon Monster IV: Summons extraplanar creature to fight for you.",
      "Tongues: Speak and understand any language.",
      "Unholy Blight: Harms and sickens good creatures (1d8 damage/2 levels).",
      ],
      5: [
      "AtonementFM: Removes burden of misdeeds from subject and reverses magical alignment change.",
      "Break Enchantment: Frees subjects from enchantments, transmutations, and curses.",
      "Breath of Life: Cures 5d8 damage + 1/level and restores life to recently slain creatures.",
      "Command, Greater: As command, but affects one subject/level.",
      "CommuneM: Deity answers one yes-or-no question/level.",
      "Cure Light Wounds, Mass: Cures 1d8 damage + 1/level, affects 1 subject/level.",
      "Dispel Chaos/Evil/Good/Law: +4 bonus against attacks.",
      "Disrupting Weapon: Melee weapon destroys undead.",
      "Flame Strike: Smites foes with divine fire (1d6/level damage).",
      "HallowM: Designates location as holy.",
      "Inflict Light Wounds, Mass: Deals 1d8 damage + 1/level, affects 1 subject/level.",
      "Insect Plague: Wasp swarms attack creatures.",
      "Mark of Justice: Designates action that triggers curse on subject.",
      "Plane ShiftF: As many as 8 subjects travel to another plane.",
      "Raise DeadM: Restores life to subject who died as long as one day/level ago.",
      "Righteous Might: Your size increases, and you gain bonuses in combat.",
      "ScryingF: Spies on subject from a distance.",
      "Slay Living: Touch attack deals 12d6 + 1 per level.",
      "Spell Resistance: Subject gains SR 12 + level.",
      "Summon Monster V: Summons extraplanar creature to fight for you.",
      "Symbol of PainM: Triggered rune wracks nearby creatures with pain.",
      "Symbol of SleepM: Triggered rune puts nearby creatures into catatonic slumber.",
      "True SeeingM: Lets you see all things as they really are.",
      "UnhallowM: Designates location as unholy.",
      "Wall of Stone: Creates a stone wall that can be shaped.",
      ],
      6: [
      "Animate Objects: Objects attack your foes.",
      "Antilife Shell: 10-ft.-radius field hedges out living creatures.",
      "Banishment: Banishes 2 HD/level of extraplanar creatures.",
      "Bear's Endurance, Mass: As bear's endurance, affects 1 subject/level.",
      "Blade Barrier: Wall of blades deals 1d6/level damage.",
      "Bull's Strength, Mass: As bull's strength, affects 1 subject/level.",
      "Create UndeadM: Create ghasts, ghouls, mohrgs, or mummies.",
      "Cure Moderate Wounds, Mass: Cures 2d8 damage + 1/level, affects 1 subject/level.",
      "Dispel Magic, Greater: As dispel magic, but with multiple targets.",
      "Eagle's Splendor, Mass: As eagle's splendor, affects 1 subject/level.",
      "Find the Path: Shows most direct way to a location.",
      "ForbiddanceM: Blocks planar travel, damages creatures of different alignment.",
      "Geas/Quest: As lesser geas, but affects any creature.",
      "Glyph of Warding, GreaterM: As glyph of warding, but up to 10d8 damage or 6th-level spell.",
      "Harm: Deals 10 points/level damage to target.",
      "Heal: Cures 10 points/level damage, all diseases and mental conditions.",
      "Heroes' Feast: Food for one creature/level cures and grants combat bonuses.",
      "Inflict Moderate Wounds, Mass: Deals 2d8 damage + 1/level, affects 1 subject/level.",
      "Owl's Wisdom, Mass: As owl's wisdom, affects 1 subject/level.",
      "Planar AllyM: As lesser planar ally, but up to 12 HD.",
      "Summon Monster VI: Summons extraplanar creature to fight for you.",
      "Symbol of FearM: Triggered rune panics nearby creatures.",
      "Symbol of PersuasionM: Triggered rune charms nearby creatures.",
      "Undeath to DeathM: Destroys 1d4 HD/level undead (max. 20d4).",
      "Wind Walk: You and your allies turn vaporous and travel fast.",
      "Word of Recall: Teleports you back to designated place.",
      ],
      7: [
      "Blasphemy: Kills, paralyzes, weakens, or dazes nonevil subjects.",
      "Control Weather: Changes weather in local area.",
      "Cure Serious Wounds, Mass: Cures 3d8 damage + 1/level, affects 1 subject/level.",
      "DestructionF: Kills subject and destroys remains.",
      "Dictum: Kills, paralyzes, staggers, or deafens nonlawful targets.",
      "Ethereal Jaunt: You become ethereal for 1 round/level.",
      "Holy Word: Kills, paralyzes, blinds, or deafens nongood subjects.",
      "Inflict Serious Wounds, Mass: Deals 3d8 damage + 1/level, affects 1 subject/level.",
      "RefugeM: Alters item to transport its possessor to you.",
      "Regenerate: Subject's severed limbs grow back, cures 4d8 damage +1/level (max +35).",
      "Repulsion: Creatures can't approach you.",
      "Restoration, GreaterM: As restoration, plus restores all levels and ability scores.",
      "ResurrectionM: Fully restore dead subject.",
      "Scrying, Greater: As scrying, but faster and longer.",
      "Summon Monster VII: Summons extraplanar creature to fight for you.",
      "Symbol of StunningM: Triggered rune stuns nearby creatures.",
      "Symbol of WeaknessM: Triggered rune weakens nearby creatures.",
      "Word of Chaos: Kills, confuses, stuns, or deafens nonchaotic subjects.",
      ],
      8: [
      "Antimagic Field: Negates magic within 10 ft.",
      "Cloak of ChaosF: +4 to AC, +4 resistance, and SR 25 against lawful spells.",
      "Create Greater UndeadM: Create shadows, wraiths, spectres, or devourers.",
      "Cure Critical Wounds, Mass: Cures 4d8 damage + 1/level for many creatures.",
      "Dimensional Lock: Teleportation and interplanar travel blocked for 1 day/level.",
      "Discern Location: Reveals exact location of creature or object.",
      "Earthquake: Intense tremor shakes 80-ft. radius.",
      "Fire Storm: Deals 1d6/level fire damage.",
      "Holy AuraF: +4 to AC, +4 resistance, and SR 25 against evil spells.",
      "Inflict Critical Wounds, Mass: Deals 4d8 damage + 1/level, affects 1 subject/level.",
      "Planar Ally, GreaterM: As lesser planar ally, but up to 18 HD.",
      "Shield of LawF: +4 to AC, +4 resistance, and SR 25 against chaotic spells.",
      "Spell Immunity, Greater: As spell immunity, but up to 8th-level spells.",
      "Summon Monster VIII: Summons extraplanar creature to fight for you.",
      "Symbol of DeathM: Triggered rune kills nearby creatures.",
      "Symbol of InsanityM: Triggered rune renders nearby creatures insane.",
      "Unholy AuraF: +4 to AC, +4 resistance, and SR 25 against good spells.",
      ],
      9: [
      "Astral ProjectionM: Projects you and others onto Astral Plane.",
      "Energy Drain: Subject gains 2d4 negative levels.",
      "Etherealness: Travel to Ethereal Plane with companions.",
      "GateM: Connects two planes for travel or summoning.",
      "Heal, Mass: As heal, but affects 1 subject/level.",
      "Implosion: Inflict 10 damage/level to one creature/round.",
      "MiracleM: Requests a deity's intercession.",
      "Soul BindF: Traps newly dead soul to prevent resurrection.",
      "Storm of Vengeance: Storm rains acid, lightning, and hail.",
      "Summon Monster IX: Summons extraplanar creature to fight for you.",
      "True ResurrectionM: As resurrection, plus remains aren't needed.",
      ]
    },
    /* =============== */
    /* Table: Druid    */
    /* =============== */
    druid: {
      0: [
      "Create Water: Creates 2 gallons/level of pure water.",
      "Detect Magic: Detects spells and magic items within 60 ft.",
      "Detect Poison: Detects poison in one creature or object.",
      "Flare: Dazzles one creature (–1 penalty on attack rolls).",
      "Guidance: +1 on one attack roll, saving throw, or skill check.",
      "Know Direction: You discern north.",
      "Light: Object shines like a torch.",
      "Mending: Makes minor repairs on an object.",
      "Purify Food and Drink: Purifies 1 cu. ft./level of food or water.",
      "Read Magic: Read scrolls and spellbooks.",
      "Resistance: Subject gains +1 bonus on saving throws.",
      "Stabilize: Cause a dying creature to stabilize.",
      "Virtue: Subject gains 1 temporary hp.",
      ],
      1: [
      "Calm Animals: Calms 2d4 + level HD of animals.",
      "Charm Animal: Makes one animal your friend.",
      "Cure Light Wounds: Cures 1d8 damage + 1/level (max +5).",
      "Detect Animals or Plants: Detects kinds of animals or plants.",
      "Detect Snares and Pits: Reveals natural or primitive traps.",
      "Endure Elements: Exist comfortably in hot or cold regions.",
      "Entangle: Plants entangle everyone in 40-ft. radius.",
      "Faerie Fire: Outlines subjects with light, canceling blur, concealment, and the like.",
      "Goodberry: 2d4 berries each cure 1 hp (max 8 hp/24 hours).",
      "Hide from Animals: Animals can't perceive one subject/level.",
      "Jump: Subject gets bonus on Acrobatics checks.",
      "Longstrider: Your speed increases by 10 ft.",
      "Magic Fang: One natural weapon of subject creature gets +1 on attack and damage rolls.",
      "Magic Stone: Three stones gain +1 on attack rolls, deal 1d6+1 damage.",
      "Obscuring Mist: Fog surrounds you.",
      "Pass without Trace: One subject/level leaves no tracks.",
      "Produce Flame: 1d6 damage + 1/level, touch or thrown.",
      "Shillelagh: Cudgel or quarterstaff becomes +1 weapon (2d6 damage) for 1 min./level.",
      "Speak with Animals: You can communicate with animals.",
      "Summon Nature's Ally I: Summons creature to fight.",
      ],
      2: [
      "Animal Messenger: Sends a Tiny animal to a specific place.",
      "Animal Trance: Fascinates 2d6 HD of animals.",
      "Barkskin: Grants +2 (or higher) enhancement to natural armor.",
      "Bear's Endurance: Subject gains +4 to Con for 1 min./level.",
      "Bull's Strength: Subject gains +4 to Str for 1 min./level.",
      "Cat's Grace: Subject gains +4 to Dex for 1 min./level.",
      "Chill Metal: Cold metal damages those who touch it.",
      "Delay Poison: Stops poison from harming subject for 1 hour/level.",
      "Fire TrapM: Opened object deals 1d4 + 1/level damage.",
      "Flame Blade: Touch attack deals 1d8 + 1/two levels damage.",
      "Flaming Sphere: Rolling ball of fire deals 3d6 fire damage.",
      "Fog Cloud: Fog obscures vision.",
      "Gust of Wind: Blows away or knocks down smaller creatures.",
      "Heat Metal: Makes metal so hot it damages those who touch it.",
      "Hold Animal: Paralyzes one animal for 1 round/level.",
      "Owl's Wisdom: Subject gains +4 to Wis for 1 min./level.",
      "Reduce Animal: Shrinks one willing animal.",
      "Resist Energy: Ignores 10 or more points of damage per attack from specified energy type.",
      "Restoration, Lesser: Dispels magical ability penalty or repairs 1d4 ability damage.",
      "Soften Earth and Stone: Turns stone to clay, or dirt to sand or mud.",
      "Spider Climb: Grants ability to walk on walls and ceilings.",
      "Summon Nature's Ally II: Summons creature to fight.",
      "Summon Swarm: Summons swarm of bats, rats, or spiders.",
      "Tree Shape: You look exactly like a tree for 1 hour/level.",
      "Warp Wood: Bends wood.",
      "Wood Shape: Reshapes wooden objects to suit you.",
      ],
      3: [
      "Call Lightning: Calls down lightning bolts (3d6 per bolt) from sky.",
      "Contagion: Infects subject with chosen disease.",
      "Cure Moderate Wounds: Cures 2d8 damage + 1/level (max +10).",
      "Daylight: 60-ft. radius of bright light.",
      "Diminish Plants: Reduces size or blights the growth of normal plants.",
      "Dominate Animal: One animal obeys your silent mental commands and orders.",
      "Magic Fang, Greater: One natural weapon gets + 1/four levels (max +5).",
      "Meld into Stone: You and your gear merge with stone.",
      "Neutralize Poison: Immunizes subject against poison, detoxifies venom in or on subject.",
      "Plant Growth: Grows vegetation, improves crops.",
      "Poison: Touch deals 1d3 Con damage 1/round for 6 rounds.",
      "Protection from Energy: Absorbs 12 points/level of damage from one kind of energy.",
      "Quench: Extinguishes fires.",
      "Remove Disease: Cures all diseases affecting subject.",
      "Sleet Storm: Hampers vision and movement.",
      "Snare: Creates a magic booby trap.",
      "Speak with Plants: You can talk to plants and plant creatures.",
      "Spike Growth: Creatures in area take 1d4 damage, may be slowed.",
      "Stone Shape: Sculpts stone into any shape.",
      "Summon Nature's Ally III: Summons creature to fight.",
      "Water Breathing: Subjects can breathe underwater.",
      "Wind Wall: Deflects arrows, smaller creatures, and gases.",
      ],
      4: [
      "Air Walk: Subject treads on air as if solid (climb or descend at 45-degree angle).",
      "Antiplant Shell: Keeps animated plants at bay.",
      "Blight: Withers one plant or deals 1d6/level damage to plant creature.",
      "Command Plants: Sways the actions of plant creatures.",
      "Control Water: Raises or lowers bodies of water.",
      "Cure Serious Wounds: Cures 3d8 damage + 1/level (max +15).",
      "Dispel Magic: Cancels one magical spell or effect.",
      "Flame Strike: Smites foes with divine fire (1d6/level damage).",
      "Freedom of Movement: Subject moves normally despite impediments to movement.",
      "Giant Vermin: Turns centipedes, scorpions, or spiders into giant vermin.",
      "Ice Storm: Hail deals 5d6 damage in cylinder 40 ft. across.",
      "Reincarnate: Brings dead subject back in a random body.",
      "Repel Vermin: Insects, spiders, and other vermin stay 10 ft. away.",
      "Rusting Grasp: Your touch corrodes iron and alloys.",
      "ScryingF: Spies on subject from a distance.",
      "Spike Stones: Creatures in area take 1d8 damage, may also be slowed.",
      "Summon Nature's Ally IV: Summons creature to fight.",
      ],
      5: [
      "Animal Growth: One animal doubles in size.",
      "AtonementFM: Removes burden of misdeeds from subject.",
      "AwakenM: Animal or tree gains human intellect.",
      "Baleful Polymorph: Transforms subject into harmless animal.",
      "Call Lightning Storm: As call lightning, but 5d6 damage per bolt.",
      "Commune with Nature: Learn about terrain for 1 mile/level.",
      "Control Winds: Changes wind direction and speed.",
      "Cure Critical Wounds: Cures 4d8 damage + 1/level (max +20).",
      "Death Ward: Grants bonuses against death spells and negative energy.",
      "HallowM: Designates location as holy.",
      "Insect Plague: Wasp swarms attack creatures.",
      "StoneskinM: Grants DR 10/adamantine.",
      "Summon Nature's Ally V: Summons creature to fight.",
      "Transmute Mud to Rock: Transforms two 10-ft. cubes per level.",
      "Transmute Rock to Mud: Transforms two 10-ft. cubes per level.",
      "Tree Stride: Step from one tree to another far away.",
      "UnhallowM: Designates location as unholy.",
      "Wall of Fire: Deals 2d4 fire damage out to 10 ft. and 1d4 out to 20 ft. Passing through wall deals 2d6 damage +1/level.",
      "Wall of Thorns: Thorns damage anyone who tries to pass.",
      ],
      6: [
      "Antilife Shell: 10-ft.-radius field hedges out living creatures.",
      "Bear's Endurance, Mass: As bear's endurance, affects 1 subject/level.",
      "Bull's Strength, Mass: As bull's strength, affects 1 subject/level.",
      "Cat's Grace, Mass: As cat's grace, affects one subject/level.",
      "Cure Light Wounds, Mass: Cures 1d8 damage + 1/level, affects 1 subject/level.",
      "Dispel Magic, Greater: As dispel magic, but with multiple targets.",
      "Find the Path: Shows most direct way to a location.",
      "Fire Seeds: Acorns and berries become grenades and bombs.",
      "Ironwood: Magic wood is as strong as steel.",
      "Liveoak: Oak becomes treant guardian.",
      "Move Earth: Digs trenches and builds hills.",
      "Owl's Wisdom, Mass: As owl's wisdom, affects 1 subject/level.",
      "Repel Wood: Pushes away wooden objects.",
      "Spellstaff: Stores one spell in wooden quarterstaff.",
      "Stone Tell: Talk to natural or worked stone.",
      "Summon Nature's Ally VI: Summons creature to fight.",
      "Transport via Plants: Move instantly from one plant to another of the same kind.",
      "Wall of Stone: Creates a stone wall that can be shaped.",
      ],
      7: [
      "Animate Plants: One or more plants animate and fight for you.",
      "Changestaff: Your staff becomes a treant on command.",
      "Control Weather: Changes weather in local area.",
      "Creeping Doom: Swarms of centipedes attack at your command.",
      "Cure Moderate Wounds, Mass: Cures 2d8 damage + 1/level, affects 1 subject/level.",
      "Fire Storm: Deals 1d6/level fire damage.",
      "Heal: Cures 10 points/level damage, all diseases and mental conditions.",
      "Scrying, Greater: As scrying, but faster and longer.",
      "Summon Nature's Ally VII: Summons creature to fight.",
      "Sunbeam: Beam blinds and deals 4d6 damage.",
      "Transmute Metal to Wood: Metal within 40 ft. becomes wood.",
      "True SeeingM: Lets you see all things as they really are.",
      "Wind Walk: You and your allies turn vaporous and travel fast.",
      ],
      8: [
      "Animal Shapes: One ally/level polymorphs into chosen animal.",
      "Control Plants: Controls actions of one or more plant creatures.",
      "Cure Serious Wounds, Mass: Cures 3d8 damage + 1/level, affects 1 subject/level.",
      "Earthquake: Intense tremor shakes 80-ft.-radius.",
      "Finger of Death: Deals 10 damage/level to one subject.",
      "Repel Metal or Stone: Pushes away metal and stone.",
      "Reverse Gravity: Objects and creatures fall upward.",
      "Summon Nature's Ally VIII: Summons creature to fight.",
      "Sunburst: Blinds all within 10 ft., deals 6d6 damage.",
      "Whirlwind: Cyclone deals damage and can pick up creatures.",
      "Word of Recall: Teleports you back to designated place.",
      ],
      9: [
      "Antipathy: Object or location affected by spell repels certain creatures.",
      "Cure Critical Wounds, Mass: Cures 4d8 damage + 1/level for many creatures.",
      "Elemental Swarm: Summons multiple elementals.",
      "Foresight: “Sixth sense” warns of impending danger.",
      "Regenerate: Subject's severed limbs grow back, cures 4d8 damage +1/level (max +35).",
      "Shambler: Creates 1d4+2 shambling mounds to fight for you.",
      "ShapechangeF: Transforms you into certain creatures, and you can change forms once per round.",
      "Storm of Vengeance: Storm rains acid, lightning, and hail.",
      "Summon Nature's Ally IX: Summons creature to fight.",
      "SympathyM: Object or location attracts certain creatures.",
      ]
    },
    /* =============== */
    /* Table: Paladin  */
    /* =============== */
    paladin: {
      1: [
      "Bless: Allies gain +1 on attack rolls and saves against fear.",
      "Bless WaterM: Makes holy water.",
      "Bless Weapon: Weapon strikes true against evil foes.",
      "Create Water: Creates 2 gallons/level of pure water.",
      "Cure Light Wounds: Cures 1d8 damage + 1/level (max +5).",
      "Detect Poison: Detects poison in one creature or small object.",
      "Detect Undead: Reveals undead within 60 ft.",
      "Divine Favor: You gain +1 per three levels on attack and damage rolls.",
      "Endure Elements: Exist comfortably in hot or cold regions.",
      "Magic Weapon: Weapon gains +1 bonus.",
      "Protection from Chaos/Evil: +2 to AC and saves, plus additional protection against selected alignment.",
      "Read Magic: Read scrolls and spellbooks.",
      "Resistance: Subject gains +1 on saving throws.",
      "Restoration, Lesser: Dispels magical ability penalty or repairs 1d4 ability damage.",
      "Virtue: Subject gains 1 temporary hp.",
      ],
      2: [
      "Bull's Strength: Subject gains +4 to Str for 1 min./level.",
      "Delay Poison: Stops poison from harming subject for 1 hour/level.",
      "Eagle's Splendor: Subject gains +4 to Cha for 1 min./level.",
      "Owl's Wisdom: Subject gains +4 to Wis for 1 min./level.",
      "Remove Paralysis: Frees one or more creatures from paralysis or slow effect.",
      "Resist Energy: Ignores 10 or more points of damage per attack from specified energy type.",
      "Shield OtherF: You take half of subject's damage.",
      "Undetectable Alignment: Conceals alignment from magical detection for 24 hours.",
      "Zone of Truth: Subjects within range cannot lie.",
      ],
      3: [
      "Cure Moderate Wounds: Cures 2d8 damage +1/level (max. +10).",
      "Daylight: 60-ft. radius of bright light.",
      "Discern Lies: Reveals deliberate falsehoods.",
      "Dispel Magic: Cancels one magical spell or effect.",
      "Heal Mount: As heal on horse or other special mount.",
      "Magic Circle against Chaos/Evil: As protection from chaos, but 10-ft. radius and 10 min./level.",
      "Magic Weapon, Greater: Weapon gains +1 bonus/four levels (max +5).",
      "Prayer: Allies get +1 bonus on most rolls, enemies –1 penalty.",
      "Remove Blindness/Deafness: Cures normal or magical blindness or deafness.",
      "Remove Curse: Frees object or person from curse.",
      ],
      4: [
      "Break Enchantment: Frees subjects from enchantments, transmutations, and curses.",
      "Cure Serious Wounds: Cures 3d8 damage + 1/level (max +15).",
      "Death Ward: Grants bonuses against death spells and negative energy.",
      "Dispel Chaos: +4 bonus against attacks by chaotic creatures.",
      "Dispel Evil: +4 bonus against attacks by evil creatures.",
      "Holy Sword: Weapon becomes +5, deals +2d6 damage against evil.",
      "Mark of Justice: Designates action that triggers curse on subject.",
      "Neutralize Poison: Immunizes subject against poison, detoxifies venom in or on subject.",
      "RestorationM: Restores level and ability score drains.",
      ]
    },
    /* =============== */
    /* Table: Ranger   */
    /* =============== */
    ranger: {
      1: [
      "Alarm: Wards an area for 2 hours/level.",
      "Animal Messenger: Sends a Tiny animal to a specific place.",
      "Calm Animals: Calms 2d4 + level HD of animals.",
      "Charm Animal: Makes one animal your friend.",
      "Delay Poison: Stops poison from harming subject for 1 hour/level.",
      "Detect Animals or Plants: Detects kinds of animals or plants.",
      "Detect Poison: Detects poison in one creature or object.",
      "Detect Snares and Pits: Reveals natural or primitive traps.",
      "Endure Elements: Exist comfortably in hot or cold regions.",
      "Entangle: Plants entangle everyone in 40-ft. radius.",
      "Hide from Animals: Animals can't perceive one subject/level.",
      "Jump: Subject gets bonus on Acrobatics checks.",
      "Longstrider: Your base speed increases by 10 ft.",
      "Magic Fang: One natural weapon of subject creature gets +1 on attack and damage rolls.",
      "Pass without Trace: One subject/level leaves no tracks.",
      "Read Magic: Read scrolls and spellbooks.",
      "Resist Energy: Ignores 10 (or more) points of damage/attack from specified energy type.",
      "Speak with Animals: You can communicate with animals.",
      "Summon Nature's Ally I: Summons creature to fight for you.",
      ],
      2: [
      "Barkskin: Grants +2 (or higher) enhancement to natural armor.",
      "Bear's Endurance: Subject gains +4 to Con for 1 min./level.",
      "Cat's Grace: Subject gains +4 to Dex for 1 min./level.",
      "Cure Light Wounds: Cures 1d8 damage + 1/level (max +5).",
      "Hold Animal: Paralyzes one animal for 1 round/level.",
      "Owl's Wisdom: Subject gains +4 to Wis for 1 min./level.",
      "Protection from Energy: Absorbs 12 points/level of damage from one kind of energy.",
      "Snare: Creates a magic booby trap.",
      "Speak with Plants: You can talk to plants and plant creatures.",
      "Spike Growth: Creatures in area take 1d4 damage, may be slowed.",
      "Summon Nature's Ally II: Summons creature to fight for you.",
      "Wind Wall: Deflects arrows, smaller creatures, and gases.",
      ],
      3: [
      "Command Plants: Sway the actions of plant creatures.",
      "Cure Moderate Wounds: Cures 2d8 damage +1/level (max. +10).",
      "Darkvision: See 60 ft. in total darkness.",
      "Diminish Plants: Reduces size or blights growth of normal plants.",
      "Magic Fang, Greater: One natural weapon gets + 1/four levels (max. +5).",
      "Neutralize Poison: Immunizes subject against poison, detoxifies venom in or on subject.",
      "Plant Growth: Grows vegetation, improves crops.",
      "Reduce Animal: Shrinks one willing animal.",
      "Remove Disease: Cures all diseases affecting subject.",
      "Repel Vermin: Insects, spiders, and other vermin stay 10 ft. away.",
      "Summon Nature's Ally III: Summons creature to fight for you.",
      "Tree Shape: You look exactly like a tree for 1 hour/level.",
      "Water Walk: Subject treads on water as if solid.",
      ],
      4: [
      "Animal Growth: One animal doubles in size.",
      "Commune with Nature: Learn about terrain for 1 mile/level.",
      "Cure Serious Wounds: Cures 3d8 damage + 1/level (max +15).",
      "Freedom of Movement: Subject moves normally despite impediments to movement.",
      "NondetectionM: Hides subject from divination, scrying.",
      "Summon Nature's Ally IV: Summons creature to fight for you.",
      "Tree Stride: Step from one tree to another far away.",
      ]
    },
    /* =============== */
    /* Table: Shaman   */
    /* =============== */
    shaman: {
      0: [
        "Arcane mark",
        "bleed",
        "create water",
        "dancing lights",
        "daze",
        "detect magic",
        "detect poison",
        "guidance",
        "know direction",
        "light",
        "mending",
        "purify food and drink",
        "read magic",
        "resistance",
        "stabilize",
        "touch of fatigue",
        "virtue"
      ],
      1: [
        "Bane",
        "blend",
        "bless",
        "burning hands",
        "calm animals",
        "cause fear",
        "charm animal",
        "charm person",
        "chill touch",
        "comprehend languages",
        "cure light wounds",
        "dancing lantern",
        "detect animals or plants",
        "detect chaos/evil/good/law",
        "detect undead",
        "discern next of kin",
        "doom",
        "endure elements",
        "entangle",
        "frostbite",
        "gentle breeze",
        "goodberry",
        "heightened awareness",
        "hex vulnerability",
        "hex ward",
        "hide from animals",
        "hydraulic push",
        "inflict light wounds",
        "magic stone",
        "magic weapon",
        "monkey fish",
        "obscuring mist",
        "pass without trace",
        "produce flame",
        "protection from chaos/evil/good/law",
        "remove fear",
        "sense spirit magic",
        "sleep",
        "stone shield",
        "thorn javelin",
        "wave shield"
      ],
      2: ["Aid", "alter self", "animal messenger", "animal purpose training", "animate dead (lesser)", "augury", "barkskin", "bear's endurance", "beastspeak", "bull's strength", "buoyancy", "burning gaze", "calm emotions", "commune with birds", "cure moderate wounds", "darkness", "delay poison", "eagle eye", "eagle's splendor", "enthrall", "false life", "flame blade", "focused scrutiny", "fog cloud", "gentle repose", "ghostbane dirge", "glide", "guiding star", "hold person", "imbue with elemental might", "inflict moderate wounds", "levitate", "life pact", "owl's wisdom", "remove paralysis", "resist energy", "restoration (lesser)", "scare", "shield companion", "sickening entanglement", "spiritual weapon", "summon swarm", "tree shape", "warp wood", "web shelter", "wood shape"
      ],
      3: ["Anchored step", "animate dead", "aura sight", "bestow curse", "blindness/deafness", "call lightning", "clairvoyance/clairaudience", "create food and water", "cure serious wounds", "daylight", "deep slumber", "deeper darkness", "dispel magic", "dominate animal", "fins to feet", "fly", "font of spirit magic", "hex glyph", "inflict serious wounds", "magic circle against chaos/evil/good/law", "magic vestment", "mantle of calm", "mindlocked messenger", "nauseating trail", "pierce disguise", "polymorph familiar", "protection from energy", "remove blindness/deafness", "remove curse", "sleet storm", "speak with dead", "speak with haunt", "stench of prey", "stinking cloud", "stone shape", "stricken heart", "thorny entanglement", "ward of the season", "water breathing", "water walk", "wind wall"
      ],
      4: ["Adjustable polymorph", "air geyser", "anti-incorporeal shell", "ball lightning", "command plants", "control water", "cure critical wounds", "curse of burning sleep", "detect scrying", "dismissal", "divination", "divine power", "earth glide", "false life (greater)", "familiar melding", "fear", "giant vermin", "ice storm", "imbue with spell ability", "inflict critical wounds", "magic weapon (greater)", "neutralize poison", "persistent vigor", "planar ally (lesser)", "poison", "rain of frogs", "reincarnate", "repel vermin", "restoration", "ride the waves", "sands of time", "scrying", "sending", "slowing mud", "solid fog", "spike stones", "spit venom", "thorn body", "tongues", "wandering star motes"
      ],
      5: ["Animal growth", "baleful polymorph", "blight", "break enchantment", "breath of life", "call lightning storm", "commune", "commune with nature", "control winds", "cure light wounds (mass)", "curse (major)", "dispel chaos/evil/good/law", "dominate person", "feast on fear", "flame strike", "ghostbane dirge (mass)", "grove of respite", "hex glyph (greater)", "inflict light wounds (mass)", "insect plague", "overland flight", "rest eternal", "stoneskin", "true seeing", "wall of fire", "wall of thorns"
      ],
      6: ["Antilife shell", "awaken", "banishment", "bear's endurance (mass)", "bull's strength (mass)", "cone of cold", "create undead", "cure moderate wounds (mass)", "dispel magic (greater)", "eagle's splendor (mass)", "find the path", "fire seeds", "flesh to stone", "inflict moderate wounds (mass)", "owl's wisdom (mass)", "planar ally", "raise dead", "slay living", "snake staff", "stone to flesh", "wall of stone"
      ],
      7: ["Animate plants", "cloak of dreams", "control weather", "creeping doom", "cure serious wounds (mass)", "fairy ring retreat", "harm", "heal", "ice body", "inflict serious wounds (mass)", "liveoak", "plane shift", "regenerate", "restoration (greater)", "scrying (greater)", "stone tell", "sunbeam", "transport via plants", "vision", "vortex", "wind walk"
      ],
      8: ["Animal shapes", "blood mist", "circle of clarity", "create greater undead", "cure critical wounds (mass)", "destruction", "discern location", "earthquake", "fire storm", "horrid wilting", "inflict critical wounds (mass)", "irresistible dance", "planar ally (greater)", "resurrection", "stormbolts", "sunburst", "whirlwind"
      ],
      9: ["Elemental swarm", "energy drain", "etherealness", "foresight", "heal (mass)", "polar midnight", "shambler", "shapechange", "soul bind", "storm of vengeance", "tsunami", "wail of the banshee", "winds of vengeance"
      ]
    }
  };
})();

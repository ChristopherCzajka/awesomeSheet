var display = (function() {

  var _displayContent = {
    basics: {
      intro: [{
        areaClass: ["m-display-intro"],
        type: "image",
        element: "div",
        classname: ["m-display-image-wrapper"],
        content: [{
          path: "basics.image.data",
          scale: "basics.image.scale",
          position: "basics.image.position",
          background: "basics.image.background",
          color: "basics.image.color"
        }]
      }, {
        type: "snippet",
        element: "h1",
        classname: ["m-display-name"],
        content: [{
          path: "basics.character.name"
        }, {
          path: "basics.classes.string"
        }]
      }],
      character: [{
        type: "snippet",
        element: "p",
        content: [{
          path: "basics.initiative.current",
          prefix: "Initiative",
          valueType: "bonus"
        }, {
          path: "basics.speed.land",
          prefix: "Land Speed"
        }, {
          path: "basics.speed.swim",
          prefix: "Swim Speed"
        }, {
          path: "basics.speed.climb",
          prefix: "Climb Speed"
        }, {
          path: "basics.speed.burrow",
          prefix: "Burrow Speed"
        }, {
          path: "basics.speed.fly",
          prefix: "Fly Speed",
          dependency: "basics.speed.maneuverability"
        }, {
          path: "basics.character.deity",
          prefix: "Deity"
        }, {
          path: "basics.character.gender",
          prefix: "Gender"
        }, {
          path: "basics.character.race",
          prefix: "Race"
        }, {
          path: "basics.experience.total",
          prefix: "EXP",
          valueType: "number"
        }, {
          path: "basics.character.alignment",
          prefix: "Alignment"
        }, {
          path: "basics.character.size.category",
          prefix: "Size"
        }, {
          path: "basics.character.height",
          prefix: "Height"
        }, {
          path: "basics.character.weight",
          prefix: "Weight"
        }, {
          path: "basics.character.age",
          prefix: "Age"
        }, {
          path: "basics.character.hero_points",
          prefix: "Hero Points"
        }]
      }],
      description: [{
        type: "block",
        element: "p",
        content: [{
          path: "basics.character.description",
          prefix: "Description"
        }]
      }]
    },
    statistics: {
      stats: [{
        type: "stat",
        element: "ul",
        content: [{
          statPath: "statistics.stats.str.current",
          modPath: "statistics.stats.str.modifier",
          prefix: "STR"
        }, {
          statPath: "statistics.stats.dex.current",
          modPath: "statistics.stats.dex.modifier",
          prefix: "DEX"
        }, {
          statPath: "statistics.stats.con.current",
          modPath: "statistics.stats.con.modifier",
          prefix: "CON"
        }, {
          statPath: "statistics.stats.int.current",
          modPath: "statistics.stats.int.modifier",
          prefix: "INT"
        }, {
          statPath: "statistics.stats.wis.current",
          modPath: "statistics.stats.wis.modifier",
          prefix: "WIS"
        }, {
          statPath: "statistics.stats.con.current",
          modPath: "statistics.stats.con.modifier",
          prefix: "CHA"
        }]
      }],
      abilities: [{
        type: "list",
        element: "ul",
        classname: ["m-display-list-dash"],
        head: "Abilities",
        content: [{
          path: "statistics.abilities.all",
        }]
      }, {
        type: "block",
        element: "p",
        content: [{
          path: "statistics.abilities.notes",
          prefix: "Abilities Notes"
        }]
      }],
      feats: [{
        type: "list",
        element: "ul",
        classname: ["m-display-list-dash"],
        head: "Feats",
        content: [{
          path: "statistics.feats.all",
        }]
      }, {
        type: "block",
        element: "p",
        content: [{
          path: "statistics.feats.notes",
          prefix: "Feats Notes"
        }]
      }],
      traits: [{
        type: "list",
        element: "ul",
        classname: ["m-display-list-dash"],
        head: "Traits",
        content: [{
          path: "statistics.traits.all",
        }]
      }, {
        type: "block",
        element: "p",
        content: [{
          path: "statistics.traits.notes",
          prefix: "Traits Notes"
        }]
      }],
      languages: [{
        type: "list",
        element: "ul",
        classname: ["m-display-list-dash"],
        head: "languages",
        content: [{
          path: "statistics.languages.all",
        }]
      }, {
        type: "block",
        element: "p",
        content: [{
          path: "statistics.languages.notes",
          prefix: "Languages Notes"
        }]
      }],
      power: [{
        type: "clone",
        element: "ul",
        cloneType: "power",
        classname: ["m-display-list-responsive"],
        head: "Powers",
        content: [{
          path: "statistics.power.all",
        }]
      }]
    },
    equipment: {
      gear: [{
        type: "block",
        element: "p",
        head: "Gear",
        content: [{
          path: "equipment.possessions.gear",
        }]
      }],
      magic_gear: [{
        type: "block",
        element: "p",
        head: "Magic Gear",
        content: [{
          path: "equipment.possessions.magic_gear",
        }]
      }],
      potion_viles_oils: [{
        type: "block",
        element: "p",
        head: "Potions/Viles/Oils",
        content: [{
          path: "equipment.possessions.potion_viles_oils",
        }]
      }],
      scrolls: [{
        type: "block",
        element: "p",
        head: "Scrolls",
        content: [{
          path: "equipment.possessions.scrolls",
        }]
      }],
      armor: [{
        type: "group",
        element: "ul",
        classname: ["m-display-list-responsive", "m-display-list-stack"],
        head: "Armor",
        content: [{
          path: "equipment.armor.armor",
          prefix: "Armor"
        }, {
          path: "equipment.armor.shield",
          prefix: "Shield"
        }]
      }],
      body_slots: [{
        type: "group",
        element: "ul",
        classname: ["m-display-list-stack", "m-display-list-responsive"],
        head: "Body Slots",
        content: [{
          path: "equipment.body_slots.belts",
          prefix: "Belts"
        }, {
          path: "equipment.body_slots.body",
          prefix: "Body"
        }, {
          path: "equipment.body_slots.chest",
          prefix: "Chest"
        }, {
          path: "equipment.body_slots.eyes",
          prefix: "Eyes"
        }, {
          path: "equipment.body_slots.feet",
          prefix: "Feet"
        }, {
          path: "equipment.body_slots.hands",
          prefix: "Hands"
        }, {
          path: "equipment.body_slots.head",
          prefix: "Head"
        }, {
          path: "equipment.body_slots.headband",
          prefix: "Headband"
        }, {
          path: "equipment.body_slots.neck",
          prefix: "Neck"
        }, {
          path: "equipment.body_slots.ring_left_hand",
          prefix: "Ring (Left Hand)"
        }, {
          path: "equipment.body_slots.ring_right_hand",
          prefix: "Ring (Right Hand)"
        }, {
          path: "equipment.body_slots.shoulders",
          prefix: "Shoulders"
        }, {
          path: "equipment.body_slots.wrist",
          prefix: "Wrist"
        }]
      }],
      item: [{
        type: "clone",
        element: "ul",
        cloneType: "item",
        classname: ["m-display-list-responsive", "m-display-list-compact"],
        head: "Items",
        content: [{
          path: "equipment.item.all",
        }]
      }],
      encumbrance: [{
        type: "snippet",
        element: "p",
        head: "Encumbrance",
        content: [{
          path: "equipment.encumbrance.carry_move.light",
          prefix: "Light"
        }, {
          path: "equipment.encumbrance.carry_move.medium",
          prefix: "Medium"
        }, {
          path: "equipment.encumbrance.carry_move.heavy",
          prefix: "Heavy"
        }, {
          path: "equipment.encumbrance.carry_move.lift",
          prefix: "Lift"
        }, {
          path: "equipment.encumbrance.carry_move.drag",
          prefix: "Drag"
        }]
      }],
      consumable: [{
        type: "clone",
        element: "p",
        cloneType: "consumable",
        classname: ["m-display-list-responsive"],
        head: "Consumables",
        content: [{
          path: "equipment.consumable.all",
          prefix: "Light"
        }]
      }],
      wealth: [{
        type: "snippet",
        element: "p",
        head: "Wealth",
        content: [{
          path: "equipment.wealth.platinum",
          suffix: "PP",
          valueType: "currency"
        }, {
          path: "equipment.wealth.gold",
          suffix: "GP",
          valueType: "currency"
        }, {
          path: "equipment.wealth.silver",
          suffix: "SP",
          valueType: "currency"
        }, {
          path: "equipment.wealth.copper",
          suffix: "CP",
          valueType: "currency"
        }]
      }, {
        type: "snippet",
        element: "h1",
        content: [{
          path: "equipment.wealth.total",
          prefix: "Total",
          suffix: "GP",
          valueType: "currency"
        }]
      }]
    },
    defense: {
      all: [{
        type: "snippet",
        element: "h1",
        content: [{
          path: "defense.hp.current",
          prefix: "HP",
          dependency: "defense.hp.total"
        }, {
          path: "defense.ac.armor_class.current",
          prefix: "AC"
        }, {
          path: "defense.ac.touch.current",
          prefix: "Touch"
        }, {
          path: "defense.ac.flat_footed.current",
          prefix: "Flat Footed"
        }, {
          path: "defense.cmd.current",
          prefix: "CMD"
        }, {
          path: "defense.dr.current",
          prefix: "DR",
          dependency: "defense.dr.overcome"
        }, {
          path: "defense.sr.current",
          prefix: "SR"
        }]
      }],
      saves: [{
        type: "snippet",
        element: "h1",
        content: [{
          path: "defense.saves.fortitude.current",
          prefix: "Fortitude",
          valueType: "bonus"
        }, {
          path: "defense.saves.reflex.current",
          prefix: "Reflex",
          valueType: "bonus"
        }, {
          path: "defense.saves.will.current",
          prefix: "Will",
          valueType: "bonus"
        }]
      }],
      notes: [{
        type: "block",
        element: "p",
        content: [{
          path: "defense.ac.notes",
          prefix: "AC Notes"
        }]
      }, {
        type: "block",
        element: "p",
        content: [{
          path: "defense.cmd.notes",
          prefix: "CMD Notes"
        }]
      }, {
        type: "block",
        element: "p",
        content: [{
          path: "defense.dr.notes",
          prefix: "Notes"
        }]
      }, {
        type: "block",
        element: "p",
        content: [{
          path: "defense.sr.notes",
          prefix: "Notes"
        }]
      }, {
        type: "block",
        element: "p",
        content: [{
          path: "defense.saves.notes",
          prefix: "Saves Notes"
        }]
      }]
    },
    offense: {
      all: [{
        type: "snippet",
        element: "h1",
        content: [{
          path: "offense.stats.melee.current",
          prefix: "Melee",
          valueType: "bonus"
        }, {
          path: "offense.stats.ranged.current",
          prefix: "Ranged",
          valueType: "bonus"
        }, {
          path: "offense.cmb.current",
          prefix: "CMB",
          valueType: "bonus"
        }]
      }],
      notes: [{
        type: "block",
        element: "p",
        content: [{
          path: "offense.attack.notes",
          prefix: "Attack Notes"
        }]
      }],
      melee: [{
        type: "clone",
        element: "ul",
        cloneType: "attack",
        classname: ["m-display-list-attack"],
        head: "Melee",
        content: [{
          path: "offense.attack.melee.all",
        }]
      }],
      ranged: [{
        type: "clone",
        element: "ul",
        cloneType: "attack",
        classname: ["m-display-list-attack"],
        head: "Ranged",
        content: [{
          path: "offense.attack.ranged.all",
        }]
      }]
    },
    skills: {
      all: [{
        type: "skills",
        element: "ul",
        classname: ["m-display-list-responsive"],
        content: [{
          path: "skills.default",
          skillType: "default"
        }, {
          path: "skills.custom.all",
          skillType: "custom"
        }]
      }]
    },
    spells: {
      stats: [{
        type: "snippet",
        element: "h1",
        head: "Stats",
        content: [{
          path: "spells.stats.concentration.current",
          prefix: "Concentration"
        }, {
          path: "spells.stats.caster_level_check.current",
          prefix: "Caster Level Check"
        }]
      }, {
        type: "snippet",
        element: "p",
        content: [{
          path: "spells.stats.school",
          prefix: "School"
        }, {
          path: "spells.stats.opposition",
          prefix: "Opposition"
        }, {
          path: "spells.stats.domains",
          prefix: "Domains"
        }, {
          path: "spells.stats.bloodline",
          prefix: "Bloodline"
        }]
      }, {
        type: "block",
        element: "p",
        content: [{
          path: "spells.stats.notes",
          prefix: "Spells Notes"
        }]
      }],
      level_0: [{
        type: "snippet",
        element: "p",
        head: "Level 0",
        content: [{
          path: "spells.book.level_0.known",
          prefix: "Known"
        }, {
          path: "spells.book.level_0.per_day",
          prefix: "Per Day"
        }, {
          path: "spells.book.level_0.bonus",
          prefix: "Bonus"
        }, {
          path: "spells.book.level_0.dc.current",
          prefix: "DC"
        }]
      }, {
        type: "spells",
        element: "ul",
        level: 0,
        classname: ["m-display-list-spell"],
        content: [{
          path: "spells.book.level_0.all",
        }]
      }],
      level_1: [{
        type: "snippet",
        element: "p",
        head: "Level 1",
        content: [{
          path: "spells.book.level_1.known",
          prefix: "Known"
        }, {
          path: "spells.book.level_1.per_day",
          prefix: "Per Day"
        }, {
          path: "spells.book.level_1.bonus",
          prefix: "Bonus"
        }, {
          path: "spells.book.level_1.dc.current",
          prefix: "DC"
        }]
      }, {
        type: "spells",
        element: "ul",
        level: 1,
        classname: ["m-display-list-spell"],
        content: [{
          path: "spells.book.level_1.all",
        }]
      }],
      level_2: [{
        type: "snippet",
        element: "p",
        head: "Level 2",
        content: [{
          path: "spells.book.level_2.known",
          prefix: "Known"
        }, {
          path: "spells.book.level_2.per_day",
          prefix: "Per Day"
        }, {
          path: "spells.book.level_2.bonus",
          prefix: "Bonus"
        }, {
          path: "spells.book.level_2.dc.current",
          prefix: "DC"
        }]
      }, {
        type: "spells",
        element: "ul",
        level: 2,
        classname: ["m-display-list-spell"],
        content: [{
          path: "spells.book.level_2.all",
        }]
      }],
      level_3: [{
        type: "snippet",
        element: "p",
        head: "Level 3",
        content: [{
          path: "spells.book.level_3.known",
          prefix: "Known"
        }, {
          path: "spells.book.level_3.per_day",
          prefix: "Per Day"
        }, {
          path: "spells.book.level_3.bonus",
          prefix: "Bonus"
        }, {
          path: "spells.book.level_3.dc.current",
          prefix: "DC"
        }]
      }, {
        type: "spells",
        element: "ul",
        level: 3,
        classname: ["m-display-list-spell"],
        content: [{
          path: "spells.book.level_3.all",
        }]
      }],
      level_4: [{
        type: "snippet",
        element: "p",
        head: "Level 4",
        content: [{
          path: "spells.book.level_4.known",
          prefix: "Known"
        }, {
          path: "spells.book.level_4.per_day",
          prefix: "Per Day"
        }, {
          path: "spells.book.level_4.bonus",
          prefix: "Bonus"
        }, {
          path: "spells.book.level_4.dc.current",
          prefix: "DC"
        }]
      }, {
        type: "spells",
        element: "ul",
        level: 4,
        classname: ["m-display-list-spell"],
        content: [{
          path: "spells.book.level_4.all",
        }]
      }],
      level_5: [{
        type: "snippet",
        element: "p",
        head: "Level 5",
        content: [{
          path: "spells.book.level_5.known",
          prefix: "Known"
        }, {
          path: "spells.book.level_5.per_day",
          prefix: "Per Day"
        }, {
          path: "spells.book.level_5.bonus",
          prefix: "Bonus"
        }, {
          path: "spells.book.level_5.dc.current",
          prefix: "DC"
        }]
      }, {
        type: "spells",
        element: "ul",
        level: 5,
        classname: ["m-display-list-spell"],
        content: [{
          path: "spells.book.level_5.all",
        }]
      }],
      level_6: [{
        type: "snippet",
        element: "p",
        head: "Level 6",
        content: [{
          path: "spells.book.level_6.known",
          prefix: "Known"
        }, {
          path: "spells.book.level_6.per_day",
          prefix: "Per Day"
        }, {
          path: "spells.book.level_6.bonus",
          prefix: "Bonus"
        }, {
          path: "spells.book.level_6.dc.current",
          prefix: "DC"
        }]
      }, {
        type: "spells",
        element: "ul",
        level: 6,
        classname: ["m-display-list-spell"],
        content: [{
          path: "spells.book.level_6.all",
        }]
      }],
      level_7: [{
        type: "snippet",
        element: "p",
        head: "Level 7",
        content: [{
          path: "spells.book.level_7.known",
          prefix: "Known"
        }, {
          path: "spells.book.level_7.per_day",
          prefix: "Per Day"
        }, {
          path: "spells.book.level_7.bonus",
          prefix: "Bonus"
        }, {
          path: "spells.book.level_7.dc.current",
          prefix: "DC"
        }]
      }, {
        type: "spells",
        element: "ul",
        level: 7,
        classname: ["m-display-list-spell"],
        content: [{
          path: "spells.book.level_7.all",
        }]
      }],
      level_8: [{
        type: "snippet",
        element: "p",
        head: "Level 8",
        content: [{
          path: "spells.book.level_8.known",
          prefix: "Known"
        }, {
          path: "spells.book.level_8.per_day",
          prefix: "Per Day"
        }, {
          path: "spells.book.level_8.bonus",
          prefix: "Bonus"
        }, {
          path: "spells.book.level_8.dc.current",
          prefix: "DC"
        }]
      }, {
        type: "spells",
        element: "ul",
        level: 8,
        classname: ["m-display-list-spell"],
        content: [{
          path: "spells.book.level_8.all",
        }]
      }],
      level_9: [{
        type: "snippet",
        element: "p",
        head: "Level 9",
        content: [{
          path: "spells.book.level_9.known",
          prefix: "Known"
        }, {
          path: "spells.book.level_9.per_day",
          prefix: "Per Day"
        }, {
          path: "spells.book.level_9.bonus",
          prefix: "Bonus"
        }, {
          path: "spells.book.level_9.dc.current",
          prefix: "DC"
        }]
      }, {
        type: "spells",
        element: "ul",
        level: 9,
        classname: ["m-display-list-spell"],
        content: [{
          path: "spells.book.level_9.all",
        }]
      }]
    },
    notes: {
      character: [{
        type: "clone",
        element: "ul",
        classname: ["m-display-list"],
        cloneType: "note",
        head: "Character",
        content: [{
          path: "notes.character.all",
        }]
      }],
      story: [{
        type: "clone",
        element: "ul",
        classname: ["m-display-list"],
        cloneType: "note",
        head: "Story",
        content: [{
          path: "notes.story.all",
        }]
      }]
    }
  };

  var state = (function() {
    var displayState = {
      basics: false,
      statistics: false,
      equipment: false,
      defense: false,
      offense: false,
      skills: false,
      spells: false,
      notes: false
    };
    var get = function(options) {
      var defaultOptions = {
        section: null,
        all: null
      };
      if (options) {
        defaultOptions = helper.applyOptions(defaultOptions, options);
      };
      if (defaultOptions.all != null && defaultOptions.all) {
        var displayOnCount = 0;
        var sectionCount = 0;
        for (var key in displayState) {
          sectionCount++;
          if (displayState[key]) {
            displayOnCount++;
          };
        };
        // if no sections are in display mode
        if (displayOnCount == 0) {
          return false;
          // if all sections are in display mode
        } else if (displayOnCount == sectionCount) {
          return true;
          // if more than half the number of sections are in display mode
        } else if (displayOnCount >= (sectionCount / 2)) {
          return true;
        } else {
          // else restore to edit mode
          return false;
        };
      } else if (defaultOptions.section != null) {
        return displayState[defaultOptions.section.id];
      } else {
        return displayState;
      };
    };
    var set = function(options) {
      var defaultOptions = {
        section: null,
        all: null
      };
      if (options) {
        defaultOptions = helper.applyOptions(defaultOptions, options);
      };
      if (defaultOptions.all != null && defaultOptions.all) {
        var displayOnCount = 0;
        var sectionCount = 0;
        for (var key in displayState) {
          sectionCount++;
          if (displayState[key]) {
            displayOnCount++;
          };
        };
        // if no sections are in display mode
        if (displayOnCount == 0) {
          for (var key in displayState) {
            displayState[key] = true;
          };
          // if all sections are in display mode
        } else if (displayOnCount == sectionCount) {
          for (var key in displayState) {
            displayState[key] = false;
          };
          // if more than half the number of sections are in display mode
        } else if (displayOnCount >= (sectionCount / 2)) {
          for (var key in displayState) {
            displayState[key] = true;
          };
        } else {
          // else restore to edit mode
          for (var key in displayState) {
            displayState[key] = false;
          };
        };
      } else if (defaultOptions.section != null) {
        if (displayState[defaultOptions.section.id]) {
          displayState[defaultOptions.section.id] = false;
        } else {
          displayState[defaultOptions.section.id] = true;
        };
      };
    };
    // exposed methods
    return {
      set: set,
      get: get
    };
  })();

  function bind() {
    _bind_fab();
  };

  function _bind_fab() {
    var fabButton = helper.e(".js-fab-button");
    fabButton.addEventListener("click", function() {
      totalBlock.render();
      clear();
      render();
      toggle({
        all: true
      });
      themeColor.update();
    }, false);
  };

  function toggle(options) {
    var defaultOptions = {
      section: null,
      all: null
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    if (defaultOptions.all != null && defaultOptions.all) {
      state.set({
        all: true
      });
      _toggle_all_section({
        all: true
      });
      _toggle_chrome();
    } else if (defaultOptions.section != null) {
      state.set({
        section: defaultOptions.section
      });
      _toggle_section({
        section: defaultOptions.section
      });
      _toggle_chrome();
    };
  };

  function _toggle_all_section(options) {
    var defaultOptions = {
      section: null,
      all: null
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    if (defaultOptions.all != null && defaultOptions.all) {
      var all_section = helper.eA(".js-section");
      all_section.forEach(function(arrayItem) {
        _toggle_section({
          section: arrayItem
        });
      });
    } else if (defaultOptions.section != null) {
      _toggle_section({
        section: defaultOptions.section
      });
    };
  };

  function _toggle_section(options) {
    var defaultOptions = {
      section: null
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    var display = defaultOptions.section.querySelector(".js-display");
    var icon = defaultOptions.section.querySelector(".js-card-toggle-icon");
    var edit = defaultOptions.section.querySelector(".js-edit");
    var cardTabs = defaultOptions.section.querySelector(".js-card-tabs");
    var minimise = (defaultOptions.section.dataset.minimise == "true");
    var _toggle_on = function() {
      helper.addClass(defaultOptions.section, "is-display-mode");
      helper.addClass(edit, "is-hidden");
      helper.removeClass(display, "is-hidden");
      helper.addClass(icon, "icon-edit");
      helper.removeClass(icon, "icon-reader");
      if (cardTabs && !minimise) {
        helper.addClass(cardTabs, "is-hidden");
      };
    };
    var _toggle_off = function() {
      helper.removeClass(defaultOptions.section, "is-display-mode");
      helper.removeClass(edit, "is-hidden");
      helper.addClass(display, "is-hidden");
      helper.removeClass(icon, "icon-edit");
      helper.addClass(icon, "icon-reader");
      if (cardTabs && !minimise) {
        helper.removeClass(cardTabs, "is-hidden");
      };
    };

    if (defaultOptions.section != null) {
      if (state.get({
          section: defaultOptions.section
        })) {
        _toggle_on();
      } else {
        _toggle_off();
      };
    };
  };

  function _toggle_chrome() {
    var header = helper.e(".js-header");
    var nav = helper.e(".js-nav");
    var menuElement = helper.e(".js-menu");
    var menuItem = helper.e(".js-menu-link-display-mode");
    var characterSelect = helper.e(".js-character-select");
    var shade = helper.e(".js-shade");
    var fab = helper.e(".js-fab");
    var fabButton = helper.e(".js-fab-button");
    var fabIcon = helper.e(".js-fab-icon");
    var all_section = helper.eA(".js-section");
    var anySectionDisplay = false;
    var allSectionDisplay = 0;
    var _toggle_on = function() {
      helper.addClass(fabIcon, "icon-edit");
      helper.removeClass(fabIcon, "icon-reader");
      helper.removeClass(fabButton, "button-primary");
      helper.addClass(fabButton, "button-secondary");
      helper.addClass(nav, "is-display-mode");
      helper.addClass(menuElement, "is-display-mode");
      helper.addClass(header, "is-display-mode");
      helper.addClass(characterSelect, "is-display-mode");
      if (shade) {
        helper.addClass(shade, "is-display-mode");
      };
      menu.toggleMenuItem({
        menuItem: menuItem,
        state: "active"
      });
    };
    var _toggle_off = function() {
      helper.removeClass(fabIcon, "icon-edit");
      helper.addClass(fabIcon, "icon-reader");
      helper.addClass(fabButton, "button-primary");
      helper.removeClass(fabButton, "button-secondary");
      helper.removeClass(nav, "is-display-mode");
      helper.removeClass(menuElement, "is-display-mode");
      helper.removeClass(header, "is-display-mode");
      helper.removeClass(characterSelect, "is-display-mode");
      if (shade) {
        helper.removeClass(shade, "is-display-mode");
      };
      menu.toggleMenuItem({
        menuItem: menuItem,
        state: "inactive"
      });
    };
    if (state.get({
        all: true
      })) {
      _toggle_on();
    } else {
      _toggle_off();
    };
  };

  function clear(display) {
    var _removeAllChildren = function(parent) {
      while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
      };
    };
    if (display) {
      var all_displayBlock = display.querySelectorAll(".js-display-block");
    } else {
      var all_displayBlock = helper.eA(".js-display-block");
    };
    all_displayBlock.forEach(function(arrayItem) {
      _removeAllChildren(arrayItem);
    });
  };

  function render(displayBlock) {
    _render_all_displayBlock(displayBlock);
    _render_all_placeholderDisplay();
  };

  function _render_all_displayBlock(displayBlock) {
    if (displayBlock) {
      _render_displayBlock(displayBlock);
    } else {
      var all_displayBlock = helper.eA(".js-display-block");
      all_displayBlock.forEach(function(arrayItem) {
        _render_displayBlock(arrayItem);
      });
    };
  };

  function _render_displayBlock(displayBlock) {
    var options = helper.makeObject(displayBlock.dataset.displayOptions);
    if (options) {
      options.sections.forEach(function(arrayItem) {

        var all_displayObject = helper.getObject({
          object: _displayContent,
          path: arrayItem
        });
        var displayArea = document.createElement("div");
        displayArea.setAttribute("class", "m-display-area");
        var displayAreaContent = false;

        all_displayObject.forEach(function(arrayItem, index) {
          if (arrayItem.areaClass) {
            arrayItem.areaClass.forEach(function(arrayItem) {
              helper.addClass(displayArea, arrayItem);
            });
          };
          var elementToAdd = _render_content(arrayItem);
          // console.log(options.sections, elementToAdd);
          if (elementToAdd) {
            if (elementToAdd.length > 0) {
              elementToAdd.forEach(function(arrayItem) {
                if (arrayItem) {
                  displayAreaContent = true;
                  displayArea.appendChild(arrayItem);
                };
              });
            };
          };
        });

        if (displayAreaContent) {
          displayBlock.appendChild(displayArea);
        };

      });
    };
  };

  function _render_content(displayObject) {
    var dataFormat = {
      number: function(data) {
        if (data > 0) {
          data = parseFloat(data).toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          });
        };
        return data;
      },
      bonus: function(data) {
        if (data > 0) {
          data = "+" + data;
        };
        return data;
      },
      currency: function(data) {
        data = parseFloat(data).toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });
        if (data.indexOf(".00") !== -1) {
          data = data.substr(0, data.indexOf("."));
        };
        return data;
      },
      weight: function(data) {
        data = parseFloat(data).toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });
        if (data.indexOf(".00") !== -1) {
          data = data.substr(0, data.indexOf("."));
        };
        return data;
      }
    };
    var createElement = {
      image: function(displayObject) {
        var all_element = [];
        var element = document.createElement(displayObject.element);
        if (displayObject.classname) {
          displayObject.classname.forEach(function(arrayItem) {
            helper.addClass(element, arrayItem);
          });
        };
        var contentFound = 0;
        displayObject.content.forEach(function(arrayItem, index) {
          var data = helper.getObject({
            object: sheet.get(),
            path: arrayItem.path
          });
          if (data != "") {
            contentFound++;
            var displayImageItem = new Image;
            displayImageItem.setAttribute("class", "m-display-image");
            displayImageItem.src = data;
            var scale = helper.getObject({
              object: sheet.get(),
              path: arrayItem.scale
            });
            var position = helper.getObject({
              object: sheet.get(),
              path: arrayItem.position
            });
            var background = helper.getObject({
              object: sheet.get(),
              path: arrayItem.background
            });
            var color;
            if (background == "black") {
              color = "rgb(0,0,0)";
            } else if (background == "white") {
              color = "rgb(255,255,255)";
            } else if (background == "average") {
              color = helper.getObject({
                object: sheet.get(),
                path: arrayItem.color
              });
              color = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
            };
            element.style.backgroundColor = color;
            displayImageItem.style.width = scale + "%";
            displayImageItem.style.left = position.x + "%";
            displayImageItem.style.top = position.y + "%";
            element.appendChild(displayImageItem);
          };
        });
        if (contentFound > 0) {
          all_element.push(element);
        } else {
          all_element.push(false);
        };
        return all_element;
      },
      snippet: function(displayObject) {
        var all_element = [];
        var element = document.createElement(displayObject.element);
        element.setAttribute("class", "m-display-snippet");
        if (displayObject.classname) {
          displayObject.classname.forEach(function(arrayItem) {
            helper.addClass(element, arrayItem);
          });
        };
        var contentFound = 0;
        if (displayObject.head) {
          var head = document.createElement("p");
          head.setAttribute("class", "m-display-head");
          head.textContent = displayObject.head;
        };
        displayObject.content.forEach(function(arrayItem, index) {
          var data = helper.getObject({
            object: sheet.get(),
            path: arrayItem.path
          });
          if (data != "") {
            if (arrayItem.valueType) {
              data = dataFormat[arrayItem.valueType](data);
            };
            if (arrayItem.dependency) {
              var dependencyData = helper.getObject({
                object: sheet.get(),
                path: arrayItem.dependency
              });
              if (dependencyData != "") {
                data = data + " / " + dependencyData;
              };
            };
            contentFound++;
            var snippet = document.createElement("span");
            snippet.setAttribute("class", "m-display-snippet-item");
            if (arrayItem.prefix) {
              var prefix = document.createElement("span");
              prefix.setAttribute("class", "m-display-prefix");
              prefix.textContent = arrayItem.prefix;
              snippet.appendChild(prefix);
            };
            var value = document.createElement("span");
            value.setAttribute("class", "m-display-value");
            value.textContent = data;
            snippet.appendChild(value);
            if (arrayItem.suffix) {
              var suffix = document.createElement("span");
              suffix.setAttribute("class", "m-display-suffix");
              suffix.textContent = arrayItem.suffix;
              snippet.appendChild(suffix);
            };
            element.appendChild(snippet);
          };
        });
        if (contentFound > 0) {
          if (head) {
            all_element.push(head);
          };
          all_element.push(element);
        } else {
          all_element.push(false);
        };
        return all_element;
      },
      block: function(displayObject) {
        var all_element = [];
        var element = document.createElement(displayObject.element);
        element.setAttribute("class", "m-display-text-block");
        if (displayObject.classname) {
          displayObject.classname.forEach(function(arrayItem) {
            helper.addClass(element, arrayItem);
          });
        };
        var contentFound = 0;
        if (displayObject.head) {
          var head = document.createElement("p");
          head.setAttribute("class", "m-display-head");
          head.textContent = displayObject.head;
        };
        displayObject.content.forEach(function(arrayItem, index) {
          var data = helper.getObject({
            object: sheet.get(),
            path: arrayItem.path
          });
          if (data != "") {
            contentFound++;
            if (arrayItem.prefix) {
              var prefix = document.createElement("span");
              prefix.setAttribute("class", "m-display-prefix");
              prefix.textContent = arrayItem.prefix;
              element.appendChild(prefix);
            };
            var value = document.createElement("span");
            value.setAttribute("class", "m-display-value");
            value.innerHTML = data;
            element.appendChild(value);
            if (arrayItem.suffix) {
              var suffix = document.createElement("span");
              suffix.setAttribute("class", "m-display-suffix");
              suffix.textContent = arrayItem.suffix;
              element.appendChild(suffix);
            };
          };
        });
        if (contentFound > 0) {
          if (head) {
            all_element.push(head);
          };
          all_element.push(element);
        } else {
          all_element.push(false);
        };
        return all_element;
      },
      stat: function(displayObject) {
        var all_element = [];
        var element = document.createElement(displayObject.element);
        element.setAttribute("class", "m-display-stats u-list-unstyled");
        var contentFound = 0;
        displayObject.content.forEach(function(arrayItem, index) {
          contentFound++;
          var listItem = document.createElement("li");
          listItem.setAttribute("class", "m-display-stats-item");
          var stat = document.createElement("span");
          stat.setAttribute("class", "m-display-stat");
          var statName = document.createElement("span");
          statName.setAttribute("class", "m-display-stat-name");
          var statValue = document.createElement("strong");
          statValue.setAttribute("class", "m-display-stat-value");
          var mod = document.createElement("h1");
          mod.setAttribute("class", "m-display-mod");
          var statData = helper.getObject({
            object: sheet.get(),
            path: arrayItem.statPath
          });
          var modData = dataFormat.bonus(helper.getObject({
            object: sheet.get(),
            path: arrayItem.modPath
          }));
          statName.textContent = arrayItem.prefix;
          statValue.textContent = statData;
          mod.textContent = modData;
          stat.appendChild(statName);
          stat.appendChild(statValue);
          listItem.appendChild(stat);
          listItem.appendChild(mod);
          element.appendChild(listItem);
        });
        if (contentFound > 0) {
          all_element.push(element);
        } else {
          all_element.push(false);
        };
        return all_element;
      },
      list: function(displayObject) {
        var all_element = [];
        var element = document.createElement(displayObject.element);
        element.setAttribute("class", "u-list-unstyled");
        if (displayObject.classname) {
          displayObject.classname.forEach(function(arrayItem) {
            helper.addClass(element, arrayItem);
          });
        };
        var contentFound = 0;
        if (displayObject.head) {
          var head = document.createElement("p");
          head.setAttribute("class", "m-display-head");
          head.textContent = displayObject.head;
        };
        displayObject.content.forEach(function(arrayItem, index) {
          var all_listItem = helper.getObject({
            object: sheet.get(),
            path: arrayItem.path
          });
          if (all_listItem.length > 0) {
            all_listItem.forEach(function(arrayItem) {
              contentFound++;
              var listItem = document.createElement("li");
              listItem.setAttribute("class", "m-display-list-item");
              var listItemName = document.createElement("span");
              listItemName.setAttribute("class", "m-display-list-item-name");
              listItemName.textContent = arrayItem.name;
              listItem.appendChild(listItemName);
              element.appendChild(listItem);
            });
          };
        });
        if (contentFound > 0) {
          if (head) {
            all_element.push(head);
          };
          all_element.push(element);
        } else {
          all_element.push(false);
        };
        return all_element;
      },
      group: function(displayObject) {
        var all_element = [];
        var element = document.createElement(displayObject.element);
        element.setAttribute("class", "u-list-unstyled");
        if (displayObject.classname) {
          displayObject.classname.forEach(function(arrayItem) {
            helper.addClass(element, arrayItem);
          });
        };
        var contentFound = 0;
        if (displayObject.head) {
          var head = document.createElement("p");
          head.setAttribute("class", "m-display-head");
          head.textContent = displayObject.head;
        };
        displayObject.content.forEach(function(arrayItem, index) {
          var data = helper.getObject({
            object: sheet.get(),
            path: arrayItem.path
          });
          if (data != "") {
            contentFound++;
            var listItem = document.createElement("li");
            listItem.setAttribute("class", "m-display-list-item");
            if (arrayItem.prefix) {
              var prefix = document.createElement("span");
              prefix.setAttribute("class", "m-display-list-item-prefix");
              prefix.textContent = arrayItem.prefix;
              listItem.appendChild(prefix);
            };
            if (arrayItem.suffix) {
              var suffix = document.createElement("span");
              suffix.setAttribute("class", "m-display-list-item-suffix");
              suffix.textContent = arrayItem.suffix;
              listItem.appendChild(suffix);
            };
            var listItemName = document.createElement("span");
            listItemName.setAttribute("class", "m-display-list-item-name");
            listItemName.textContent = data;
            listItem.appendChild(listItemName);
            element.appendChild(listItem);
          };
        });
        if (contentFound > 0) {
          if (head) {
            all_element.push(head);
          };
          all_element.push(element);
        } else {
          all_element.push(false);
        };
        return all_element;
      },
      pill: function(displayObject) {
        var all_element = [];
        var element = document.createElement(displayObject.element);
        element.setAttribute("class", "u-list-unstyled");
        var contentFound = 0;
        if (displayObject.head) {
          var head = document.createElement("p");
          head.setAttribute("class", "m-display-head");
          head.textContent = displayObject.head;
        };
        displayObject.content.forEach(function(arrayItem, index) {
          var all_pill = helper.getObject({
            object: sheet.get(),
            path: arrayItem.path
          });
          if (all_pill.length > 0) {
            all_pill.forEach(function(arrayItem) {
              contentFound++;
              var listItem = document.createElement("li");
              listItem.setAttribute("class", "m-display-list-item");
              var listItemName = document.createElement("span");
              listItemName.setAttribute("class", "m-display-list-item-name");
              listItemName.textContent = arrayItem.name;
              listItem.appendChild(listItemName);
              element.appendChild(listItem);
            });
          };
        });
        if (contentFound > 0) {
          if (head) {
            all_element.push(head);
          };
          all_element.push(element);
        } else {
          all_element.push(false);
        };
        return all_element;
      },
      clone: function(displayObject) {
        var all_element = [];
        var element = document.createElement(displayObject.element);
        element.setAttribute("class", "u-list-unstyled");
        if (displayObject.classname) {
          displayObject.classname.forEach(function(arrayItem) {
            helper.addClass(element, arrayItem);
          });
        };
        if (displayObject.head) {
          var head = document.createElement("p");
          head.setAttribute("class", "m-display-head");
          head.textContent = displayObject.head;
        };
        var contentFound = 0;
        var cloneVariant = {
          consumable: function() {
            displayObject.content.forEach(function(arrayItem, index) {
              var all_clone = helper.getObject({
                object: sheet.get(),
                path: arrayItem.path
              });
              if (all_clone.length > 0) {
                all_clone.forEach(function(arrayItem) {
                  if (arrayItem.name != "") {
                    contentFound++;
                    var listItem = document.createElement("li");
                    listItem.setAttribute("class", "m-display-list-item");
                    var listItemName = document.createElement("span");
                    listItemName.setAttribute("class", "m-display-list-item-name");
                    listItemName.textContent = arrayItem.name;
                    var listItemValue = document.createElement("span");
                    listItemValue.setAttribute("class", "m-display-list-item-value");
                    listItemValue.textContent = (arrayItem.current || 0) + "/" + (arrayItem.total || 0);
                    var percentage = parseFloat(((arrayItem.total - arrayItem.used) / arrayItem.total) * 100).toFixed(2);
                    if (percentage < 0) {
                      percentage = 0;
                    };
                    var percentageBar = document.createElement("span");
                    percentageBar.setAttribute("class", "m-display-list-item-percentage");
                    percentageBar.setAttribute("style", "width: " + percentage + "%;");
                    listItem.appendChild(listItemName);
                    listItem.appendChild(listItemValue);
                    listItem.appendChild(percentageBar);
                    element.appendChild(listItem);
                  };
                });
              };
            })
          },
          power: function() {
            displayObject.content.forEach(function(arrayItem, index) {
              var all_clone = helper.getObject({
                object: sheet.get(),
                path: arrayItem.path
              });
              if (all_clone.length > 0) {
                all_clone.forEach(function(arrayItem) {
                  if (arrayItem.name != "") {
                    contentFound++;
                    var listItem = document.createElement("li");
                    listItem.setAttribute("class", "m-display-list-item");
                    var listItemName = document.createElement("span");
                    listItemName.setAttribute("class", "m-display-list-item-name");
                    listItemName.textContent = arrayItem.name;
                    var listItemValue = document.createElement("span");
                    listItemValue.setAttribute("class", "m-display-list-item-value");
                    listItemValue.textContent = arrayItem.current + "/" + arrayItem.total;
                    var percentage = parseFloat(((arrayItem.total - arrayItem.used) / arrayItem.total) * 100).toFixed(2);
                    if (percentage < 0) {
                      percentage = 0;
                    };
                    var percentageBar = document.createElement("span");
                    percentageBar.setAttribute("class", "m-display-list-item-percentage");
                    percentageBar.setAttribute("style", "width: " + percentage + "%;");
                    listItem.appendChild(listItemName);
                    listItem.appendChild(listItemValue);
                    listItem.appendChild(percentageBar);
                    element.appendChild(listItem);
                  };
                });
              };
            })
          },
          item: function() {
            displayObject.content.forEach(function(arrayItem, index) {
              var all_clone = helper.getObject({
                object: sheet.get(),
                path: arrayItem.path
              });
              if (all_clone.length > 0) {
                all_clone.forEach(function(arrayItem) {
                  if (arrayItem.name != "") {
                    contentFound++;
                    var listItem = document.createElement("li");
                    listItem.setAttribute("class", "m-display-list-item");
                    var listItemName = document.createElement("span");
                    listItemName.setAttribute("class", "m-display-list-item-name");
                    listItemName.textContent = arrayItem.name;
                    var listItemValue = document.createElement("span");
                    listItemValue.setAttribute("class", "m-display-list-item-value");
                    listItemValue.textContent = arrayItem.quantity;
                    listItem.appendChild(listItemName);
                    listItem.appendChild(listItemValue);
                    element.appendChild(listItem);
                  };
                });
              };
            })
          },
          attack: function() {
            displayObject.content.forEach(function(arrayItem, index) {
              var all_clone = helper.getObject({
                object: sheet.get(),
                path: arrayItem.path
              });
              if (all_clone.length > 0) {
                all_clone.forEach(function(arrayItem) {
                  if (arrayItem.weapon != "") {
                    contentFound++;
                    var _createSnippet = function(config) {
                      var meleeItem = document.createElement("span");
                      meleeItem.setAttribute("class", "m-display-list-item-attack-" + config.classname);
                      if (config.prefix) {
                        var prefix = document.createElement("span");
                        prefix.setAttribute("class", "m-display-list-item-attack-prefix");
                        prefix.textContent = config.prefix;
                        meleeItem.appendChild(prefix);
                      };
                      var value = document.createElement("span");
                      value.setAttribute("class", "m-display-list-item-attack-value");
                      value.textContent = config.value;
                      meleeItem.appendChild(value);
                      return meleeItem;
                    };
                    var listItem = document.createElement("li");
                    listItem.setAttribute("class", "m-display-list-item-attack");
                    if ("weapon" in arrayItem && arrayItem.weapon != "") {
                      listItem.appendChild(_createSnippet({
                        prefix: "Weapon",
                        value: arrayItem.weapon,
                        classname: "weapon"
                      }));
                    };
                    if ("attack" in arrayItem && arrayItem.attack != "") {
                      listItem.appendChild(_createSnippet({
                        prefix: "Attack",
                        value: arrayItem.attack,
                        classname: "attack"
                      }));
                    };
                    if ("damage" in arrayItem && arrayItem.damage != "") {
                      listItem.appendChild(_createSnippet({
                        prefix: "Damage",
                        value: arrayItem.damage,
                        classname: "damage"
                      }));
                    };
                    if ("critical" in arrayItem && arrayItem.critical != "") {
                      listItem.appendChild(_createSnippet({
                        prefix: "Critical",
                        value: arrayItem.critical,
                        classname: "critical"
                      }));
                    };
                    if ("type" in arrayItem && arrayItem.type != "") {
                      listItem.appendChild(_createSnippet({
                        prefix: "Type",
                        value: arrayItem.type,
                        classname: "type"
                      }));
                    };
                    if ("range" in arrayItem && arrayItem.range != "") {
                      listItem.appendChild(_createSnippet({
                        prefix: "Range",
                        value: arrayItem.range,
                        classname: "range"
                      }));
                    };
                    if ("ammo" in arrayItem && arrayItem.ammo != "") {
                      listItem.appendChild(_createSnippet({
                        prefix: "Ammo",
                        value: arrayItem.ammo,
                        classname: "ammo"
                      }));
                    };
                    element.appendChild(listItem);
                  };
                });
              };
            })
          },
          note: function() {
            displayObject.content.forEach(function(arrayItem, index) {
              var all_clone = helper.getObject({
                object: sheet.get(),
                path: arrayItem.path
              });
              if (all_clone.length > 0) {
                all_clone.forEach(function(arrayItem) {
                  if (arrayItem.note != "") {
                    contentFound++;
                    var listItem = document.createElement("li");
                    listItem.setAttribute("class", "m-display-list-item");
                    var listItemValue = document.createElement("span");
                    listItemValue.setAttribute("class", "m-display-list-item-text-block");
                    listItemValue.innerHTML = arrayItem.note;
                    listItem.appendChild(listItemValue);
                    element.appendChild(listItem);
                  };
                });
              };
            })
          }
        };

        cloneVariant[displayObject.cloneType]();

        if (contentFound > 0) {
          if (head) {
            all_element.push(head);
          };
          all_element.push(element);
        } else {
          all_element.push(false);
        };
        return all_element;
      },
      skills: function(displayObject) {
        var all_element = [];
        var element = document.createElement(displayObject.element);
        element.setAttribute("class", "u-list-unstyled");
        if (displayObject.classname) {
          displayObject.classname.forEach(function(arrayItem) {
            helper.addClass(element, arrayItem);
          });
        };
        var contentFound = 0;
        if (displayObject.head) {
          var head = document.createElement("p");
          head.setAttribute("class", "m-display-head");
          head.textContent = displayObject.head;
        };
        var foundSkills = [];
        displayObject.content.forEach(function(arrayItem, index) {
          var all_listItem = helper.getObject({
            object: sheet.get(),
            path: arrayItem.path
          });
          var skills = {
            default: function() {
              var skillNames = {
                acrobatics: "Acrobatics",
                appraise: "Appraise",
                bluff: "Bluff",
                climb: "Climb",
                craft_1: "Craft 1",
                craft_2: "Craft 2",
                diplomacy: "Diplomacy",
                disable_device: "Disable Device",
                disguise: "Disguise",
                escape_artist: "Escape Artist",
                fly: "Fly",
                handle_animal: "Handle Animal",
                heal: "Heal",
                intimidate: "Intimidate",
                knowledge_arcana: "Knowledge Arcana",
                knowledge_dungeoneering: "Knowledge Dungeoneering",
                knowledge_engineering: "Knowledge Engineering",
                knowledge_geography: "Knowledge Geography",
                knowledge_history: "Knowledge History",
                knowledge_local: "Knowledge Local",
                knowledge_nature: "Knowledge Nature",
                knowledge_nobility: "Knowledge Nobility",
                knowledge_planes: "Knowledge Planes",
                knowledge_religion: "Knowledge Religion",
                linguistics: "Linguistics",
                perception: "Perception",
                perform_1: "Perform 1",
                perform_2: "Perform 2",
                profession_1: "Profession 1",
                profession_2: "Profession 2",
                ride: "Ride",
                sense_motive: "Sense Motive",
                sleight_of_hand: "Sleight of Hand",
                spellcraft: "Spellcraft",
                stealth: "Stealth",
                survival: "Survival",
                swim: "Swim",
                use_magic_device: "Use Magic Device"
              };
              for (var key in all_listItem) {
                if (all_listItem[key].ranks != "") {
                  contentFound++;
                  var skillObject = {
                    name: skillNames[key],
                    current: all_listItem[key].current
                  };
                  foundSkills.push(skillObject);
                };
              };
            },
            custom: function() {
              all_listItem.forEach(function(arrayItem) {
                if (all_listItem.ranks != "") {
                  contentFound++;
                  var skillObject = {
                    name: arrayItem.name,
                    current: arrayItem.current
                  };
                  foundSkills.push(skillObject);
                };
              });
            }
          };
          skills[arrayItem.skillType]();
        });
        helper.sortObject(foundSkills, "name");
        if (foundSkills.length > 0) {
          foundSkills.forEach(function(arrayItem) {
            var listItem = document.createElement("li");
            listItem.setAttribute("class", "m-display-list-item");
            var listItemName = document.createElement("span");
            listItemName.setAttribute("class", "m-display-list-item-name");
            listItemName.textContent = arrayItem.name;
            var listItemValue = document.createElement("span");
            listItemValue.setAttribute("class", "m-display-list-item-value");
            listItemValue.textContent = arrayItem.current;
            listItem.appendChild(listItemName);
            listItem.appendChild(listItemValue);
            element.appendChild(listItem);
          });
        };
        if (contentFound > 0) {
          if (head) {
            all_element.push(head);
          };
          all_element.push(element);
        } else {
          all_element.push(false);
        };
        return all_element;
      },
      spells: function(displayObject) {
        var all_element = [];
        var element = document.createElement(displayObject.element);
        element.setAttribute("class", "u-list-unstyled");
        if (displayObject.classname) {
          displayObject.classname.forEach(function(arrayItem) {
            helper.addClass(element, arrayItem);
          });
        };
        var contentFound = 0;
        displayObject.content.forEach(function(arrayItem, index) {
          var all_spells = helper.getObject({
            object: sheet.get(),
            path: arrayItem.path
          });
          if (all_spells.length > 0) {
            all_spells.forEach(function(arrayItem, index) {
              contentFound++;
              var listItem = document.createElement("li");
              listItem.setAttribute("class", "m-display-list-item-spell");
              var spell = document.createElement("span");
              spell.setAttribute("class", "m-display-list-item-spell-name");
              var spellName = document.createElement("span");
              spellName.textContent = arrayItem.name;
              var spellCounters = document.createElement("span");
              spellCounters.setAttribute("class", "m-display-list-item-spell-count");
              spell.appendChild(spellName);
              listItem.appendChild(spell);
              listItem.appendChild(spellCounters);
              listItem.setAttribute("data-spell-button-options", "level:#" + displayObject.level + ",index:#" + index);
              // prepared
              if (arrayItem.prepared > 0) {
                // var marks = document.createElement("span");
                for (var j = 0; j < arrayItem.prepared; j++) {
                  var preparedIcon = document.createElement("span");
                  preparedIcon.setAttribute("class", "icon-radio-button-checked");
                  spellCounters.insertBefore(preparedIcon, spellCounters.firstChild);
                };
              };
              // cast
              if (arrayItem.cast > 0) {
                var all_check = spellCounters.querySelectorAll(".icon-radio-button-checked");
                for (var j = 0; j < arrayItem.cast; j++) {
                  if (all_check[j]) {
                    helper.toggleClass(all_check[j], "icon-radio-button-checked");
                    helper.toggleClass(all_check[j], "icon-radio-button-unchecked");
                  };
                };
              };
              // active
              if (arrayItem.active) {
                var spellActive = document.createElement("span");
                spellActive.setAttribute("class", "m-display-list-item-spell-active");
                var activeIcon = document.createElement("span");
                activeIcon.setAttribute("class", "icon-play-arrow");
                spellActive.appendChild(activeIcon);
                spell.insertBefore(spellActive, spell.firstChild);
              };
              listItem.addEventListener("click", function() {
                spells.update(helper.e(".js-spell-block-known-level-" + displayObject.level).querySelectorAll(".js-spell-col")[index].querySelector(".js-spell"), true);
              }, false);
              element.appendChild(listItem);
            });
          };
        });
        if (contentFound > 0) {
          all_element.push(element);
        } else {
          all_element.push(false);
        };
        return all_element;
      }
    };
    if (displayObject.type in createElement) {
      return createElement[displayObject.type](displayObject);
    } else {
      return false;
    };
  };

  function _render_all_placeholderDisplay() {
    var all_display = helper.eA(".js-display");
    all_display.forEach(function(arrayItem) {
      _render_placeholderDisplay(arrayItem);
    });
  };

  function _render_placeholderDisplay(displayElement) {
    var placeholderDisplay = displayElement.querySelector(".js-placeholder-display");
    var displayBlock = displayElement.querySelector(".js-display-block");
    if (displayBlock && placeholderDisplay) {
      if (displayBlock.hasChildNodes()) {
        helper.addClass(placeholderDisplay, "is-hidden")
      } else {
        helper.removeClass(placeholderDisplay, "is-hidden")
      };
    };
  };

  // exposed methods
  return {
    toggle: toggle,
    bind: bind,
    render: render,
    clear: clear,
    state: state
  };

})();

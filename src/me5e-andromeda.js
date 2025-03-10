Hooks.once("init", () => {
  CONFIG.DND5E.languages.standard.children.angaran = "Angaran";
  CONFIG.DND5E.languages.standard.children.asari = "Asari";
  CONFIG.DND5E.languages.standard.children.krogan = "Krogan";
  CONFIG.DND5E.languages.standard.children.salarian = "Salarian";
  CONFIG.DND5E.languages.standard.children.terran = "Terran";	
  CONFIG.DND5E.languages.standard.children.turian = "Turian";	
	//Remove traditional common fantasy languages
	delete  CONFIG.DND5E.languages.standard.children.draconic;	
	delete  CONFIG.DND5E.languages.standard.children.dwarvish;
	delete  CONFIG.DND5E.languages.standard.children.elvish;
	delete  CONFIG.DND5E.languages.standard.children.giant;
	delete  CONFIG.DND5E.languages.standard.children.gnomish;
	delete  CONFIG.DND5E.languages.standard.children.goblin;
	delete  CONFIG.DND5E.languages.standard.children.halfling;
	delete  CONFIG.DND5E.languages.standard.children.orc;
        delete  CONFIG.DND5E.languages.standard.children.common;
        delete  CONFIG.DND5E.languages.standard.children.sign;

	//Remove traditional rare fantasy languages
	delete CONFIG.DND5E.languages.exotic.children.aarakocra;
        delete CONFIG.DND5E.languages.exotic.children.abyssal;
        delete CONFIG.DND5E.languages.exotic.children.celestial;
        delete CONFIG.DND5E.languages.exotic.children.deep;
        delete CONFIG.DND5E.languages.exotic.children.druidic;
        delete CONFIG.DND5E.languages.exotic.children.gnoll;
        delete CONFIG.DND5E.languages.exotic.children.infernal;
        delete CONFIG.DND5E.languages.exotic.children.primordial.children.aquan;
        delete CONFIG.DND5E.languages.exotic.children.primordial.children.auran;
        delete CONFIG.DND5E.languages.exotic.children.primordial.children.ignan;
        delete CONFIG.DND5E.languages.exotic.children.primordial.children.terran;	
        delete CONFIG.DND5E.languages.exotic.children.primordial;


        delete CONFIG.DND5E.languages.exotic.children.sylvan;
        delete CONFIG.DND5E.languages.exotic.children.undercommon;	
        delete CONFIG.DND5E.languages.exotic.children.cant;


//  CONFIG.DND5E.toolProficiences.art.children.tail = "Tailor's Tools";

});


//Changing out deprecated 5e skills to their replacements
dnd5e.config.skills.arc = {label: "Electronics" , ability: "int"};
dnd5e.config.skills.nat = {label: "Engineering" , ability: "int"};
dnd5e.config.skills.rel = {label: "Science" , ability: "int"};
dnd5e.config.skills.veh = {label: "Vehical Handling" , ability: "dex"};
// Deletes animal handling from system
delete dnd5e.config.skills.ani;

//Adding equipment types
dnd5e.config.equipmentTypes["prog"] = "Program";
dnd5e.config.equipmentTypes["armMod"] = "Armor Mod";
dnd5e.config.equipmentTypes["wepMod"] = "Weapon Mod"
dnd5e.config.equipmentTypes["bodArm"] = "Body Armor"


// //Changing and adding consumable types
dnd5e.config.consumableTypes["wand"] = "Single-Use Program"
dnd5e.config.consumableTypes["rod"] = "Grenade";
dnd5e.config.consumableTypes["narc"] = "Narcotic";

const prep = dnd5e.documents.Actor5e.prototype.prepareBaseData
function extendActorData() {
	let myActorList = game.actors.filter(a => (a.type === 'character' || a.type === 'npc') === true);
	const dat = this.system.skills
	const keys =Object.keys(myActorList)
	keys.forEach((key, index) => {myActorList[key].system.skills.veh.ability = "dex"});

	const health = this.system.attributes.hp;
	
	if (this.type === "npc" || this.type === "character") {
		health["shields"] = health["shields"] || 0;
		health["shieldsMax"] = health["shieldsMax"] || 0;
		health["shieldsRegen"] = health["shieldsRegen"] || 0;
	}


    return prep.call(this);
}



//Changing "schools" of magic
dnd5e.config.spellSchools['abj'] = 'Biotics';
dnd5e.config.spellSchools['con'] = 'Tech';
dnd5e.config.spellSchools['div'] = 'Combat Powers';

//Adding weapon types
dnd5e.config.weaponTypes['ars'] = 'Assault Rifle';
dnd5e.config.weaponTypes['hps'] = 'Heavy Pistol';
dnd5e.config.weaponTypes['smg'] = 'SMG';
dnd5e.config.weaponTypes['sht'] = 'Shotgun';
dnd5e.config.weaponTypes['snp'] = 'Sniper Rifle';
dnd5e.config.weaponTypes['hvy'] = 'Heavy Weapon';

//Adding weapon properties
dnd5e.config.weaponProficiencies['arc'] = 'Arc';
dnd5e.config.weaponProficiencies['bst'] = 'Burst Fire';
dnd5e.config.weaponProficiencies['dtp'] = 'Double Tap';
dnd5e.config.weaponProficiencies['het'] = 'Heat';
dnd5e.config.weaponProficiencies['hip'] = 'Hip Fire';
dnd5e.config.weaponProficiencies['snt'] = 'Silent';
dnd5e.config.weaponProficiencies['coi'] = 'Recoil';

//Changing currencies, all other currencies appear as 0 with no labels
dnd5e.config.currencies.cr = {label: 'Credits'}
delete dnd5e.config.currencies.pp
delete dnd5e.config.currencies.gp
delete dnd5e.config.currencies.ep
delete dnd5e.config.currencies.sp
delete dnd5e.config.currencies.cp
//Currency conversion option now does nothing to avoid accidental user error
//(also to avoid mishaps with player curiosity for 'what does this button do?')
//The answer is nothing. The button does nothing now
dnd5e.config.currencyConversion = {};

//Adding condition types
dnd5e.config.conditionTypes['frozen'] = 'Frozen';
dnd5e.config.conditionTypes['indoctrinated'] = 'Indoctrinated';
dnd5e.config.conditionTypes['lifted'] = 'Lifted';
dnd5e.config.conditionTypes['primed'] = 'Primed';
dnd5e.config.conditionTypes['primedCold'] = 'Primed: Cold';
dnd5e.config.conditionTypes['primedFire'] = 'Primed: Fire';
dnd5e.config.conditionTypes['primedForce'] = 'Primed: Force';
dnd5e.config.conditionTypes['primedLight'] = 'Primed: Lightning';
dnd5e.config.conditionTypes['primedNec'] = 'Primed: Necrotic';
dnd5e.config.conditionTypes['targeting'] = 'Targeting';

//Changing and adding some tool proficiencies
dnd5e.config.toolProficiencies['herb'] = "Chemist's Supplies";
dnd5e.config.toolProficiencies['navg'] = 'Starship System (Navigation)';
dnd5e.config.toolProficiencies['pois'] = "Brewer's Supplies";
dnd5e.config.toolProficiencies['aswb'] = "Armorsmith's Workbench";
dnd5e.config.toolProficiencies['h4ck'] = 'Hacking Tools';
dnd5e.config.toolProficiencies['mdcn'] = 'Medical Kit';
dnd5e.config.toolProficiencies['pntr'] = "Painter's Supplies";
dnd5e.config.toolProficiencies['ssdr'] = 'Starship Systems (Drive)';
dnd5e.config.toolProficiencies['sshe'] = 'Starship Systems (Helm)';
dnd5e.config.toolProficiencies['sssc'] = 'Starship Systems (SSC)';
dnd5e.config.toolProficiencies['ssew'] = 'Starship Systems (EWS)';
dnd5e.config.toolProficiencies['sswp'] = 'Starship Systems (Weapons)';
dnd5e.config.toolProficiencies['ssnv'] = 'Starship Systems (Navigation)';
//dnd5e.config.toolProficiencies['tail'] = "Tailor's Tools";
dnd5e.config.toolProficiencies['tink'] = "Tinker's Tools";
dnd5e.config.toolProficiencies['wswb'] = "Weaponsmith's Workbench";

//Character sheets
class ME5eCharacterSheet extends dnd5e.applications.actor.ActorSheet5eCharacter {
    static get defaultOptions() {
        console.log('~~~~~~~~~~~ME5E CHARACTER SHEET ACTIVE~~~~~~~~~~~');
        const options = super.defaultOptions;
        options.classes.push('me5e');
        return options;
    }
}

class ME5eParagonCharacterSheet extends dnd5e.applications.actor.ActorSheet5eCharacter {
    static get defaultOptions() {
        console.log('~~~~~~~~~~~PARAGON CHARACTER SHEET ACTIVE~~~~~~~~~~~');
        const options = super.defaultOptions;
        options.classes.push('paragon');
        return options;
    }
}

class ME5eRenegadeCharacterSheet extends dnd5e.applications.actor.ActorSheet5eCharacter {
    static get defaultOptions() {
        console.log('~~~~~~~~~~~RENEGADE CHARACTER SHEET ACTIVE~~~~~~~~~~~');
        const options = super.defaultOptions;
        options.classes.push('renegade');
        return options;
    }
}

console.log(`Registering character sheets for ME5e Module`);

Actors.registerSheet('DND5E', ME5eCharacterSheet, {
    types: ['character'],
    makeDefault: true,
});

Actors.registerSheet('DND5E', ME5eParagonCharacterSheet, {
    types: ['character'],
    makeDefault: false,
});

Actors.registerSheet('DND5E', ME5eRenegadeCharacterSheet, {
    types: ['character'],
    makeDefault: false,
});
//Other sheets
class ME5eNPCSheet extends dnd5e.applications.actor.ActorSheet5eNPC {
    static get defaultOptions() {
        const options = super.defaultOptions;
        options.classes.push('me5e');
        return options;
    }
}
Actors.registerSheet('DND5E', ME5eNPCSheet, {
    types: ['npc'],
    makeDefault: true,
});
class ME5eItemSheet extends dnd5e.applications.item.ItemSheet5e {
    static get defaultOptions() {
        const options = super.defaultOptions;
        options.classes.push('me5e');
        return options;
    }
}
Items.registerSheet('DND5E', ME5eItemSheet, {
    types: [
        'spell',
        'weapon',
        'equipment',
        'loot',
        'tool',
        'backpack',
        'consumable',
        'class',
        'feat',
    ],
    makeDefault: true,
});

//Adding a field to the header for shield tracker
Hooks.on('renderActorSheet', (app, html, data) => {
    const healthdiv = html
        .find('header.sheet-header')
        .find('ul.attributes.flexrow');
    const flags = data.actor.flags.me5e || {};
    healthdiv.prepend(`
		  		<li class="attribute shields">
                    <h4 class="attribute-name box-title">Shields</h4>
                    <div class="attribute-value multiple">
                        <input name="flags.me5e.shields" type="text" value="${flags.shields ?? 0}" data-dtype="Number" placeholder="5"/>
                        <span class="sep"> / </span>
                        <input name="flags.me5e.shieldsMax" type="text" value="${flags.shieldsMax ?? 0}" data-dtype="Number" placeholder="5"/>
                    </div>
                    <footer class="attribute-footer">
                        <input name="flags.me5e.shieldsRegen" type="text" class="shieldsRegen" placeholder="Shield Regen." value="${flags.shieldsRegen ?? 0}" data-dtype="Number"/>
                    </footer>
                </li>
	  `);


    const col = html
        .find('section.center-pane.flexcol')
        .find('ul.attributes.flexrow');
    const counters = html.find('div.counters');
    counters.append(`
	<div class="counter flexrow indoctrination">
    <h4> Indoctrination </h4>
    <div class="counter-value">
      <input type="text" name="flags.me5e.indoctrination" placeholder="0" value="${
          flags.indoctrination ?? 0
      }" data-dtype="Number"/>
    </div>
	</div>
	
	`);
    col.prepend(`
	
    <li class="attribute reputation">
        <h4 class="attribute-name box-title">Reputation</h4>
        <div class="attribute-value attributable">
        <input type="text" name="flags.me5e.paragon" placeholder="0" value="${
            flags.paragon ?? 0
        }" data-dtype="Number"/>
            <span class="sep"> / </span>
            <input type="text" name="flags.me5e.renegade" placeholder="0" value="${
                flags.renegade ?? 0
            }" data-dtype="Number"/>
            
        </div>


        <footer class="attribute-footer">
            <span class="spell-dc" >Paragon</span>
            <span class="sep"> / </span>
            <span class="spell-dc" >Renegade</span>
        </footer>
            
        
    </li>
	
	`);
});

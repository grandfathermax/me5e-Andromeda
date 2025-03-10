This is a framework that was originally created by Sparkcity for the Mass Effect 5e module for Foundry-VTT which was then updated by Astrotech89, my work is a continuation of their great work on this.  I will be running a game in the Andromeda galaxy and wanted to have a stab at fixing some things for V12 and the latest 5e (maybe) and adding some new things.

I am new to Git, Foundry, javascript and JSON so bear with me if I am being daft.  If I have unintentionally disrespected Sparkcity or Astrotech89 then I apologise, tell me how I have and I will fix it.

I have included their readme's as it is a continuation of their work, once I have something of mine to show I will amend it to include that.

I do however have Species working properly for Angara and Asari (mostly), I just need to do the same work on the other Species.  Andromeda Species first

EVERYTHING BELOW IS THEIR README

Initial release is copy of hist v1.9

## Installation 
Due to the use of the Mass Effect name and the images that go along with items, Foundry has said they won't publish this module as they are a paid service and are understandably worried about copywrite usage.
I was not paid to make this and all images were found on the internet.  Please refer to disclaimer.
Copy this link into the add-on module prompt:

https://github.com/grandfathermax/me5e-Andromeda/releases/latest/download/module.json
<img width="655" alt="image" src="https://github.com/Astrotech89/me5e-v141/assets/20007225/c6bae125-d40c-48bd-99be-4ca500c0f518">


## Next Updates
   * Continue to update Journals to match n7.world
   * Get Species to work properly with the character sheet

<!-- 

## Goals
* Update to support latest version of Foundry
    * Identify dependencies (done)
    * Add/Remove dependencies (done)
    * Update to foundry v10 framework (done)
* Update to ME5e v1.4 (done)
* Update databases w/ proper imaging and naming conventions (done)
* Add automation using dae (in progress)

## Extended Goals
* Create ME5e Game system over module
    * Make new character sheet similar to TechKinghts Roll20
* Integrate ME5e character builder into game system
 -->
<!-- 
Beginning of Sparkcity's README

[![Foundry](https://img.shields.io/badge/Foundry%40Minimum-0.7.5-green)](https://foundryvtt.com/)
[![Foundry](https://img.shields.io/badge/Foundry%40CompatibleCore-0.7.7-brightgreen)](https://foundryvtt.com/)
[![dnd5e](https://img.shields.io/badge/dnd5e-1.1.1-orange)](https://gitlab.com/foundrynet/dnd5e)
![GitHub All Releases](https://img.shields.io/github/downloads/sparkcity/fvtt-me5e/total)
![GitHub @Latest](https://img.shields.io/github/downloads/sparkcity/fvtt-me5e/latest/total)
 -->
<!-- ## Attributions
* Icons are from [Game-icons.net](https://game-icons.net/). Specifically: Missile launcher icon by Delapouite; Pistol gun icon by John Colburn; Sawed-off shotgun icon by Delapouite; MP5 by Delapouite; Uzi icon by Delapouite; CPU icon by Delapouite; Battle gear icon by Lorc; Silver bullet icon by Delapouite; Scout ship icon by Delapouite; Bracer icon by Delapouite; Greaves icon by Delapouite; Barbute icon by Lorc; Shoulder armor icon by Delapouite.
* App background is from [CharlVera on Pixabay](https://pixabay.com/illustrations/space-earth-gala-planet-universe-4634011/).
* Compendium content from ME5e. In order to be compliant with copyright restrictions and not to infringe on any copyright, copyrighted materials, names, or otherwise uniquely distinguishable words related to existing IPs have been omitted or changed. For full content, GMs and Players should refer to the website for ME5e.
 -->
## Content
* 3 Character Sheet Themes:
    * ME5e
    * Paragon
    * Renegade
<img width="627" alt="image" src="https://github.com/Astrotech89/me5e-v141/assets/20007225/aebcc802-706c-4176-ae08-3fd0d42d5cc1">

* Compendiums:
    * Backgrounds
    * Bestiary
    * Classes 
    * Class Features (with subclass features)
    * Feats
    * Item Catalogue (with separate: armor, weapons, weapon mods, armor mods, grenades, programs, and more)
    * Powers
    * Racial Features
    * Species (Doesn't work properly)
    * Spells
    * Subclasses
    * Vehicles (Not finished)

## Disclaimers & Licenses
**From https://www.n7.world/license**

Mass Effect 5e is not sanctioned by or affiliated with Electronic Arts Inc, BioWare, Wizards of the Coast, or any other rights-holding company or entity.

Except where otherwise noted, images on this site are from the Mass Effect Wiki and are licensed under a Creative Commons Attribution 4.0 International license.

The Mass Effect 5e website is licensed under GNU General Public License v3.0. The Open Game Content contained within the Player's Manual is licensed under the Open Game License version 1.0a.

## Limitations
Currently there is no barrier tick tracker on the character sheet.  This will be worked on.
There is also a lot that needs worked on for vehicle character sheets.  Therefore Vehicle compendiums are incomplete but will be worked on.


## Dev Resources

Not sure if this helps, but there's this:
https://github.com/queryluke/masseffect-5e/tree/master/assets/images
I think nearly all (if not every) image used in the bestiary/weapons/mods/etc are direct links from the mass effect wiki, not stored locally by us
Ah, here's what you want:
https://github.com/queryluke/masseffect-5e-data/tree/master/data
For example, if you click into /armor from there, you can find a list of armor items. Here's an example one:
https://github.com/queryluke/masseffect-5e-data/blob/master/data/armor/andromeda-elite-helmet.md

Notice the wikia link in the image field. Unfortunately you'd need to go into them link by link and download / copy the reference... Or possibly write a script, depending on what you need.
Let me know if that helps @Astrotech
I think there was a google folder of tokens actually
https://drive.google.com/drive/u/0/folders/10S3R_Tfi4bJ9X2b6-4OI65m9F8fx6i0P

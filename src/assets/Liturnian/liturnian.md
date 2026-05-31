Link to steam page: https://store.steampowered.com/app/3829630/Liturnian/

Link to trailer on youtube: https://www.youtube.com/watch?v=luhaYaFTsy0

Poster image: Liturnian/Liturnian_poster.png

In the folder InGameScreenshots you can find a list of many screenshots showcasing the game, sprinkle them in if you need an extra image, other wise put them all at the bottom in a grid or carousel view.

Title: Liturnian

Store page description: Discover a strange world inhabited by living lights. Liturnian is a 3D-Metroidvania with fluid movement, fights against strange creatures and exciting puzzles.

Story: 

All Light is Life and all Life is Light.

Every 100 years a darkness falls on Luxheim and the radiance of its inhabitants slowly fades away...

Carry the Pilgrim's Light and save Luxheim.



Credits:

Ben Rosenmöller (me): Lead Developer, System and gameplay developer

Dominique van de Fliert : Lead Artist, ConceptArtist and 3D Artist

Mia Vreven: Lead Designer, Level and Gameplay Design

Cas Wellink: Lead Designer, Interface and Narrative Design

Ralf Zeilstra: Developer, System developer

Amy Tange: 3D Artist, Prop and Environments

Floor Kortleven: 3D Artist, Prop and Environments

Sten Kloot: Audio Designer


What I worked on:

I was co-founder being involved in the conception and design. But my focus is on development namely:

- Dynamic Room loading system (see RoomSystemGraduation_16_9.gif)
  - This was one of my main focusses, my challenge was to create a large open 3D world where the player could explore freely without ever seeing a loading screen. In this way I wanted to increase the immersion of the player. I achieved this with the dynamic room loading system that without the player notices load and unloads the correct unity scenes addtive or subtractivly so that the player, ui and manager keep being loading in there own scenes on top of the current loaded levels.
- Save System and all ui implementation (See save_system_showcase.png)
  - The UI is controller and mouse supportive and the save system has multiple save slots and saving at savepoints
- Dynamic map unlock (see images side by side (map_showcase_in_game_incomplete.png and LiturniaMap_complete)))
  - The map was drawn by me and with a shader I could use the alpha channel of a second texture to fade specific rooms or parts of rooms in and out based on it the player was there.
- Flying enemy behaviour (see test scene: FlyingEnemy.gif)
  - The flying enemy has raycast based obstaclt avoidance and can follow, circle and attack the player.
- Plus much more systems above where just a few examples

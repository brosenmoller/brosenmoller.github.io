<template>
    <ProjectPage
        :title="'Unity Project Setup'"
        :subtitle="'A Masterclass on Fast & Scalable Project Structure'"
        :description="''"
    >

    <article class="flex flex-col gap-12 max-w-3xl mx-auto px-5 md:px-2 pb-24 lg:text-lg text-base leading-relaxed text-slate-200">

        <!-- ============================ INTRODUCTION ============================ -->
        <section class="flex flex-col gap-4">
            <p>
                In this tutorial I will explain how to set up a Unity project in a fast and scalable way.
                Over the course of my projects I have made my fair share of large mistakes in this area, and
                this is a way for me to share my insight.
            </p>
        </section>

        <!-- ============================ WHEN TO SKIP ============================ -->
        <section class="flex flex-col gap-5">
            <h2 class="section-heading">When to skip this</h2>
            <p>Let us start with why you <em>wouldn't</em> want to do this.</p>

            <div class="callout">
                <h3 class="callout-title">1. Very small projects</h3>
                <p>
                    Game jams, test projects, and the like. Here the focus is on fast development and there is
                    never the intention to develop the project any further.
                </p>
            </div>

            <div class="callout">
                <h3 class="callout-title">2. Prototype stage</h3>
                <p>
                    Thinking about the bigger structure in this stage can hinder the prototype phase. You will only
                    want to prototype a few isolated systems and mechanics anyway, and the chances are high that you
                    will have to change everything constantly because you have not yet validated your ideas.
                </p>
            </div>
        </section>

        <!-- ============================ WHEN IT MAKES SENSE ============================ -->
        <section class="flex flex-col gap-4">
            <h2 class="section-heading">So when does it make sense?</h2>
            <p>
                Then, when your prototype is finished and you have written a clear plan about the game, you start
                thinking about scalability. It is often advisable to restart in a new project to avoid technical debt
                and to give yourself an easy way to rethink and reorganize the structure. But you can of course port
                over a lot of the functionality, like for example already balanced
                <code>PlayerMovement</code> code.
            </p>
        </section>

        <!-- ============================ FOLDER STRUCTURE ============================ -->
        <section class="flex flex-col gap-5">
            <h2 class="section-heading">Folder Structure</h2>
            <p>For folder structure there are two main ways to go about it:</p>

            <ImagePlaceholder
                type="image"
                ratio="16 / 9"
                dimensions="Recommended ~1600 × 900px"
                label="Side-by-side folder tree diagram showing an Object-Oriented layout vs. a Type-Oriented layout for the same project."
                caption="Object-Oriented vs. Type-Oriented folder layouts compared side by side."
            />

            <div class="grid md:grid-cols-2 gap-5">
                <div class="info-card">
                    <h3 class="info-card-title">Object Oriented</h3>
                    <p class="mb-3 text-slate-400 text-sm">
                        Every object has its own folder containing the related model, texture, code and animations.
                    </p>
                    <ul class="flex flex-col gap-2">
                        <li class="pro">Good for working on a specific object as a singular unit. You don't have to jump around between a bunch of different folders.</li>
                        <li class="con">It can be hard to know where to put things used in multiple places. You will almost always still need a generic scripts folder for miscellaneous code.</li>
                        <li class="con">People in the team with specific roles that don't touch other things now have to jump around more often.</li>
                    </ul>
                </div>

                <div class="info-card">
                    <h3 class="info-card-title">Type Oriented</h3>
                    <p class="mb-3 text-slate-400 text-sm">
                        Everything ordered by type: a folder for art with sub-folders for animations, models, textures
                        and materials, and one folder for all scripts that are then further subdivided.
                    </p>
                    <ul class="flex flex-col gap-2">
                        <li class="pro">Everything is very clear and ordered logically.</li>
                        <li class="con">You have to jump around a lot if you are working on an entire object at once.</li>
                    </ul>
                </div>
            </div>

            <p>
                From my experience, object oriented doesn't scale very well. So for large companies with big
                specialized teams, the type oriented approach makes a lot of sense. On the other hand, if you have a
                small company where one developer will touch the model, material and the code, object-oriented might
                make more sense.
            </p>
            <p>
                In the end, I, like most others, often go for a hybrid solution. The best advice I can give is to
                think about what makes sense and to stick with it. Larger projects can quickly spiral out of control
                if the files are not where they should be.
            </p>
            <p class="text-slate-400 italic">
                Before we go into an example folder structure, I first want to talk about something else&hellip;
            </p>
        </section>

        <!-- ============================ ASSEMBLY DEFINITIONS ============================ -->
        <section class="flex flex-col gap-5">
            <h2 class="section-heading">Assembly Definitions</h2>

            <p class="font-semibold text-white">First of all, what are assembly definitions?</p>
            <p>
                Assembly definitions are a way to divide C# code into individual chunks. These can then be explicitly
                referenced elsewhere and are compiled separately.
            </p>

            <p class="font-semibold text-white">But why should you even bother with them?</p>
            <p>There are two main reasons:</p>
            <ol class="numbered-list">
                <li><strong>Shorter compile times</strong></li>
                <li><strong>Structure</strong></li>
            </ol>

            <p>
                Shorter compile times is pretty self-explanatory. When you use multiple assembly definitions and you
                change a part of the code, only the assembly containing the changed code needs to be recompiled. This
                results in a lot smaller compile times, which can be an absolute lifesaver in some projects where after
                every small change you have to wait 5 minutes to test something.
            </p>

            <div class="callout callout-warning">
                <p>
                    There is one caveat however: all assemblies that directly reference an assembly also need to be
                    recompiled. So you have to think about <em>what</em> code to segment and <em>where</em>, in
                    other words, you have to think a lot about code structure!
                </p>
            </div>

            <p>
                Assembly definitions force you to think about and really limit the amount of connection points you have
                between different pieces of code, which helps a lot with preventing spaghetti code later down the line.
                Assembly definitions also cannot reference each other circularly, as this creates a circular reference.
                This ensures a certain hierarchy in the code base, where general systems shouldn't care about where and
                how they are used or implemented. This naturally prevents the so-called spaghetti code, where updating
                code and tracking down bugs becomes a wild chase around the code base finding where and what references
                or is influenced by specific parts.
            </p>

            <ImagePlaceholder
                type="image"
                ratio="16 / 7"
                dimensions="Recommended ~1600 × 700px"
                label="A before/after compile time comparison, 'one big assembly: recompile everything' vs. 'multiple assemblies: recompile one'."
                caption="How splitting code into assemblies shrinks recompile scope."
            />
        </section>

        <!-- ============================ CREATING AN ASSEMBLY DEFINITION ============================ -->
        <section class="flex flex-col gap-5">
            <h2 class="section-heading">How do you create an assembly definition?</h2>

            <p>
                To organize your project code into assemblies, create a folder for each desired assembly and move the
                scripts that should belong to each assembly into the relevant folder. Then
                <a class="fancy-link text-violet-400"
                   href="https://docs.unity3d.com/2021.3/Documentation/Manual/ScriptCompilationAssemblyDefinitionFiles.html#create-asmdef"
                   target="_blank">create Assembly Definition assets</a>
                to specify the assembly properties.
            </p>

            <p>To create an Assembly Definition asset:</p>
            <ol class="numbered-list">
                <li>In the Project window, locate the folder containing the scripts you want to include in the assembly.</li>
                <li>Create an Assembly Definition asset in the folder (menu: <code>Assets &gt; Create &gt; Assembly Definition</code>).</li>
                <li>Assign a name to the asset. By default the assembly file uses the name you assign to the asset, but you can change the name in the Inspector window.</li>
            </ol>

            <ImagePlaceholder
                type="image"
                ratio="16 / 10"
                dimensions="Recommended ~1400 × 875px"
                label="Screenshot of the Assembly Definition asset's Inspector window, highlighting the Name, Root Namespace and platform fields."
                caption="The Assembly Definition Inspector, where you set the name, namespace and target platforms."
            />

            <p>
                Unity takes all of the scripts in a folder that contains an Assembly Definition asset and compiles them
                into an assembly, using the name and other settings defined by the asset. Unity also includes scripts in
                any child folders in the same assembly, unless the child folder has its own Assembly Definition or
                Assembly Reference asset.
            </p>
            <p>
                To include scripts from a non-child folder in an existing assembly, create an Assembly Reference asset in
                the non-child folder and set it to reference the Assembly Definition asset that defines the target
                assembly. For example, you can combine the scripts from all the Editor folders in your project into their
                own assembly, no matter where those folders are located.
            </p>
            <p>
                Unity compiles assemblies in an order determined by their dependencies; you cannot specify the order in
                which compilation takes place.
            </p>
            <p>
                In the settings you can see a field for the <strong>root namespace</strong>. Assemblies can be used
                without their own namespace, but usually it is smart to put all code for one assembly into its own
                namespace. This way you can clearly see which file references which namespace. For this you need a project
                name or a working title, and then after the dot you can put what kind of assembly it is.
            </p>
            <p>
                Furthermore, you can specify for which build platforms you want to build this assembly. This allows you to
                use different systems on different platforms, but it is mostly used to exclude and isolate editor code with
                a single checkbox.
            </p>
        </section>

        <!-- ============================ EXAMPLE PROJECT ============================ -->
        <section class="flex flex-col gap-5">
            <h2 class="section-heading">Example Project</h2>

            <p>
                To help illustrate the points about assembly definitions and folder structure, I will show an example
                project and explain some of the base assemblies I like to make. The project name for this project was
                <strong>ProjectLantern</strong>.
            </p>

            <ImagePlaceholder
                type="image"
                ratio="3 / 4"
                dimensions="Recommended ~900 × 1200px (tall)"
                label="The full Assets folder tree shown on screen, expanded into the folder for each section described below."
                caption="The complete ProjectLantern Assets folder tree."
            />

            <p>
                We start at the root of the project, where it is nice to keep your own code and any plugins or tools you
                might have separate. Some plugins like TextMeshPro have to be in your root folder, so to achieve this I
                create a folder named <code>_ProjectLantern</code>. The underscore is there to always show it at the top
                of the folder list.
            </p>
            <p>
                Then in root you can have an assembly definition like <code>ProjectLantern.External</code> as a catch-all
                for external scripts that don't come with their own assembly. This ensures that that code, which you
                will likely never touch, never has to compile when you make your changes.
            </p>
            <p>
                Inside <code>_ProjectLantern</code> you will see two folders: <code>Editor</code> and <code>Runtime</code>.
                This distinction is important to make, as you don't want to ship any editor code or tools into your final
                release build.
            </p>
            <p>
                The Editor folder contains a <code>ProjectLantern.EditorTools</code> assembly definition, marked to only
                compile in the editor. The reason it is <em>EditorTools</em> and not just <em>Editor</em> is because Editor
                is a reserved term in Unity, and it will lead to compiler errors in your editor code if you name your
                assembly or namespace like that.
            </p>
            <p>
                The Runtime folder contains the <code>ProjectLantern</code> assembly definition. This is the baseline of
                your project and a catch-all for all code without a more specific assembly.
            </p>
            <p>
                Inside this Runtime folder I like to work object-oriented. For example, a player folder which holds art and
                code for the player. The same thing you can do for something like enemies or environmental objects. But you
                will still see a general <code>00_Scripts</code> folder, as not everything fits into a good category.
                Folders are numbered to ensure a specific order that doesn't change after adding new ones.
            </p>

            <div class="callout">
                <p>
                    This is already the main basis, and you can also end it here. This separation will already help a lot.
                    But to help you along with further subdividing the code base, here are some things you could think
                    about.
                </p>
            </div>

            <p>
                Utility code can be put into two separate assemblies, one in editor and one in runtime. These should never
                reference any code in your project and are referenced by almost everything. This also allows you to easily
                pull in your utility code from previous projects. But I will mention more about this later.
            </p>
            <p>
                Furthermore, in general just every easily separable piece of code. But even if something seems like it would
                result in a circular dependency, it can often still be done in a good way. For example in player code: the
                player singleton and some of its events need to be referenced in a lot of places, but all the internal
                workings and specific behaviour don't need to.
            </p>

            <ImagePlaceholder
                type="image"
                ratio="16 / 9"
                dimensions="Recommended ~1600 × 900px"
                label="A diagram showing the two player assemblies, what lives in each, and which direction the reference arrows point."
                caption="Splitting the player into a lean base assembly and a heavy subsystems assembly."
            />

            <p>
                In this case you could have a general <code>ProjectLantern.Player</code> in your player folder with few to no
                references, containing some abstract classes and enums. These can then be referenced elsewhere and don't
                require a lot of compilation time. Then you would create a subfolder named <code>Subsystems</code> with its own
                <code>ProjectLantern.Player.Subsystems</code> assembly definition. This can reference as much as it wants, but
                should never be referenced by anything; all connections go through the base assembly. This way the bulk of
                the player code will not need to be recompiled every time, and when changing the player code it only recompiles
                that part.
            </p>
        </section>

        <!-- ============================ UTILITY AND PACKAGES ============================ -->
        <section class="flex flex-col gap-5">
            <h2 class="section-heading">Utility and Packages</h2>

            <p>
                One of the biggest time sinks across multiple projects is rewriting the same utility code over and over. A
                <code>VectorExtensions</code> class here, a coroutine helper there, things that have nothing to do with
                your specific game but that every project ends up needing.
            </p>

            <h3 class="sub-heading">Reusing your own utility package</h3>
            <p>
                The cleanest solution is to pull your utility code out into its own Unity package, hosted in a git repository.
                Unity's Package Manager supports installing packages directly from a git URL, which means in any new project you
                can add your utilities in seconds without copying files around.
            </p>
            <p>
                Because the utility assemblies we discussed earlier never reference any project-specific code, they are already
                perfectly isolated and ready to be extracted this way. Keep the package lean and focused: generic math helpers,
                extension methods, common design pattern implementations, and so on. The more specific it gets, the less reusable
                it becomes.
            </p>

            <ImagePlaceholder
                type="image"
                ratio="16 / 10"
                dimensions="Recommended ~1400 × 875px"
                label="Screenshot of Unity's Package Manager window with the 'Add package from git URL' dialog open."
                caption="Adding a reusable utility package straight from a git URL."
            />
        </section>

        <!-- ============================ PROJECT TEMPLATE SETUP ============================ -->
        <section class="flex flex-col gap-5">
            <h2 class="section-heading">Project Template Setup</h2>

            <ImagePlaceholder
                type="gif"
                ratio="16 / 9"
                dimensions="Recommended ~1280 × 720px"
                label="A before/after showing a blank default Unity project vs. the template project opening with everything already in place."
                caption="A blank slate vs. opening from your opinionated template."
            />

            <p>
                Once you have done the initial project setup described in this tutorial a few times, it makes sense to save it as
                a project template. This way your folder structure, assembly definitions, package dependencies and any initial
                editor configuration are all there from the moment you create a new project.
            </p>
            <p>
                You can create a custom template from an existing project using the Unity editor or by manually packaging the
                project structure. From then on, every new project starts from a clean, opinionated baseline instead of a blank
                slate, which is a surprisingly large time saver.
            </p>
        </section>

        <!-- ============================ SCENE SETUP ============================ -->
        <section class="flex flex-col gap-5">
            <h2 class="section-heading">Scene Setup</h2>
            <p>
                Now that the folder structure is in order, it is time to think about how to structure your scenes. This might seem
                like a secondary concern, but it becomes very relevant once your project grows and loading times or initialization
                order start causing problems.
            </p>

            <h3 class="sub-heading">Boot scene</h3>
            <p>
                The idea of a boot scene is simple: it is the one scene that is always loaded first and never unloaded. Its job is
                purely to initialize core systems; things like your <code>GameManager</code>, <code>AudioManager</code>,
                <code>SceneLoader</code>, and any other persistent managers or services that need to exist for the entire lifetime
                of the game. Naturally, this boot scene is at index 0 in the scene list.
            </p>

            <ImagePlaceholder
                type="image"
                ratio="16 / 9"
                dimensions="Recommended ~1600 × 900px"
                label="Diagram showing the boot scene at the base with persistent managers, and game scenes loading additively on top."
                caption="The boot scene stays loaded while gameplay scenes swap in and out additively."
            />

            <p>
                These managers are often implemented as singletons or registered into a service locator, and because they live in
                the boot scene they are guaranteed to exist before anything else tries to use them. This avoids the classic problem
                of a manager not being present in a scene during development and causing null reference errors.
            </p>

            <h3 class="sub-heading">Additive scene loading</h3>
            <p>
                For the rest of the scenes, rather than swapping out one scene for another using the default single load mode, you
                are better off using additive scene loading. This lets you load scenes on top of each other. Combined with the boot
                scene, this means your managers stay loaded while you swap gameplay content in and out underneath them. In this way
                you could even dynamically load parts of your world in and out based on player proximity.
            </p>

            <ImagePlaceholder
                type="video"
                ratio="16 / 9"
                dimensions="Recommended ~1280 × 720px"
                label="Short clip demonstrating additive loading: a level streaming in/out around the player while the UI and lighting scenes stay loaded."
                caption="Optional: additive scene streaming in action."
            />

            <p>
                This approach also pairs naturally with splitting your game into logical scene layers. For example, you might have a
                dedicated UI scene, a lighting scene, and the actual level scene all loaded at the same time. This makes it easy for
                multiple people to work on the same "level" without constantly getting merge conflicts in one big scene file.
            </p>
            <p>
                The <code>SceneLoader</code> itself should live in the boot scene and be responsible for managing which scenes are
                currently loaded, handling loading screens, and knowing the difference between scenes that should persist and scenes
                that should be swapped. Keeping this logic centralized means the rest of your code just fires off a request and
                doesn't need to know anything about how loading actually works.
            </p>
        </section>

        <!-- ============================ C# CONVENTIONS ============================ -->
        <section class="flex flex-col gap-5">
            <h2 class="section-heading">C# Conventions</h2>
            <p>Now let's finally look at some actual code, namely conventions!</p>
            <p>
                Because all the structural work above means nothing if the code itself is inconsistent. When multiple people touch
                the same codebase, or even when you come back to your own code six months later, consistent formatting and naming
                conventions are what keep things readable.
            </p>

            <h3 class="sub-heading">The .editorconfig file</h3>
            <p>
                The <code>.editorconfig</code> file is a simple, widely-supported way to define and enforce code style rules at the
                project level. Placed at the root of your project, it is automatically picked up by Visual Studio, Rider and VS Code
                without any extra setup. This means every developer on the team gets the same formatting rules applied in their IDE
                automatically, regardless of their personal settings.
            </p>
            <p>For a Unity C# project, a good starting set of rules includes things like:</p>
            <ul class="dashed text-slate-200 ml-4 flex flex-col gap-2">
                <li>Naming rules for example, enforcing <code>_camelCase</code> for private fields and <code>PascalCase</code> for methods and properties.</li>
                <li>Blank line rules and brace style.</li>
                <li>Whether <code>var</code> is preferred over explicit types (I personally hate <code>var</code> and love explicit types for their readability, but you are allowed an incorrect opinion).</li>
            </ul>

            <figure class="w-full">
                <img
                    class="w-full rounded-lg border border-slate-700"
                    src="../assets/Masterclass/editorconfig_codesnippet.png"
                    alt="A snippet of a sample .editorconfig file showing C# formatting and style rules."
                />
                <figcaption class="mt-2 text-center text-sm text-slate-400 italic">
                    A snippet from my <code>.editorconfig</code>, defining brace style and inline control-flow rules.
                </figcaption>
            </figure>

            <a
                :href="editorConfigUrl"
                download=".editorconfig"
                class="group flex items-center gap-4 rounded-lg border border-slate-700 bg-slate-800/40 p-4
                       transition-colors hover:border-violet-400/70 hover:bg-slate-800/70 no-underline"
            >
                <FontAwesomeIcon :icon="faFileLines" class="text-3xl text-violet-400 shrink-0" />
                <div class="flex flex-col min-w-0">
                    <span class="font-semibold text-white">.editorconfig</span>
                    <span class="text-sm text-slate-400">My full ruleset, ready to drop into your project root.</span>
                </div>
                <span class="ml-auto flex items-center gap-2 text-violet-300 shrink-0 group-hover:text-violet-200">
                    <FontAwesomeIcon :icon="faDownload" />
                    <span class="font-medium hidden sm:inline">Download</span>
                </span>
            </a>

            <p>
                I have left my full <code>.editorconfig</code> file above for reference, but be sure to come up with your own
                set of rules based on your preferences.
            </p>
            <p>
                The real value of <code>.editorconfig</code> is not just that it formats code, but that it can also be configured to
                raise warnings or errors for violations, which means code review doesn't have to spend time on style issues.
                Furthermore, committing the <code>.editorconfig</code> to version control means it travels with the project. Anyone
                who clones the repo immediately gets consistent behaviour.
            </p>
        </section>

        <!-- ============================ CLOSER ============================ -->
        <section class="flex flex-col gap-4 border-t border-slate-700 pt-8">
            <h2 class="section-heading">Closing Thoughts</h2>
            <p>
                I wish someone had shown me all of this at the start of my first big project. It would have saved me a lot of
                headaches. None of it is complicated on its own, but having it all in place from day one makes a real difference as a
                project grows. Hopefully this gives you a solid starting point.
            </p>
            <p class="font-semibold text-white">Good luck on your future projects!</p>
        </section>

    </article>

    </ProjectPage>
</template>

<script setup>
import ProjectPage from '../components/ProjectPage.vue';
import ImagePlaceholder from '../components/ImagePlaceholder.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFileLines, faDownload } from '@fortawesome/free-solid-svg-icons'

const editorConfigUrl = new URL('../assets/Masterclass/.editorconfig', import.meta.url).href;
</script>

<style scoped>
.section-heading {
    @apply font-extrabold lg:text-3xl text-2xl text-violet-400 scroll-mt-24;
}

.sub-heading {
    @apply font-bold text-xl text-white mt-2;
}

code {
    @apply font-mono text-[0.9em] text-violet-300 bg-slate-800/70 rounded px-1.5 py-0.5;
}

.numbered-list {
    @apply list-decimal ml-7 flex flex-col gap-2 marker:text-violet-400 marker:font-bold;
}

.callout {
    @apply border-l-4 border-violet-400/60 bg-slate-800/40 rounded-r-lg pl-5 pr-4 py-4 flex flex-col gap-2;
}

.callout-warning {
    @apply border-amber-400/70 bg-amber-400/5;
}

.callout-title {
    @apply font-bold text-white text-lg;
}

.info-card {
    @apply border border-slate-700 bg-slate-800/30 rounded-lg p-5 flex flex-col;
}

.info-card-title {
    @apply font-bold text-xl text-violet-300 mb-1;
}

.pro,
.con {
    @apply pl-7 relative text-base text-slate-300;
}

.pro::before {
    content: "✓";
    @apply absolute left-0 top-0 font-bold text-green-400;
}

.con::before {
    content: "✕";
    @apply absolute left-0 top-0 font-bold text-red-400;
}
</style>

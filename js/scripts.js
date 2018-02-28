/**
 * Wrap everything in an IIFE (Immediately Invoked Function Expression) to keep
 * our variables constrained to the scope of this function and out of the global scope.
 */
(function() {

  /******************************************************
  * Package data and constructor objects
  *******************************************************/

  // Package data array (simulated data source, such as JSON or database recordset)
  var data = [
    {
      name: '1. atom-beautify',
      description: 'The atom-beautify package will clean up your code, and make it more readable. It has support for a variety of programming languages, including HTML, CSS, JavaScript, PHP, Python, Ruby, Java, C, C++, C#, Objective-C, CoffeeScript, and more. It will only beautify selected text if a selection is found, otherwise the beautify command ^ + ⌥ + b, or typing “Beautify” from the Command Palette will beautify the whole file.',
      author: 'Glavin001',
      url: 'https://atom.io/packages/atom-beautify',
      downloads: 4233754,
      stars: 4546,
      selector: 'p1'
    },
    {
      name: '2. Ask Stack',
      description: 'Hate switching between your browser and the editor? The Ask Stack Overflow package allows you to quickly search Stack Overflow and get code samples directly in the Atom editor. To use, simply type ctrl + alt + a or type “Ask Stack” in the Command Palette.',
      author: 'Chris911',
      url: 'https://atom.io/packages/ask-stack',
      downloads: 47520,
      stars: 259,
      selector: 'p2'
    },
    {
      name: '3. git-time-machine',
      description: 'Ever wish you were not-so-secretly Marty Mcfly and could go back in time 🚀 🕐 ? Well the git-time-machine package allows you to travel through time! It shows you a visual plot of commits in your current file, over time. You can click on the timeplot, or hover over it and see all of the commits for a specific time range. You can also view the git-diff between the current version and the previous version, once a selection is made. 💭 Now if only it could see into the future and finish our projects for us.',
      author: 'littlebee',
      url: 'https://atom.io/packages/git-time-machine',
      downloads: 290896,
      stars: 952,
      selector: 'p3'
    },
    {
      name: '4. Project Manager',
      description: 'The Project Manager package provides quick and easy access for switching between projects in Atom. Save a project by typing “Project Manager: Save Project” into the Command Palette. Once saved, type ctrl-cmd-p (on a Mac) or alt-shift-p (on a PC) to activate a list of saved projects with the Project Manager package. Projects can be filtered by title, group, or template.',
      author: 'danielbrodin',
      url: 'https://atom.io/packages/project-manager',
      downloads: 788088,
      stars: 2080,
      selector: 'p4'
    },
    {
      name: '5. Highlight Selected',
      description: 'The Highlight Selected package is super simple, it highlights the current word selected on double click. Especially useful if you’re looking for a particular method name or function within a file without having to open the find panel.',
      author: 'richrace',
      url: 'https://atom.io/packages/highlight-selected',
      downloads: 1043959,
      stars: 2741,
      selector: 'p5'
    },
    {
      name: '6. File Icons',
      description: 'The File Icons package displays specific and meaningful icons next to files in your file-tree, fuzzy-finder, and tabs. They help to visually parse file types with little effort. You can choose between colored or monochrome icons.',
      author: 'file-icons',
      url: 'https://atom.io/packages/file-icons',
      downloads: 4285566,
      stars: 4950,
      selector: 'p6'
    },
    {
      name: '7. Pigments',
      description: 'The Pigments package displays colors in project files, wherever it parses a color to be. It’s super helpful to easily determine what a specific hex code might be, especially if the color isn’t labelled by a variable.',
      author: 'abe33',
      url: 'https://atom.io/packages/pigments',
      downloads: 2130690,
      stars: 3332,
      selector: 'p7'
    },
    {
      name: '8. Minimap',
      description: 'The Minimap package displays a Minimap preview of your file on the right hand side of your editor. You can turn code highlights on and off, as well as change the preview to be on the left-hand side if you wish. It also has a ton of other customizations if you want to dig deeper.',
      author: 'atom-minimap',
      url: 'https://atom.io/packages/minimap',
      downloads: 4502518,
      stars: 5173,
      selector: 'p8'
    },
    {
      name: '9. Pane Layout Plus',
      description: 'The Pane Layout Plus package allows you to easily organize and control the distribution of multiple panes in Atom. This package has shortcuts to jump between columns, and set column layouts.',
      author: 'chemoish',
      url: 'https://atom.io/packages/pane-layout-plus',
      downloads: 10105,
      stars: 46,
      selector: 'p9'
    },
    {
      name: '10. Auto-Update-Packages',
      description: 'Auto-Update-Packages keeps your Atom packages up-to-date. It checks for package updates every six hours. If there are any available updates, it installs them and notifies you that they’ve been installed. You can also customize the frequency of the update check.',
      author: 'yujinakayama',
      url: 'https://atom.io/packages/auto-update-packages',
      downloads: 53047,
      stars: 220,
      selector: 'p10'
    }
  ];

  // (Atom) Package constructor function
  function Package(data) {
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.selector = data.selector; // *** REMEMBER TO ADD THIS IF YOU ADDED IT TO THE DATA OBJECTS ** //

    this.getFormattedDownloads = function () {
      return this.downloads.toLocaleString();
    };

    this.getFormattedStars = function () {
      return this.stars.toLocaleString();
    };
  }

  /******************************************************
   * Utility functions
   ******************************************************/

  // Returns today's date, formatted
  var getTodaysDate = function() {
    var today = new Date();
    return today.toDateString();
  };

  // Returns DOM element by id.
  // We're just wrapping document.getElementById
  // in a shorthand function. If this seems confusing,
  // then just replace getEl with document.getElementById
  // in the writePackageInfo function.
  var getEl = function (id) {
    return document.getElementById(id);
  }

  /**
   * Write's the package object's data to the appropriate
   * DOM elements utilizing the package selector property.
   * @param  {Package} package  Package object
   * @return {void}
   */
  var writePackageInfo = function(package) {
    // Get reference to DOM elements
    var selector = package.selector,
      nameEl = getEl(selector + '-name'),
      descEl = getEl(selector + '-description'),
      authEl = getEl(selector + '-author'),
      downloadEl = getEl(selector + '-downloads'),
      starsEl = getEl(selector + '-stars');

      // Write package data to DOM elements
      nameEl.textContent = package.name;
      descEl.textContent = package.description;
      authEl.textContent = package.author;
      downloadEl.textContent = package.getFormattedDownloads();
      starsEl.textContent = package.getFormattedStars();
  }

  /******************************************************
   * Utilize package data and constuctor objects to
   * construct each package, then add package data to
   * the page via DOM functions.
   ******************************************************/

  // Write date
  dateEl = getEl('date');
  dateEl.textContent = getTodaysDate();

  /**
   * Write package data one-by-one or with a for loop.
   * Remember to comment out the one you don't use.
   */

  // Write package data one-by-one
  var beautify = new Package(data[0]);
  writePackageInfo(beautify);

  var askStack = new Package(data[1]);
  writePackageInfo(askStack);

  var timeMachine = new Package(data[2]);
  writePackageInfo(timeMachine);

  var projectManager = new Package(data[3]);
  writePackageInfo(projectManager);

  var highlightSelected = new Package(data[4]);
  writePackageInfo(highlightSelected);

  var fileIcons = new Package(data[5]);
  writePackageInfo(fileIcons);

  var pigments = new Package(data[6]);
  writePackageInfo(pigments);

  var minimap = new Package(data[7]);
  writePackageInfo(minimap);

  var layoutPlus = new Package(data[8]);
  writePackageInfo(layoutPlus);

  var updatePackages = new Package(data[9]);
  writePackageInfo(updatePackages);
  // continue with eight more packages... OR

  // Write package data using for loop
  // for (var i = 0; i < data.length; i++) {
  //   var package = new Package(data[i]);
  //   writePackageInfo(package);
  // }

}());

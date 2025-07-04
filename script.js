//your JS code here. If required.
const bands = [
      'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
      'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
      'We Came as Romans', 'Counterparts', 'Oh, Sleeper',
      'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
    ];

    // Helper function to strip articles for sorting
    function stripArticle(bandName) {
      return bandName.replace(/^(a |an |the )/i, '').trim();
    }

    // Sort ignoring articles
    const sortedBands = bands.sort((a, b) => {
      const nameA = stripArticle(a).toLowerCase();
      const nameB = stripArticle(b).toLowerCase();
      return nameA.localeCompare(nameB);
    });

    // Render sorted bands into the list
    const ul = document.getElementById('band');
    sortedBands.forEach(band => {
      const li = document.createElement('li');
      li.textContent = band;
      ul.appendChild(li);
    });
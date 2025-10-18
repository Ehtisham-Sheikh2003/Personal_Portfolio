window.addEventListener('DOMContentLoaded', () => {

    const phrases = [
        "Hi!",
        "My Name is",
        "Ehtisham Tasadduq",
        "I am a Web Developer and Programmer"
    ];
    const typingNodes = [
        document.querySelector('h5.Name.typing'),
        document.querySelector('h6.Name.typing'),
        document.querySelector('h1.Name.typing'),
        document.querySelector('h3.Name.typing')
    ];

    
    typingNodes.forEach(node => {
        if (node) node.textContent = '';
    });

    function typePhrase(node, text, callback) {
        let i = 0;
        function type() {
            if (i <= text.length) {
                node.textContent = text.slice(0, i);
                i++;
                setTimeout(type, 80);
            } else {
                setTimeout(callback, 800);
            }
        }
        type();
    }

    function loopPhrases(index = 0) {
        const node = typingNodes[index];
        const text = phrases[index];
        if (node) {
            typePhrase(node, text, () => {
                // Move to next line
                if (index < phrases.length - 1) {
                    loopPhrases(index + 1);
                } else {
                    // All lines typed, wait and start over
                    setTimeout(() => {
                        // Clear all lines
                        typingNodes.forEach(node => {
                            if (node) node.textContent = '';
                        });
                        // Start new cycle
                        loopPhrases(0);
                    }, 2000);
                }
            });
        } else {
            // If node not found, skip to next
            if (index < phrases.length - 1) {
                loopPhrases(index + 1);
            }
        }
    }

    loopPhrases();
});




const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const navBar = document.getElementById('nav-bar');

if (mobileNavToggle && navBar) {
    // Toggle navigation on button click
    mobileNavToggle.addEventListener('click', () => {
        navBar.classList.toggle('active');
        mobileNavToggle.classList.toggle('active');
    });

  
    document.addEventListener('click', (e) => {
        if (!navBar.contains(e.target) && !mobileNavToggle.contains(e.target)) {
            navBar.classList.remove('active');
            mobileNavToggle.classList.remove('active');
        }
    });

    
    navBar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navBar.classList.remove('active');
            mobileNavToggle.classList.remove('active');
        });
    });
}



document.addEventListener('DOMContentLoaded', () => {
  const projectItems = document.querySelectorAll('#proj li');
  
  projectItems.forEach(item => {
    
    const description = item.querySelector('p');
    if (description) {
      const detailsDiv = document.createElement('div');
      detailsDiv.className = 'project-details';
      detailsDiv.appendChild(description);
      item.appendChild(detailsDiv);
    }
    
    
    item.addEventListener('click', (e) => {
      
      if (e.target.tagName === 'A') return;
      
      
      if (!item.classList.contains('active')) {
        projectItems.forEach(otherItem => {
          otherItem.classList.remove('active');
        });
      }
      
      
      item.classList.toggle('active');
    });
  });
});

const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) sec.classList.add('visible');
  });
});

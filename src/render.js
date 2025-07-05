document.addEventListener('DOMContentLoaded', function() {
    //Start button in first page
    const startButtonn = document.getElementById('start-btn');
    if (startButtonn) {
        startButtonn.addEventListener('click', () => {
            window.location.href = 'menu/menu.html';
    });
    }

    // Menu buttons
    const deepWorkBtn = document.getElementById('deep-work');
    const creativeFlowBtn = document.getElementById('creative-flow');
    const adminBrustBtn = document.getElementById('admin-brust');
    const learningBtn = document.getElementById('learning-review');

    if (deepWorkBtn) {
        deepWorkBtn.addEventListener('click', () => {
            window.electron.send('navigate', 'mode/deepwork.html');
        });
    }

    if (creativeFlowBtn) {
        creativeFlowBtn.addEventListener('click', () => {
            window.electron.send('navigate', 'mode/creativeflow.html');
        });
    }

    if (adminBrustBtn) {
        adminBrustBtn.addEventListener('click', () => {
            window.electron.send('navigate', 'mode/adminbrust.html');
        });
    }

    if (learningBtn) {
        learningBtn.addEventListener('click', () => {
            window.electron.send('navigate', 'mode/learningreview.html');
        });
    }
});

//Contract and Close buttons 
document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.querySelector('.close-icon');
    const contractBtn = document.querySelector('.contract-icon');

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            window.electron.send('window-control', 'quit');
        });
    }

    if (contractBtn) {
        contractBtn.addEventListener('click', () => {
            window.electron.send('window-control', 'minimize');
        });
    }
});

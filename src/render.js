document.addEventListener('DOMContentLoaded', function() {
    //Start button in first page
    const startButtonn = document.getElementById('start-btn');
    if (startButtonn) {
        startButtonn.addEventListener('click', () => {
            window.location.href = 'menu/menu.html';
    });
    }

    //Get references to all menu buttons
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


})


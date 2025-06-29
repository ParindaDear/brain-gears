document.addEventListener('DOMContentLoaded', function() {
    //Start button in first page
    const startButtonn = document.getElementById('start-btn');
    if (startButtonn) {
        document.getElementById('start-btn').addEventListener('click', () => {
            window.location.href = 'menu/menu.html';
    });
    }

    //Get references to all menu buttons
    const deepWorkBtn = document.getElementById('deep-work');
    const creativeFlowBtn = document.getElementById('creative-flow');
    const adminBrustBtn = document.getElementById('admin-brust');
    const learningBtn = document.getElementById('learning-review');
})
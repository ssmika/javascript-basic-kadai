const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    setTimeout(() => {
        const header2 = document.getElementById('text');
        header2.textContent = 'ボタンをクリックしました';    
    },2000);
});    
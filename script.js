function changeStyle(style) {
    const formContainer = document.getElementById('formContainer');
    if (style === 'style1') {
        formContainer.className = 'style1';
    } else if (style === 'style2') {
        formContainer.className = 'style2';
    } else {
        formContainer.className = '';
    }
}

// Click avatar to open modal!
function openProfileModal() {
    const modal = document.getElementById('profileModal');
    modal.classList.add('open');
    modal.style.display = 'flex';
    document.getElementById('editName').value = document.getElementById('profileName').innerText;
    document.getElementById('editBio').value = document.getElementById('profileBio').innerText;
}

// Edit Profile via button (same behavior as avatar for reuse)
function editProfile() { openProfileModal(); }

// Fade out with smooth animation
function closeEdit() {
    const modal = document.getElementById('profileModal');
    modal.classList.remove('open');
    setTimeout(() => { modal.style.display = "none"; }, 330);
}

// Save changes and close
function saveProfile() {
    document.getElementById('profileName').innerText =
        document.getElementById('editName').value.trim();
    document.getElementById('profileBio').innerText =
        document.getElementById('editBio').value.trim();
    closeEdit();
}

// Click outside to close modal
window.onclick = function(event) {
    const modal = document.getElementById('profileModal');
    if (event.target === modal && modal.classList.contains('open')) {
        closeEdit();
    }
}
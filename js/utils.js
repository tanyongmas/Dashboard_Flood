/**
 * Utility Functions & Helpers
 * ระบบรายงานสถานการณ์น้ำท่วม ทต.ตันหยงมัส
 */

// ฟังก์ชันวิเคราะห์หาโซนที่แม่นยำที่สุด ป้องกันปัญหาคำซ้อนทับกัน (Substring Overlap)
window.getExactZoneForAddress = function (address) {
    if (!address) return 'zone 5';

    let matchedZone = 'zone 5';
    let maxMatchLength = 0;

    for (const [zone, streets] of Object.entries(window.ZONE_RULES)) {
        for (const street of streets) {
            if (address.includes(street)) {
                if (street.length > maxMatchLength) {
                    maxMatchLength = street.length;
                    matchedZone = zone;
                }
            }
        }
    }
    return matchedZone;
};

// ฟังก์ชันจัดการ UI หลัง Login
function setupUserInterface(user) {
    if (!user) return;

    const nameDisplay = document.getElementById('displayUserName');
    const roleDisplay = document.getElementById('displayUserRole');

    if (nameDisplay) nameDisplay.innerText = user.name;
    if (roleDisplay) roleDisplay.innerText = user.role.toUpperCase();
}

function updateMenuByRole() {
    const allowed = PAGE_ACCESS[userRole] || ['shelter'];

    document.querySelectorAll('.nav-btn, .mobile-nav-btn').forEach(btn => {
        const page = btn.getAttribute('data-page');
        if (page) {
            btn.style.display = allowed.includes(page) ? 'flex' : 'none';
        }
    });

    document.querySelectorAll('.admin-only').forEach(el => {
        if (userRole === 'admin') {
            el.style.display = 'flex';
            el.classList.remove('hidden');
        } else {
            el.style.display = 'none';
            el.classList.add('hidden');
        }
    });

    const adminBtn = document.getElementById('adminMenuBtn');
    if (adminBtn) {
        if (userRole === 'admin') {
            adminBtn.style.display = 'flex';
            adminBtn.classList.remove('hidden');
        } else {
            adminBtn.style.display = 'none';
            adminBtn.classList.add('hidden');
        }
    }
}

// ฟังก์ชันออกจากระบบ
function handleLogout() {
    Swal.fire({
        title: 'ยืนยันการออกจากระบบ?',
        text: "คุณต้องเข้าสู่ระบบใหม่เพื่อใช้งานอีกครั้ง",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#e11d48',
        confirmButtonText: 'ออกจากระบบ',
        cancelButtonText: 'ยกเลิก'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem('user_session');
            location.reload();
        }
    });
}

// ฟังก์ชันตรวจสอบรหัสผ่านดูข้อมูลส่วนบุคคล
async function checkPasswordBeforeDetailByData(idCard, name) {
    const { value: password } = await Swal.fire({
        title: 'ระบบรักษาความปลอดภัย',
        text: 'กรุณาระบุรหัสผ่านเพื่อดูข้อมูลส่วนตัว',
        input: 'password',
        inputPlaceholder: ' ',
        confirmButtonText: 'ยืนยัน',
        confirmButtonColor: '#2563eb',
        showCancelButton: true,
        cancelButtonText: 'ยกเลิก'
    });

    if (password === '1111') {
        showDetailsByData(idCard, name);
    } else if (password) {
        Swal.fire('รหัสผ่านไม่ถูกต้อง', 'คุณไม่ได้รับอนุญาตให้ดูข้อมูลนี้', 'error');
    }
}

async function checkPasswordBeforeDetail(index) {
    const { value: password } = await Swal.fire({
        title: 'ระบบรักษาความปลอดภัย',
        text: 'กรุณาระบุรหัสผ่านเพื่อดูข้อมูลส่วนตัว',
        input: 'password',
        inputPlaceholder: ' ',
        confirmButtonText: 'ยืนยัน',
        confirmButtonColor: '#2563eb',
        showCancelButton: true,
        cancelButtonText: 'ยกเลิก'
    });

    if (password === '1111') {
        showDetails(index);
    } else if (password) {
        Swal.fire('รหัสผ่านไม่ถูกต้อง', 'คุณไม่ได้รับอนุญาตให้ดูข้อมูลนี้', 'error');
    }
}

// ปิด Data Modal
function closeDataModal() {
    const modal = document.getElementById('dataModal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

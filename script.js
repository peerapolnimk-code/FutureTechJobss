const jobOptions = [
    { value: "AI & Machine Learning Engineer", label: "1. AI & Machine Learning Engineer (KBTG)" },
    { value: "Senior Data Scientist", label: "2. Senior Data Scientist (True Digital)" },
    { value: "Prompt Engineer & LLM Specialist", label: "3. Prompt Engineer & LLM Specialist (SCB 10X)" },
    { value: "Full-Stack AI Developer", label: "4. Full-Stack AI Developer (LINE Man Wongnai)" },
    { value: "Cloud & AI Infrastructure Engineer", label: "5. Cloud & AI Infrastructure Engineer (AIS)" }
];

const courseOptions = [
    { value: "Certified Generative AI & LLM Engineer Masterclass", label: "1. Certified Generative AI & LLM Engineer Masterclass" },
    { value: "Professional Data Science & Big Data Analytics", label: "2. Professional Data Science & Big Data Analytics" },
    { value: "Advanced Prompt Engineering for Enterprise AI", label: "3. Advanced Prompt Engineering for Enterprise AI" },
    { value: "Full-Stack AI Application Developer Bootcamp", label: "4. Full-Stack AI Application Developer Bootcamp" },
    { value: "Cloud & AI Infrastructure DevOps Masterclass", label: "5. Cloud & AI Infrastructure DevOps Masterclass" },
    { value: "AI Cybersecurity & Data Privacy Governance", label: "6. AI Cybersecurity & Data Privacy Governance" },
    { value: "Business Intelligence & AI for Executive Leaders", label: "7. Business Intelligence & AI for Executive Leaders" },
    { value: "UI/UX Design for AI-Powered Products & Web", label: "8. UI/UX Design for AI-Powered Products & Web" }
];

const jobDetailsData = {
    1: { title: "AI & Machine Learning Engineer", company: "KBTG", salary: "65,000 - 110,000 บาท/เดือน" },
    2: { title: "Senior Data Scientist", company: "True Digital Group", salary: "70,000 - 120,000 บาท/เดือน" },
    3: { title: "Prompt Engineer & LLM Specialist", company: "SCB 10X", salary: "60,000 - 100,000 บาท/เดือน" },
    4: { title: "Full-Stack AI Developer", company: "LINE Man Wongnai", salary: "55,000 - 95,000 บาท/เดือน" },
    5: { title: "Cloud & AI Infrastructure Engineer", company: "AIS", salary: "65,000 - 110,000 บาท/เดือน" }
};

function navigate(pageId) {
    const pages = document.querySelectorAll('.view-page');
    pages.forEach(page => page.classList.remove('active'));

    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => btn.classList.remove('active'));

    const targetPage = document.getElementById('page-' + pageId);
    if (targetPage) targetPage.classList.add('active');

    const targetBtn = document.getElementById('link-' + pageId);
    if (targetBtn) targetBtn.classList.add('active');
}

function openJobDetail(jobId) {
    const modal = document.getElementById('modalDetail');
    const content = document.getElementById('detailContent');
    const job = jobDetailsData[jobId] || { title: "ตำแหน่งงานที่ " + jobId, company: "FutureTechJobs Partner", salary: "ตามโครงสร้างบริษัท" };

    if (content) {
        content.innerHTML = `
            <h2 style="color: var(--neon-cyan); margin-bottom: 0.5rem;">${job.title}</h2>
            <p style="color: var(--text-dim); margin-bottom: 1rem;">🏢 ${job.company}</p>
            <p><strong><i class="fa-solid fa-coins"></i> ค่าตอบแทน:</strong> ${job.salary}</p>
            <p style="margin-top: 1rem;"><strong>รายละเอียดเบื้องต้น:</strong> มุ่งเน้นการพัฒนาและประยุกต์ใช้เทคโนโลยี AI ระดับองค์กร พร้อมสวัสดิการและโอกาสเติบโตก้าวกระโดด</p>
            <div style="margin-top: 1.5rem; text-align: right;">
                <button class="btn-action" onclick="closeJobDetail(); openApplyFormForCourse('${job.title}')">สมัครตำแหน่งนี้ <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        `;
    }

    if (modal) modal.style.display = 'flex';
}

function closeJobDetail() {
    const modal = document.getElementById('modalDetail');
    if (modal) modal.style.display = 'none';
}

function openApplyFormForCourse(courseName) {
    const modal = document.getElementById('modalApply');
    const formTitle = document.getElementById('formJobTitle');
    const selectEl = document.getElementById('targetSelect');

    if (formTitle) {
        formTitle.innerText = "ลงทะเบียน / สมัคร: " + courseName;
    }

    if (selectEl) {
        const allOptions = [...jobOptions, ...courseOptions];
        selectEl.innerHTML = allOptions.map(opt => `<option value="${opt.value}" ${opt.value === courseName ? 'selected' : ''}>${opt.label}</option>`).join('');
    }

    if (modal) modal.style.display = 'flex';
}

function closeApplyForm() {
    const modal = document.getElementById('modalApply');
    if (modal) modal.style.display = 'none';
}

function processSubmit(event) {
    event.preventDefault();
    
    const fName = document.getElementById('fName').value;
    const lName = document.getElementById('lName').value;
    const email = document.getElementById('uEmail').value;
    const phone = document.getElementById('uPhone').value;
    const gender = document.getElementById('uGender').value;
    const country = document.getElementById('uCountry').value;
    const address = document.getElementById('uAddress').value;
    const zip = document.getElementById('uZip').value;
    
    const alertBox = document.getElementById('validationError');
    let errors = [];

    if (!fName) errors.push("ชื่อ");
    if (!lName) errors.push("นามสกุล");
    if (!email) errors.push("อีเมล");
    if (!phone) errors.push("เบอร์โทรศัพท์");
    if (!gender) errors.push("เพศ");
    if (!country) errors.push("ประเทศ");
    if (!address) errors.push("ที่อยู่");
    if (!zip) errors.push("รหัสไปรษณีย์");

    if (errors.length > 0) {
        if (alertBox) {
            alertBox.style.display = "block";
            alertBox.innerHTML = "⚠ กรอกข้อมูลยังไม่ครบถ้วน ตรวจสอบช่อง: <br>• " + errors.join("<br>• ");
        }
        return;
    }

    if (alertBox) alertBox.style.display = "none";

    alert("✨ ดำเนินการสำเร็จ!\nระบบบันทึกข้อมูลการสมัครเรียบร้อยแล้ว");
    closeApplyForm();
    
    const jobForm = document.getElementById('jobForm');
    if (jobForm) jobForm.reset();
}
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
    1: {
        title: "AI & Machine Learning Engineer",
        company: "Kasikorn Business-Technology Group (KBTG) • กรุงเทพฯ",
        salary: "65,000 - 110,000 บาท/เดือน",
        experience: "ประสบการณ์ 2+ ปี ด้าน Machine Learning หรือ AI Development",
        openDate: "15-Oct-26",
        benefits: [
            "โบนัสประจำปีตามผลงาน และกองทุนสำรองเลี้ยงชีพ (PVD)",
            "ประกันสุขภาพกลุ่ม (IPD/OPD) คุ้มครองครอบครัว และตรวจสุขภาพประจำปี",
            "งบสนับสนุนการเรียนรู้คอร์สออนไลน์และสอบ Certify (AWS, Google Cloud)",
            "รูปแบบการทำงาน Hybrid (เข้าออฟฟิศสัปดาห์ละ 2 วัน)"
        ],
        responsibilities: [
            "พัฒนา ปรับปรุง และ Deploy โมเดล Machine Learning/Deep Learning เข้าสู่ระบบการทำงานจริงของธนาคาร",
            "ออกแบบสถาปัตยกรรม MLOps และสร้าง Data Pipeline สำหรับการประมวลผลข้อมูลขนาดใหญ่",
            "ทดสอบประสิทธิภาพของโมเดล และปรับแต่ง Parameter ให้มีความแม่นยำสูง",
            "ทำงานร่วมกับ Data Scientist และ Software Engineer เพื่อส่งมอบฟีเจอร์ AI ใหม่ๆ"
        ]
    }
};

function navigate(pageId) {
    const pages = document.querySelectorAll('.view-page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    const targetPage = document.getElementById('page-' + pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    const targetBtn = document.getElementById('link-' + pageId);
    if (targetBtn) {
        targetBtn.classList.add('active');
    }
}

function openJobDetail(jobId) {
    const modal = document.getElementById('modalDetail');
    const content = document.getElementById('detailContent');
    const job = jobDetailsData[jobId];

    if (job && content) {
        content.innerHTML = `
            <h2 style="color: var(--neon-cyan); margin-bottom: 0.5rem;">${job.title}</h2>
            <p style="color: var(--text-dim); margin-bottom: 1rem;">${job.company}</p>
            <p><strong>เงินเดือน:</strong> ${job.salary}</p>
            <p><strong>ประสบการณ์:</strong> ${job.experience}</p>
            <h3 style="margin-top: 1rem; color: #fff;">สวัสดิการ:</h3>
            <ul>${job.benefits.map(b => `<li>${b}</li>`).join('')}</ul>
            <h3 style="margin-top: 1rem; color: #fff;">หน้าที่ความรับผิดชอบ:</h3>
            <ul>${job.responsibilities.map(r => `<li>${r}</li>`).join('')}</ul>
        `;
    } else if (content) {
        content.innerHTML = `<h2>รายละเอียดตำแหน่งงานที่ ${jobId}</h2><p>กำลังปรับปรุงข้อมูลเพิ่มเติม</p>`;
    }

    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeJobDetail() {
    const modal = document.getElementById('modalDetail');
    if (modal) {
        modal.style.display = 'none';
    }
}

function openApplyFormForCourse(courseName) {
    const modal = document.getElementById('modalApply');
    const formTitle = document.getElementById('formJobTitle');
    const selectEl = document.getElementById('targetSelect');

    if (formTitle) {
        formTitle.innerText = "ลงทะเบียนอบรม: " + courseName;
    }

    if (selectEl) {
        selectEl.innerHTML = courseOptions.map(opt => `<option value="${opt.value}" ${opt.value === courseName ? 'selected' : ''}>${opt.label}</option>`).join('');
    }

    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeApplyForm() {
    const modal = document.getElementById('modalApply');
    if (modal) {
        modal.style.display = 'none';
    }
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

    if (alertBox) {
        alertBox.style.display = "none";
    }

    alert("✨ ดำเนินการสำเร็จ!\nระบบบันทึกข้อมูลของคุณเรียบร้อยแล้ว");
    closeApplyForm();
    
    const jobForm = document.getElementById('jobForm');
    if (jobForm) {
        jobForm.reset();
    }
}
# 🌊 ระบบรายงานสถานการณ์น้ำท่วมและปริมาณน้ำฝน เทศบาลตำบลตันหยงมัส

ระบบเว็บแอปพลิเคชันแดชบอร์ดสำหรับติดตามและรายงานสถานการณ์น้ำท่วม ปริมาณน้ำฝนเรียลไทม์ จุดอพยพ และการช่วยเหลือประชาชน สำหรับเทศบาลตำบลตันหยงมัส อะหมัด อำเภอระแงะ จังหวัดนราธิวาส

---

## 📌 จุดเด่นของระบบ (Key Features)

1. **Dashboard สถานการณ์น้ำท่วม (`index.html`)**
   - **Interactive Map**: แสดงแผนที่เสี่ยงภัย จุดเฝ้าระวังระดับน้ำ และพื้นที่อพยพผ่าน Leaflet.js
   - **Real-time Status**: ติดตามระดับน้ำ และสถานะเฝ้าระวัง/เตือนภัย/วิกฤต
   - **Evacuation & Relief Management**: ระบบลงทะเบียนผู้ประสบภัย จุดพักพิงชั่วคราว และสถิติการแจกถุงยังชีพ
   - **Citizen Emergency Mode**: รองรับการสแกน QR Code สำหรับประชาชนในการแจ้งสถานะขอความช่วยเหลือฉุกเฉิน
   - **Report Embedding**: เชื่อมต่อสรุปรายงานเชิงลึกผ่าน Google Looker Studio

2. **Dashboard ปริมาณน้ำฝน (`Rainfall.html`)**
   - **Data Visualization**: แสดงสถิติและกราฟปริมาณน้ำฝนย้อนหลังด้วย ApexCharts (รายวัน, รายเดือน, รายปี และสถิติ 5 ปี)
   - **Smart Filtering**: คำนวณฝนสะสมย้อนหลัง 3 วัน 7 วัน และเปรียบเทียบกับปีก่อนหน้า

3. **Backend Integration**
   - เชื่อมต่อข้อมูลโดยตรงกับ **Google Sheets** ผ่าน **Google Apps Script REST API** ไม่ต้องพึ่งพาเซิร์ฟเวอร์ฐานข้อมูลขนาดใหญ่

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```
Dashboard_Flood-main/
├── assets/
│   ├── favicon.ico             # ไอคอนเว็บบราวเซอร์
│   └── logo.png                # โลโก้ตราประทับเทศบาลตำบลตันหยงมัส
├── css/
│   ├── main.css                # สไตล์หลักของหน้า index.html และ Leaflet map fix
│   └── rainfall.css            # สไตล์ของหน้า Rainfall.html และ Animations
├── js/
│   ├── config.js               # การตั้งค่าระบบ, API Endpoints, Global Constants
│   ├── utils.js                # ฟังก์ชั่นยูทิลิตี้ (การแปลงวันที่, SweetAlert, Password check)
│   ├── map.js                  # ระบบจัดการแผนที่ Leaflet, Marker Layers, Drawing tools
│   ├── dashboard.js            # ระบบจัดการข้อมูลน้ำท่วม, ดึงข้อมูล API, ตารางสถานการณ์
│   └── rainfall.js             # ระบบจัดการข้อมูลน้ำฝน และ ApexCharts Visualization
├── index.html                  # หน้าแดชบอร์ดหลัก (Flood Situation Dashboard)
├── Rainfall.html               # หน้าแดชบอร์ดติดตามปริมาณน้ำฝน (Rainfall Dashboard)
├── .gitignore                  # ละเว้นไฟล์ขยะระบบปฏิบัติการและ IDE
└── README.md                   # เอกสารอธิบายโปรเจกต์
```

---

## 🚀 การติดตั้งและใช้งาน (Getting Started)

เนื่องจากโปรเจกต์นี้พัฒนาด้วย **Vanilla HTML5, CSS3, JavaScript (ES6)** และใช้ CDN สื่อสารภายนอก คุณสามารถรันโปรเจกต์ได้ทันทีโดยไม่ต้องติดตั้ง Node.js Build Step:

### 1. ทดสอบบนเครื่องส่วนบุคคล (Local Setup)
- ดาวน์โหลดหรือ `git clone` โปรเจกต์ลงในเครื่อง
- เปิดไฟล์ `index.html` หรือ `Rainfall.html` ผ่านเว็บบราวเซอร์ (Chrome, Firefox, Edge, Safari) หรือเปิดผ่าน Live Server ใน VS Code

### 2. การนำขึ้นโฮสต์ด้วย GitHub Pages (Deployment)
1. อัปโหลดไฟล์ในโฟลเดอร์นี้ขึ้นไปบน GitHub Repository ของคุณ
2. เข้าไปที่เซ็ตติ้งของ Repository: **Settings** -> **Pages**
3. ในส่วน **Build and deployment**:
   - **Source**: เลือก `Deploy from a branch`
   - **Branch**: เลือก `main` / `master` โฟลเดอร์ `/ (root)`
4. กด **Save** ระบบจะทำการสร้าง URL เว็บไซต์ให้ทันที เช่น `https://<username>.github.io/<repository-name>/`

---

## 🛡️ เทคโนโลยีที่ใช้ (Tech Stack)

- **Frontend Framework**: HTML5, Vanilla JavaScript, Tailwind CSS (via CDN)
- **Mapping Engine**: Leaflet.js 1.9.4, Leaflet Draw
- **Charts Library**: Chart.js, ApexCharts
- **Icons & UI**: FontAwesome 6.4, SweetAlert2
- **Backend API**: Google Apps Script (Web App Endpoint)
- **Data Analytics**: Google Looker Studio Embed

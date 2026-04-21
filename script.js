const data = {
  topic1: [

{
name:"อวกาศคืออะไร",
image:"assets/space1.png",
desc:"อวกาศ คือ บริเวณที่อยู่นอกชั้นบรรยากาศของโลก เป็นพื้นที่กว้างใหญ่ที่มีดาวเคราะห์ ดาวฤกษ์ กาแล็กซี และวัตถุต่าง ๆ อยู่มากมาย"
},

{
name:"ลักษณะของอวกาศ",
image:"assets/space2.png",
desc:"อวกาศมีสภาพเป็นสุญญากาศ ความดันต่ำมาก แทบไม่มีอากาศ จึงไม่สามารถหายใจได้ และเสียงไม่สามารถเดินทางผ่านอวกาศได้"
},

{
name:"อุณหภูมิในอวกาศ",
image:"assets/space3.png",
desc:"อวกาศมีอุณหภูมิเปลี่ยนแปลงมาก หากอยู่ในแสงอาทิตย์จะร้อนจัด แต่บริเวณที่ไม่มีแสงจะหนาวจัด จึงต้องใช้อุปกรณ์ป้องกันพิเศษ"
},

{
name:"ความสำคัญของอวกาศ",
image:"assets/space4.png",
desc:"อวกาศมีความสำคัญต่อการศึกษาโลก การสื่อสารผ่านดาวเทียม การพยากรณ์อากาศ และช่วยให้มนุษย์เข้าใจต้นกำเนิดของจักรวาลมากขึ้น"
}

],
  topic2: [
    { name:"หัวข้อ 2", image:"assets/placeholder.png", desc:"ใส่ข้อมูลการเกิดดาวฤกษ์" }
  ],
  topic3: [
    { name:"หัวข้อ 3", image:"assets/placeholder.png", desc:"ใส่ข้อมูลดาวเคราะห์แคระ" }
  ],
  topic4: [
    { name:"หัวข้อ 4", image:"assets/placeholder.png", desc:"ใส่ข้อมูลหลุมดำ" }
  ],
  topic5: [
    { name:"หัวข้อ 5", image:"assets/placeholder.png", desc:"ใส่ข้อมูลกาแล็กซี" }
  ],
  topic6: [
    { name:"หัวข้อ 6", image:"assets/placeholder.png", desc:"ใส่ข้อมูลเนบิวลา" }
  ],
  topic7: [
    { name:"หัวข้อ 7", image:"assets/placeholder.png", desc:"ใส่ข้อมูลดวงจันทร์" }
  ],
  topic8: [
    { name:"หัวข้อ 8", image:"assets/placeholder.png", desc:"ใส่ข้อมูลดาวหาง" }
  ],
  topic9: [
    { name:"หัวข้อ 9", image:"assets/placeholder.png", desc:"ใส่ข้อมูลอุกกาบาต" }
  ],
  topic10: [
    { name:"หัวข้อ 10", image:"assets/placeholder.png", desc:"ใส่ข้อมูลสถานีอวกาศ" }
  ],
  topic11: [
    { name:"หัวข้อ 11", image:"assets/placeholder.png", desc:"ใส่ข้อมูลนักบินอวกาศ" }
  ],
  topic12: [
    { name:"หัวข้อ 12", image:"assets/placeholder.png", desc:"ใส่ข้อมูลจักรวาล" }
  ]
};

let currentTopic=null, currentIndex=0;

const menu=document.getElementById("menu");
const content=document.getElementById("content");
const end=document.getElementById("end");

const title=document.getElementById("title");
const desc=document.getElementById("desc");
const img=document.getElementById("image");
const progress=document.getElementById("progress");

function setView(v){ menu.classList.remove("active");content.classList.remove("active");end.classList.remove("active");v.classList.add("active"); }

function start(topic){ currentTopic=topic; currentIndex=0; setView(content); render(); }

function render(){
  const item = data[currentTopic][currentIndex];
  const card = document.querySelector(".card");

  // ล้าง animation เก่าก่อน
  card.classList.remove("fade-in", "fade-out");

  // บังคับ reflow (โคตรสำคัญ)
  void card.offsetWidth;

  // เริ่ม fade-out
  card.classList.add("fade-out");

  setTimeout(() => {
    title.innerText = item.name;
    desc.innerText = item.desc;
    img.src = item.image;
    progress.innerText = (currentIndex+1) + "/" + data[currentTopic].length;

    // ล้างแล้วใส่ใหม่
    card.classList.remove("fade-out");
    void card.offsetWidth;
    card.classList.add("fade-in");

  }, 200);
}

function next(){
  currentIndex++;
  if(currentIndex>=data[currentTopic].length){ setView(end); return;}
  render();
}

function prev(){ if(currentIndex>0){currentIndex--; render();} }

document.querySelectorAll(".menu-btn").forEach(b=>b.onclick=()=>start(b.dataset.topic));
document.getElementById("nextBtn").onclick=next;
document.getElementById("prevBtn").onclick=prev;
document.getElementById("backBtn").onclick=()=>setView(menu);
document.getElementById("backMenuFromEnd").onclick=()=>setView(menu);

setView(menu);

//slide4_content
const slide4_h1=document.getElementById("slide4_head1")
const slide4_h2=document.getElementById("slide4_head2")
const slide4_h3=document.getElementById("slide4_head3")
const slide4_p1=document.getElementById("slide4_para1")
const slide4_p2=document.getElementById("slide4_para2")
const slide4_p3=document.getElementById("slide4_para3")

slide4_h1.innerText = "Innovative, Hands-On Learning Kits"
slide4_h2.innerText ="Expert Support & Resources"
slide4_h3.innerText ="Affordable & Curated for Value"
slide4_p1.innerText ="Genzonix offers high-quality STEM and IoT DIY kits designed to engage learners through hands-on activities. Each kit fosters creativity, problem-solving, and technical skills, making learning practical and fun for all ages."
slide4_p2.innerText ="Genzonix provides easy-to-follow guides, tutorials, and customer support, ensuring even beginners can dive into STEM projects confidently. We aim to make tech learning accessible and enjoyable, regardless of experience level."
slide4_p3.innerText = "Our kits are competitively priced, balancing affordability with quality. We thoughtfully curate each kit to include essential components, giving customers a comprehensive, high-value experience without breaking the bank."

const correctValue = "think_innovate";
document.getElementById('accesskey').addEventListener('click', (e) => {
    e.preventDefault();
    const input = prompt('Enter your Access key');
    if (input === correctValue || input === "genzadmin") {
        window.location.href = "IoT.html"; // Redirect to protected page
    } else {
        alert("Access Denied");
    }
});

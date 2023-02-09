// ponder.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        {sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'},
    ],
    enrollStudent: function (sectionNum) {
        let sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled++;
            render(this.sections);
        }
    },
    dropStudent: function (sectionNum) {
        let sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled--;
            render(this.sections);
        }
    }
}
    // ANOTHER WAY TO PUT IT TOGETHER THE METHOD "enrollStudent and dropStudent" 
    
    //________________________________________________

    //changeEnrollment: function (sectionNum, add = true) {
    // const sectionIndex = this.sections.findIndex(
    //     (section) => section.sectionNum == sectionNum
    //   );
    //   if (sectionIndex >= 0) {
    //     if (add) {
    //       this.sections[sectionIndex].enrolled++;
    //     } else {
    //       this.sections[sectionIndex].enrolled--;
    //     }
    //     renderSections(this.sections);
    //   }
    // }


function setCourse(course) {
    let nameCourse = document.getElementById("courseName");
    let codeCourse = document.getElementById("courseCode");
    nameCourse.textContent = course.name;
    codeCourse.textContent = course.code;
}

function render(sections) {
    let html = sections.map((section) => `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td></tr>`);
    document.getElementById("sections").innerHTML = html.join("");
}

document.getElementById("enrollStudent").addEventListener("click", function() {
    let sectionNum = document.getElementById("sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});
document.getElementById("dropStudent").addEventListener("click", function () {
    let sectionNum = document.getElementById("sectionNumber").value;
    aCourse.dropStudent(sectionNum);
})

setCourse(aCourse);
render(aCourse.sections);

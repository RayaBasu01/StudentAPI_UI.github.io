fetch("https://fine-blue-sawfish-yoke.cyclic.app/api/students/testing")
.then((res)=>res.json())
.then((data)=>{
    console.log(data);
    
    data.StudentData.forEach(student => {
        $("#tablebody").append(`
            <tr>
                <td>${student.roll}</td>
                <td>${student.fname}</td>
                <td>${student.lname}</td>
                <td>${student.email}</td>
                <td>${student.gender}</td>
                <td>${student.department}</td>
                <td>${student.cgpa}</td>
            </tr>
            
        `);
    });

        $(".tableManager").tablemanager({
            firstSort:[
                [1,"asc"],
            ],
            
            appendFilterby:true,
            debug:true,
            vocabulary:{
                voc_filter_by:"Filter By",
                voc_type_here_filter:"Filter...",
                voc_shows_rows:"Rows per page"
            },
           pagination : true,
           showrows:[10,20]
        })
        
    
})


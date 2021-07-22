var student_name=[]
function submit()
{
    for(var i=1;i<=4;i++)
    {
        var name=document.getElementById("name_of_the_student_"+i).value;
        student_name.push(name);
    }
    console.log(student_name);
    var length=student_name.length;
    console.log(length);
    var display_array=[]

    for(var k=0;k<length;k++)
    {
        display_array.push("<h4>Name-"+student_name[k]+"</h4>");
        console.log(display_array);
    }
    console.log(display_array);
    document.getElementById("display_name_with_commas").innerHTML=display_array;
    var remove_commas=display_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";

}
function sorting()
{
    var sorted_array=[]
    for(var w=0;w<length;w++)
    {
        sorted_array.push("<h4>Name-"+display_array [w]+"</h4>");
    }
    sorted_array.sort();
    document.getElementById("display_name_without_commas").innerHTML=sorted_array;
}
//ฟังก์ชั้นนี้ใช้สำหรับคำนวณค่า BMI
const CalculateBMI=(weight,height)=>{
    let value = weight/((height*0.01)*(height*0.01))
    return value.toFixed(2)   
}
//ฟังก์ชั้นนี้ใช้สำหรับแสดงผล
const display=(ElementID,value)=>{
    document.getElementById(ElementID).innerHTML = value
}
//ฟังก์ชั้นนี้ใช้เปรียบเทียบค่าBMIที่คำนวณได้และนำมาหาเกณท์ของผู้ใช้ว่าอยู่ในแรงค์ไหน
const Compare=(bmi)=>{
    let obj ={
        criterion :"",
        gain : ""
    }   
    if(bmi<=18.50){
        obj.gain="น้ำหนักน้อย / ผอม"
        obj.criterion="มากกว่าคนปกติ"
    }else if(bmi>=18.50 && bmi<23){
        obj.gain="ปกติ(สุขภาพดี)"
        obj.criterion="เท่าคนปกติ"
    }else if(bmi>=23 && bmi<25){
        obj.gain="ท้วม / โรคอ้วนระดับ 1"
        obj.criterion="อันตรายระดับ 1"
    }else if(bmi>=25 && bmi<30){
        obj.gain="อ้วน / โรคอ้วนระดับ 2"
        obj.criterion="อันตรายระดับ 2"
    }else if(bmi>30){
        obj.gain="อ้วน / โรคอ้วนระดับ 3"
        obj.criterion="อันตรายระดับ 3"
    }else{
        obj.gain="ระบุน้ำหนัก/ระบุส่วนสูง"
        obj.criterion="ระบุน้ำหนัก/ระบุส่วนสูง"
    }
    return obj
}
//เป็นส่วนของโปรแกรมที่เรียกใช้ฟังก์ชั่นทั้งหมด
const CalculateBMIProgram=(weight,height)=>{
    let bmi = CalculateBMI(weight,height);
    let someone = Compare(bmi);

    display("result",bmi)

    display("result2",someone.gain)
    display("result3",someone.criterion)
}

let st = prompt("Enter any string");
let vocount = 0;
let concount = 0;
st = st.toLowerCase();
for (let i=0; i<st.length;i++){
    if (st[i]=='a' || st[i]=='e' || st[i]=='i' || st[i]=='o' || st[i]=='u'){
        vocount++;
    }else{
        concount++;
    }
}
document.write(vocount+'<br>');
document.write(concount+'<br>');

//“Find the longest word in a given sentence.”

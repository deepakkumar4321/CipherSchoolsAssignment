function removeDups(chars)
{


let uniqueChars = chars.filter((c, index) => {
    return chars.indexOf(c) === index;
})
document.write(uniqueChars);
}
removeDups(["John", "Taylor", "John"]);

//using regular expression to achieve the same goal

var text = `Valentine Oragbakosi <v.oragbakosi@genesystechhub.com> +234-7032434429
Chinonso Williams Junior <c.williams@genesystechhub.com> +234-9034464230
Ndife Uchenna <n.uchenna@genesystechhub.com> +234-8052464529
Ehiogu Chika Josephine <c.josephine@genesystechhub.com> +234-7022454620
Chidera Jennifer <c.jennifer@genesystechhub.com> +234-8032434425
Nwosu Ifeoma Lucia <l.ifeoma@genesystechhub.com> +234-9032434424
Ibe Agwu <i.ogele@genesystechhub.com> +234-7032434427`
//Given above text write a function(s) that returns arrays of names, emails and phone numbers
function names (text)
{
    return text.match(/([a-zA-Z]+[ ]* [a-zA-Z]+)/gi);
    //regExp to extract first names and last names from the string
}
console.log(names(text));


function Emails (text)
{
    return text.match(/([a-zA-Z.]+@[a-zA-Z.]+\.[a-zA-Z.]+)/gi);
     //regExp to extract emails from the string 
}

console.log(Emails(text));


function  phoneNo (text)
{
    return text.match(/([\d+\d-\d{1,10}]+)/gi);
    //regExp to extract numbers from the string 
}
console.log(phoneNo(text))

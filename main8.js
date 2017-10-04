window.onload = function()
{
    var arr = ["Eyvette", "Jesus","Gregory","Jesus", "Les", "Laura","Jesus", "Kwanya", "Ariana", "Jesus"];
    
    var mostFrequent = 1;
    var notFrequent = 0;
    var item;
    
    for (i = 0; i < arr.length; i++)
        {
            for (j = i; j < arr.length; j++)
                {
                  if (arr [i] == arr [j])
                    {
                        notFrequent++;
                    }
                    
                  if (mostFrequent < notFrequent)
                    {
                      mostFrequent = notFrequent;
                        item = arr [i];
                    }
                                
                    
                }
            notFrequent = 0;
        } 
    alert (item + " appears " + mostFrequent + " times");
    
} 

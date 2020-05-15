
// çağırıldığında çalışan fonksiyon , While ve break ile 0-10 arası tek sayıları toplayan ve 7ye gelince döngüden çıkan kod

(function as()
{
    while(a <= 10)
    {
        if(a % 2 == 1)
        {
            
            tektopla = tektopla + a;
        }
        if(a==7)
        {
            break;
        }
        a++;
    }
console.log(tektopla);
})();
/*Örnek: Vize ve final notları belli olan bir öğrencinin yıl sonunda dersten geçip geçmediğini hesaplayalım:

Şartlar:

Öğrencinin vize notunun %30'unu final notunun %70'ini alalım.
Vize ve final notunun toplamından doğan not ortalaması eğer 0-30 aralığındaysa KALDINIZ (FF) yazdıralım.
31-49 aralığındaysa DC - KOŞULLU yazdıralım.
50- 84 aralığındaysa CC - GEÇTİNİZ! yazdıralım.
85-100 aralığındaysa Notunuz AA yazdıralım.
*/
let vize=prompt("Vize Notunu Giriniz:")
let final=prompt("Final Notunu Giriniz:")
let ort=(vize*0.3)+(final*0.7)

if(ort>=0 && ort<=30)
{console.log(`Ortalamanız= ${ort} FF - KALDINIZ`)}

else if(ort>=31 && ort<=49)
{console.log(`Ortalamanız= ${ort} DC - KOŞULLU GEÇTİNİZ`)}

else if(ort>=50 && ort<=84)
{console.log(`Ortalamanız= ${ort} CC - GEÇTİNİZ`)}

else if(ort>=85 && ort<=100)
{console.log(`Ortalamanız= ${ort} AA - GEÇTİNİZ`)}
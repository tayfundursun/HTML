# Soru
[22,27,16,2,18,6] -> Insertion Sort

1- Yukarı verilen dizinin sort türüne göre aşamalarını yazınız. <br>
2- Big-O gösterimini yazınız. <br>
3- Time Complexity: Average case: Aradığımız sayının ortada olması,Worst case: Aradığımız sayının sonda olması, Best case: Aradığımız sayının dizinin en başında olması. <br>
4- Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız. <br>
5- [7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız. <br>

# Cevap
1- Algoritma, en küçük elemanı bulup sıfır index'i ile değiştirir, sonrasında ikinci en küçük elemanla birinci index'i değiştirir ve algoritma böyle devam eder. <br>
2- O(n^2) <br>
3- Average case: 16-18 --- Worst case: 27 --- Best case: 2 <br>
4- Average case kapsımına girer. <br>
5- [2,7,3,5,8,,9,4,15,6] -> [2,3,7,5,8,9,4,15,6] -> [2,3,4,7,5,8,9,15,6] -> [2,3,4,5,7,8,9,15,6] 
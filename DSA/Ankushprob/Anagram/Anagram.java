import java.util.*;
public class Anagram {
    static boolean check(char[] ch1,char[] ch2){
        if(ch1.length!=ch2.length){
            return false;
        }
        for(int i=0;i<ch1.length;i++){
            if(ch1[i]!=ch2[i]) return false;
        }
        return true;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        String str1=sc.nextLine();
        String str2=sc.nextLine();
        char[] ch1=str1.toCharArray();
        char[] ch2=str2.toCharArray();
        Arrays.sort(ch1);
        Arrays.sort(ch2);
        System.out.println(check(ch1,ch2));
    }
    
}

import java.util.*;

class LongestCommon {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int count = 0, count1 = 0;
        String[] a = new String[n];
        for (int i = 0; i < n; i++) {
            a[i] = scanner.next();
        }
        for (int i = 0; i < a.length; i++) {
            for (int j = 0; j < a[i].length(); j++) {
                if (a[i].charAt(j) == 'C') {
                    count++;
                } else
                    count = 0;
                if (count > count1)
                    count1 = count;
            }
            count = 0;
        }
        System.out.print(count1 + " ");
        count = 0;

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < a[i].length(); j++) {
                if (a[i].charAt(j) == 'C')
                    count++;
                else
                    count = 0;
                if (count > count1)
                    count1 = count;
            }
        }
        System.out.print(count1);
    }
}

// Add multiples of 3 and 5 under 1000
public class Three_Five {
    public static void main(String[] args) {
        // Initialise the sum as a counter
        int sum = 0;
        //Search for numbers under 1000
        for(int i = 0; i < 1000; i++) {
            if(i % 3 == 0 || i % 5 == 0) {
                sum += i;
            }
        }
    }
}

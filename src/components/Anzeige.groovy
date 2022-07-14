/*class Anzeige {
    public static void main(String[] args) {
        try {
            //  OpenWeather API:
            //  https://api.openweathermap.org/data/2.5/weather?lat=51.050407&lon=13.737262&appid=90d4dad00251933d21a5ecf1495247c2


            def URL = new URL("https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=90d4dad00251933d21a5ecf1495247c2")

            HttpURLConnection conn = (HttpURLConnection) URL.openConnection()
            conn.setRequestMethod("GET")
            conn.connect()

            // Check the connection
            int responseCode = conn.getResponseCode()

            // 200 ok
            if (responseCode != 200) {
                throw new RuntimeException("HttpResponseCode: " + responseCode)
            } else {

                StringBuilder informationString = new StringBuilder()
                def Scanner = new Scanner(URL.openStream())

                while (Scanner.hasNext()) {
                    informationString.append(Scanner.nextLine())
                }

                // Close the Scanner
                Scanner.close()

                // Output 1
                println(informationString)

                // new String
                String str= new String(informationString)

                def slurper = new groovy.json.JsonSlurper()
                def list = slurper.parseText(str)

                // Output 2
                println(list)

                def r = list["weather"]

                println(r)

            }

        } catch (Exception e) {
            e.printStackTrace()
        }
    }
}*/
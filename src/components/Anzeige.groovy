import groovy.json.JsonSlurper
import groovy.json.JsonOutput

class Anzeige{
    static void main(String[] args) {

        URL url = new URL("https://bimeta-prod-api.azurewebsites.net/api/v0.1/profiles")
        HttpURLConnection http = (HttpURLConnection) url.openConnection()
        http.setRequestMethod("GET")
        http.setRequestProperty("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImpGNGN1bG1BYTRtRnQycG5GYk5TbiJ9.eyJodHRwczovL2JpbWV0YS5jb20vY2xhaW1zL3JvbGVzIjpbIkFkbWluaXN0cmF0b3IiXSwiaXNzIjoiaHR0cHM6Ly9iaW1ldGEuZXUuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDVmNWEwMWExNTUxMTFmMDA2ZmZlZjg1ZiIsImF1ZCI6Imh0dHBzOi8vYmltZWF0YS5jb20vYXBpIiwiaWF0IjoxNjU3ODczMzA4LCJleHAiOjE2NTc5NTk3MDgsImF6cCI6ImpKVkoxYlhtbXdWcGNCVURFZVVvUWNiMGFyUFVkWjltIiwic2NvcGUiOiJyZWFkOmFsbGRhdGEgd3JpdGU6YWxsZGF0YSIsImd0eSI6InBhc3N3b3JkIiwicGVybWlzc2lvbnMiOlsicmVhZDphbGxkYXRhIiwid3JpdGU6YWxsZGF0YSJdfQ.Lx2pe_e7vuOAyUKvowrjSuTJDf0PtCHNbsB0oipJT0dDGiThUiI43lJFBtIc3N_HTpduxTjsm95dS1Bto_Qr2-ENUkY_9yg6DlujW_ZQnhhrIq6tyFY7BRLfBOa3wSw4WfPapB0Yt7gjsnxx80N12mkxdUyONO19RchDfV4Rbg_SZl6Idi1tSCC2REtXHErmFnmhDMsvMlCbJjNRKMO326sWBHJen8gU0IYzOOj9wjBqbXvk3EcS3gccpDmf5EPaMC-XQ74R8jTHxTPQlmxX4rF4Hhx49NnB_KHlMkh8Yly6nebsSr9zU0wMMpklXm8BWwI5ZKa5jKuh-Za08Igb5A")

        int responseCode = http.getResponseCode()

        println(responseCode + " " + http.getResponseMessage())
        println(http.getContentType())

        if (responseCode == 200) {

            def informationString = new StringBuilder()
            def scanner = new Scanner(http.getInputStream())

            while (scanner.hasNext()) {
                informationString.append(scanner.nextLine())
            }

            // Close the Scanner
            scanner.close()

            // new String
            String str = new String(informationString)

            def slurper = new JsonSlurper()
            def list = slurper.parseText(str)

            // Output 2
            println(list)

            File file = new File("E:/IdeaProjects/test.json")
            def json = JsonOutput.toJson(list)
            file.write(json)

        } else {
            println("nicht 200")
        }

        http.disconnect()
    }
}
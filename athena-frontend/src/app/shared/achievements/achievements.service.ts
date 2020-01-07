import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Achievements } from "./achievements.model";

@Injectable({
  providedIn: "root"
})
export class AchievementsService {
  selectedAchievements: Achievements = {
    uploadedFiles: [], 
    achCat: "",
    achSubCat: "" ,
    description:"",
    rank:""
  };
  
  achievements: Achievements[];

  constructor(private http: HttpClient) {}

  postAchievements(ach: Achievements) {
    console.log("Post achievements method");
    console.log(ach);
    return this.http.post("https://backend-athena.herokuapp.com/achievements", ach);
  }

  getAchievements() {
    return this.http.get("https://backend-athena.herokuapp.com/achievements");
  }

  deleteAchievement(_id: string) {
    return this.http.delete("https://backend-athena.herokuapp.com/delete-achievement")
  }
}

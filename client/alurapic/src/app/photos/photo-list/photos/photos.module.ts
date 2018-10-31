import { NgModule } from "@angular/core";
import { PhotosComponent } from "./photos.component";
import { CommonModule } from "@angular/common";
import { PhotoListModule } from "../photo-list.module";
import { HttpClientModule } from "@angular/common/http";
import { PhotoModule } from "../../photo/photo.module";

@NgModule({
    imports:[
        PhotosComponent,
        PhotoListModule,
        HttpClientModule,
        PhotoModule,
        CommonModule
    ]
})
export class PhotosModule {

}
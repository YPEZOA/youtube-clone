import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeVideosService {

  key: string;

  constructor(private http: HttpClient) { 
    this.key = 'AIzaSyD22XLM2jVoiV9yRCfsmam_NUR0wrXy4Os';
  }

  searchVideos(query: string, pageToken: string): Observable<any> {
    let searchParams = new HttpParams().set('part', 'snippet').set('maxResults', '30').set('key', this.key).set('pageToken', pageToken)
    return this.http.get<any>(`${environment.api_url}?q=${query}`, {params: searchParams})
  }

  getChannel(channelId: string): Observable<any> {
    return this.http.get<any>(`${environment.api_channels}?id=${channelId}&key=${this.key}&part=snippet`)
  }
}

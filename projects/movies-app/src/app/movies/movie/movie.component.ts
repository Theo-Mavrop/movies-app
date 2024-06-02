import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MoviesFacadeService } from '../movies.facade.service';
import { takeUntil } from 'rxjs/operators';
import { MovieDTO } from '@movies-app/api';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieComponent implements OnInit{

  movie$: Observable<MovieDTO>;
  getMovieSucceed$: Observable<boolean>;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private route: ActivatedRoute,
    private moviesFacadeService: MoviesFacadeService
  ) {
    this.movie$ = this.moviesFacadeService.movie$;
    this.getMovieSucceed$ = this.moviesFacadeService.getMovieSucceed$;
  }

  ngOnInit(): void {
    this.route.params.pipe(
      takeUntil(this.destroy$)
    ).subscribe(params => {
      const movieId = Number(params['id']);
      this.moviesFacadeService.loadMovie(
        {
          id: movieId,
        });
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}

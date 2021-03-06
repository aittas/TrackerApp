
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms'
import { timer, Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { Task } from '../models/task.interface';



@Component
({
    selector: 'app-tracker',
    templateUrl: './tracker.page.html',
    styleUrls: ['./tracker.page.scss'],
})



export class TrackerPage implements OnInit 
{
    taskForm:   FormGroup;
    started:    Boolean = false;
    startTime:  number;
    stopTime:   number;
    timerSub:   Subscription;
    time:       number;

    constructor
    (
        private formBuilder: FormBuilder,
        private dataService: DataService

    ) { }

    ngOnInit() //ng means angular
    {
        this.taskForm = this.formBuilder.group
        ({
            name: [ '', [ Validators.required, Validators.minLength(3) ] ]
        });
    }

    start()
    {
        this.started = true;
        this.startTime = new Date().getTime();
        const tm = timer(0, 1000);
        this.timerSub = tm.subscribe( val => this.time = val );

        console.log( 'start time: ' + this.startTime );
    }

    stop()
    {
        this.started = false;
        this.stopTime = new Date().getTime();
        this.timerSub.unsubscribe();
        this.save();
        this.taskForm.reset();

        console.log( ' stop time: ' + this.stopTime );
    }

    save()
    {
        let task: Task = 
        {
            name:   this.taskForm.get('name').value,
            start:  this.startTime,
            stop:   this.stopTime
        }

        this.dataService.addToList( task );
    }


}

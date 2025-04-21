<div class="buyTicket__content">
    
    @if(!isset($cinemas_events) || empty($cinemas_events))
        К сожалению, по вашему запросу ничего не найдено!
    @endif
    <div id="schedule_cinemas">
   
        @foreach($cinemas as $cinema)
            @if(isset($cinema['events']) && !empty($cinema['events']))
                <div class="buyTicket__content__item grid_buyTicket_content">
                <div class="buyTicket__content__title">{{$date_str}}</div>
                    <div
                        class="buyTicket__content__item_place grid_buyTicket_content_place"
                    >
                        {{$cinema['name']}}
                    </div>
                    <div
                        class="buyTicket__content__item_info_ctn grid_buyTicket__content__item_info"
                    >
                        @if(isset($cinema['events']) && !empty($cinema['events']))
                            @foreach($cinema['events'] as $event)
                                <div
                                    class="buyTicket__content__item_info grid_buyTicket__content__item_info"
                                >
                                    <a href="{{route('front.event', ['id'=>$event['id'],'cityName' => $current_city['slug']])}}"
                                       class="buyTicket__content__item_film">
                                        {{$event['name']}}
                                    </a>

                                    <div class="buyTicket__content__item__time">
                                        @foreach($event['sessions'] as $session)
                                            @if($session['timeSpending'] < time() - 1200 || $session['isSaleOpen'] === false)
                                                <div data-time="{{(int)date("Hi", $session['timeSpending'])}}"
                                                     class="button light_button">{{date("H:i", $session['timeSpending'])}}</div>
                                            @else
                                                <a data-time="{{(int)date("Hi", $session['timeSpending'])}}"
                                                   href="{{$frame_url}}&sid={{$session['id']}}"
                                                   class="button light_button canBuyTicket">{{date("H:i", $session['timeSpending'])}}</a>
                                            @endif

                                        @endforeach
                                    </div>

                                    <div class="buyTicket__content__item__price">
                                        @if((int)$event['minPrice'] >= 0 && (int)$event['maxPrice'] > 0)
                                            <a href="{{route('front.event', ['id'=>$event['id'],'cityName' => $current_city['slug']])}}"
                                               class="button light_button">
                                                @if((int)$event['minPrice'] != 0 && (int)$event['minPrice'] != (int)$event['maxPrice'])
                                                    от {{$event['minPrice']}} - {{$event['maxPrice']}} BYN
                                                @else
                                                до {{$event['maxPrice']}} BYN
                                                @endif
                                            </a>
                                        @endif
                                    </div>
                                </div>

                            @endforeach
                        @endif
                                <div class="buyTicket__items-seeAll">
                                    <div class='text'>Показать больше</div>
                                    <div class="icon-chevron-right"></div>
                                </div>

                    </div>
                </div>
            @endif
        @endforeach
    </div>
    <div id="schedule_events" style="display: none">
        @foreach($cinemas_events as $event)
            @if(isset($event['cinemas']) && !empty($event['cinemas']))
                <div class="buyTicket__content__item grid_buyTicket_content">
                    <!-- <a href="{{route('front.event', ['id'=>$event['id'],'cityName' => $current_city['slug']])}}"
                       class="buyTicket__content__item_place grid_buyTicket_content_place"
                    > -->
                    <div class="buyTicket__content__item_place grid_buyTicket_content_place">
                        {{$event['name']}}
                    </div>

                    <!-- </a> -->
                    <div
                        class="buyTicket__content__item_info_ctn grid_buyTicket__content__item_info"
                    >
                        @if(isset($event['cinemas']) && !empty($event['cinemas']))
                            @foreach($event['cinemas'] as $cinema)
                                <div
                                    class="buyTicket__content__item_info grid_buyTicket__content__item_info"
                                >
                                    <div class="buyTicket__content__item_film">
                                        {{$cinema['name']}}
                                    </div>

                                    <div class="buyTicket__content__item__time">
                                        @foreach($cinema['sessions'] as $session)
                                            @if($session['timeSpending'] < time() - 1200 || $session['isSaleOpen'] === false)
                                                <div data-time="{{(int)date("Hi", $session['timeSpending'])}}"
                                                     class="button light_button">{{date("H:i", $session['timeSpending'])}}</div>
                                            @else
                                                <a data-time="{{(int)date("Hi", $session['timeSpending'])}}"
                                                   href="{{$frame_url}}&sid={{$session['id']}}"
                                                   class="button light_button canBuyTicket">{{date("H:i", $session['timeSpending'])}}</a>
                                            @endif

                                        @endforeach
                                    </div>

                                    <div class="buyTicket__content__item__price">
                                        @if((int)$event['minPrice'] >= 0 && (int)$event['maxPrice'] > 0)
                                        <a href="{{route('front.event', ['id'=>$event['id'],'cityName' => $current_city['slug']])}}"
                                           class="button light_button">
                                            @if((int)$event['minPrice'] != 0 && (int)$event['minPrice'] != (int)$event['maxPrice'])
                                                {{$event['minPrice']}} - {{$event['maxPrice']}} BYN
                                            @else
                                                до {{$event['maxPrice']}} BYN
                                            @endif
                                        </a>
                                        @endif
                                    </div>
                                </div>

                            @endforeach
                        @endif
                                <div class="buyTicket__items-seeAll">
                                    <div class='text'>Показать больше</div>
                                    <div class="icon-chevron-right"></div>
                                </div>
                    </div>
                </div>
            @endif
        @endforeach
    </div>

</div>

package org.wcci.FinalProjectWeCanRacquet;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import org.wcci.FinalProjectWeCanRacquet.models.Match;
import org.wcci.FinalProjectWeCanRacquet.models.Player;
import org.wcci.FinalProjectWeCanRacquet.models.Record;
import org.wcci.FinalProjectWeCanRacquet.models.SetsScore;
import org.wcci.FinalProjectWeCanRacquet.repos.MatchRepository;
import org.wcci.FinalProjectWeCanRacquet.repos.PlayerRepository;
import org.wcci.FinalProjectWeCanRacquet.repos.RecordRepository;
import org.wcci.FinalProjectWeCanRacquet.repos.SetsRepository;

import javax.persistence.SecondaryTable;

@Component
public class Populator implements CommandLineRunner {

    private PlayerRepository playerRepo;
    private SetsRepository setsRepo;
    private MatchRepository matchRepo;
    private RecordRepository recordRepo;

    public Populator(PlayerRepository playerRepo, SetsRepository setsRepo, MatchRepository matchRepo, RecordRepository recordRepo) {
        this.playerRepo = playerRepo;
        this.setsRepo = setsRepo;
        this.matchRepo = matchRepo;
        this.recordRepo = recordRepo;
    }

    @Override
    public void run(String... args) throws Exception {

        Player player1 = new Player("Ed","3.0","https://img.freepik.com/premium-vector/man-character-avatar-icon-tennis-sport_51635-2515.jpg",
                "ed1@gmail.com","6145524515");
        playerRepo.save(player1);

        Player player2 = new Player("Anish","3.0","https://img.freepik.com/premium-vector/man-character-avatar-icon-tennis-sport_51635-2515.jpg",
                "ed1@gmail.com","6145524515");
        playerRepo.save(player2);

        SetsScore set1 = new SetsScore(6,0);
        SetsScore set2 = new SetsScore(3,6);
        SetsScore set3 = new SetsScore(6,4);
        setsRepo.save(set1);
        setsRepo.save(set2);
        setsRepo.save(set3);

        Match match1 = new Match(set1,set2,set3);
        matchRepo.save(match1);

        Record record1 = new Record(player1, player2, match1);
        recordRepo.save(record1);




    }
}
